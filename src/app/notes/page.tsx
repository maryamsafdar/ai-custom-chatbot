import Note from "@/components/ui/Note";
import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlowBrain - Notes",
};

export default async function NotesPage() {
// const authData = await auth();
// console.log("Auth Data:", authData); // Debugging

// const userId = authData?.userId;
const {userId} = await auth()

if (!userId) {
  throw Error("Unauthorized: User not authenticated");
}

  if (!userId) throw Error("userId undefined");

  const allNotes = await prisma.note.findMany({ where: { userId } });

  return <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> 
    {allNotes.map((note) => (
      <Note key={note.id} note={note} />
    ))}
    {allNotes.length === 0 && (
      <div className="text-center text-gray-500 col-span-full">{"You don't have any notes yet. Why you don't create one"}</div>
      )}
  </div>;
}



