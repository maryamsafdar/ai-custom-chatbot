import { notesIndex } from "@/lib/db/pinecone";
import prisma from "@/lib/db/prisma";
import openai, { getEmbedding } from "@/lib/openai";
import { auth } from "@clerk/nextjs/server";
import { ChatCompletionMessage } from "openai/resources/index.mjs";
import { OpenAIStream, StreamingTextResponse } from 'ai' 


export async function POST(req: Request){
    try{
        const body= await req.json();
        const messages: ChatCompletionMessage[]= body.messages;
        const messageTruncated= messages.slice(-6)
        const embedding = await getEmbedding(
            messageTruncated.map((message) => message.content).join("\n ")
        )
    //Hey what's my wifi password
    //It's 123456
    //Thank you
    //You're welcome
    const {userId} = await auth();
    const vectorQueryResponse = await notesIndex.query({
        vector: embedding,
        topK: 4,
        filter: {userId},
    });
    const releventNotes = await prisma.note.findMany({
        where: {
            id: {in: vectorQueryResponse.matches.map((note) => note.id)},
        },
    })
    console.log("Relevent Notes found", releventNotes )
    const assistantMessage: ChatCompletionMessage= {
        role: "assistant",
        content: "You are an intelligent note-taking app.You answer the user's question based on thier existing notes"
        + "The relevet notes for this query are:\n"+
        releventNotes.map(( notes ) => `Title: ${notes.title}\n\nContent:\n${notes.content}\n`).join( "\n\n"),
        refusal:""
    }
    
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 0.7,
        stream:true,
        messages: [
            assistantMessage,
            ...messageTruncated
        ]
    })
    const stream = OpenAIStream(response)
    return new StreamingTextResponse(stream)

    }catch (error){
        console.error(error);
        return Response.json({error: "Internal server error"}, {status: 500});
    
    }

}
