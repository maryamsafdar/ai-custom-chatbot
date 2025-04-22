import { Bot } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import AIChatbot from "./AIChatbotBox";
export default function AIChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setChatBoxOpen(true)} className=" bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded-lg shadow-md">
        <Bot size={20} className="mr-2 " />
        AI Chat
      </Button>
      <AIChatbot open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
