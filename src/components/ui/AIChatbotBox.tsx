// import { cn } from "@/lib/utils";
// import { Message, useChat } from "ai/react";
// import { XCircle, Send, Bot, User } from "lucide-react";
// import { Input } from "./input";
// import { Button } from "./button";
// import { useUser } from "@clerk/nextjs";
// import Image from "next/image";
// import { useEffect, useRef } from "react";

// interface AIChatbotProps {
//     open: boolean;
//     onClose: () => void;
// }

// export default function AIChatbot({ open, onClose }: AIChatbotProps) {
//     const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat();
//     const inputRef = useRef<HTMLInputElement>(null);
//     const  scrollRef = useRef<HTMLDivElement>(null);
//     useEffect(() =>{
//         if(scrollRef.current){
//             scrollRef.current.scrollTop= scrollRef.current.scrollHeight;

//         }
        
//     },[messages])

//     return (
//         <div
//             className={cn(
//                 "fixed bottom-5 right-5 z-50 w-full max-w-md transition-all duration-300",
//                 open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
//             )}
//         >
//             <div className="glassmorphism flex h-[500px] flex-col rounded-xl border border-gray-600 shadow-2xl backdrop-blur-xl relative">
                
//                 <div className="p-4 flex items-center justify-between text-lg font-bold text-white bg-gradient-to-r from-gray-900 to-gray-700 rounded-t-xl">
//                     <div className="flex items-center">
//                         <Bot size={22} className="mr-2 text-white" />
//                         AI Assistant
//                     </div>
//                     <button
//                         onClick={onClose}
//                         className="text-gray-400 hover:text-gray-200 transition"
//                     >
//                         <XCircle size={28} />
//                     </button>
//                 </div>

//                 <div className="flex-1 overflow-y-auto p-4 space-y-3 h-full mt-3 px-3 overflow-auto" ref={scrollRef}>
//                     {messages.length === 0 ? (
//                         <p className="text-center text-black italic">Say hello to start the chat...</p>
//                     ) : (
//                         messages.map((msg, index) => (
//                             <ChatMessage key={index} message={msg} />
//                         ))
//                     )}
//                     {isLoading && <p className="text-center text-sm text-black">AI is thinking...</p>}
//                 </div>

//                 {error && <p className="text-red-500 text-sm text-center p-2">{error.message}</p>}

//                 <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-gray-600 bg-gray-800 rounded-b-xl">
//                     <Input
//                         value={input}
//                         type="text"
//                         onChange={handleInputChange}
//                         placeholder="Type a message..."
//                         className="text-black flex-1 p-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
//                         ref={inputRef}
//                     />
//                     <Button
//                         type="submit"
//                         disabled={isLoading}
//                         className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-950 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600 transition"
//                     >
//                         <Send size={18} />
//                         Send
//                     </Button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// function ChatMessage({message: { role, content }, }: {message: Pick<Message, "role" | "content">;}) {
//     const { user } = useUser();
  
//     const isAIMessage = role === "assistant";
//     return (
       
//         <div className={cn("mb-3 flex items-center", isAIMessage ? "me-5 justify-start text-black" : "justify-end ms-5 text-black")}>
//            {isAIMessage && <Bot className="mr-2 shrink-0"/>}
//            <p className={cn("whitespace-pre-line rounded-md border px-3 py-2",
//             isAIMessage ? "bg-background" : "bg-primary text-primary-foreground"
//            )}>{content}</p>
//            {!isAIMessage && user?.imageUrl && (
//             <Image
//             src={user.imageUrl}
//             alt="User Image"
//             width={100}
//             height={100}
//             className="rounded-full shadow-md ml-2 w-10 h-10 object-cover"
//             />

//            )}

//         </div>
//     );
// }
import { cn } from "@/lib/utils";
import { Message, useChat } from "ai/react";
import { XCircle, Send, Bot, User } from "lucide-react";
import { Input } from "./input";
import { Button } from "./button";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface AIChatbotProps {
    open: boolean;
    onClose: () => void;
}

export default function AIChatbot({ open, onClose }: AIChatbotProps) {
    const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat();
    const inputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div
        className={cn(
                            "fixed bottom-5 right-5 z-50 w-full max-w-md transition-all duration-300",
                            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
                        )}
        >
             <div className="glassmorphism flex h-[500px] flex-col rounded-xl border border-gray-600 shadow-2xl backdrop-blur-xl relative">
                
                              <div className="p-4 flex items-center justify-between text-lg font-bold text-white bg-gradient-to-r from-gray-900 to-gray-700 rounded-t-xl">
                                   <div className="flex items-center">
                                       <Bot size={22} className="mr-2 text-white" />
                                        AI Assistant
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-200 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-200 transition"
                    >
                        <XCircle size={28} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3 h-full mt-3 px-3 overflow-auto" ref={scrollRef}>
                    {messages.length === 0 ? (
                        <p className="text-center text-gray-600 dark:text-gray-300 italic">Say hello to start the chat...</p>
                    ) : (
                        messages.map((msg, index) => (
                            <ChatMessage key={index} message={msg} />
                        ))
                    )}
                    {isLoading && <p className="text-center text-sm text-gray-600 dark:text-gray-300">AI is thinking...</p>}
                </div>

                {error && <p className="text-red-500 text-sm text-center p-2">{error.message}</p>}

                <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-gray-600 bg-gray-800 rounded-b-xl">
                    <Input
                        value={input}
                        type="text"
                        onChange={handleInputChange}
                        placeholder="Type a message..."
                        className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                        ref={inputRef}
                    />
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-950 dark:to-gray-700 text-white hover:from-gray-800 hover:to-gray-600 transition"
                    >
                        <Send size={18} />
                        Send
                    </Button>
                </form>
            </div>
        </div>
    );
}

function ChatMessage({ message: { role, content } }: { message: Pick<Message, "role" | "content"> }) {
    const { user } = useUser();
    const isAIMessage = role === "assistant";

    return (
        <div className={cn("mb-3 flex items-center text-sm", isAIMessage ? "me-5 justify-start text-gray-900 dark:text-white" : "justify-end ms-5 text-gray-900 dark:text-white")}> 
            {isAIMessage && <Bot className="mr-2 shrink-0" />}
            <p className={cn("whitespace-pre-line rounded-md border px-3 py-2", isAIMessage ? "bg-gray-100 dark:bg-gray-700" : "bg-primary text-primary-foreground")}>{content}</p>
            {!isAIMessage && user?.imageUrl && (
                <Image
                    src={user.imageUrl}
                    alt="User Image"
                    width={100}
                    height={100}
                    className="rounded-full shadow-md ml-2 w-10 h-10 object-cover"
                />
            )}
        </div>
    );
}
