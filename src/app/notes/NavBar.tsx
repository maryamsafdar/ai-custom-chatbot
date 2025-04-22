"use client";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import logo from "@/assests/logo.png";
import { useState } from "react";
import AddNoteDialog from "@/components/ui/AddNoteDialogBox";
import ThemeToggleButton from "@/components/ui/ThemeToggleButton";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import AIChatButton from "@/components/ui/AIChatButton";

export default function NavBar() {
  const { theme } = useTheme();
  const [showAddNoteDialog, setShowAddNoteDialog] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 p-4 text-white shadow-lg bg-transparent">
        <div className="m-auto flex max-w-7xl items-center justify-between gap-4">
          {/* Logo and App Name */}
          <Link href="/notes" className="flex items-center gap-2 hover:opacity-90">
            <Image src={logo} alt="BrainSphere Logo" width={45} height={45} className="rounded-full" />
            <span className="font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500 font-sans">
              BrainSphere
            </span>
          </Link>

          {/* Navigation and Actions */}
          <div className="flex items-center gap-4">
            {/* User Avatar */}
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: { avatarBox: { width: "3rem", height: "3rem", border: "2px solid #fbbf24" } },
              }}
            />

            {/* Theme Toggle */}
            <ThemeToggleButton />

            {/* Add Note Button */}
            <Button
              onClick={() => setShowAddNoteDialog(true)}
              className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded-lg shadow-md"
            >
              <Plus size={20} className="mr-2" />
              Add Note
            </Button>

            <AIChatButton />
          </div>
        </div>
      </div>

      {/* Add Note Dialog */}
      <AddNoteDialog open={showAddNoteDialog} setOpen={setShowAddNoteDialog} />

      {/* Add padding so content does not hide under navbar */}
      <div className="pt-20"></div>
    </>
  );
}
