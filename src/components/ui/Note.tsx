"use client";
import { Note as NoteModel } from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { useState } from "react";
import AddNoteDialogBox from "./AddNoteDialogBox";

interface NoteProps {
  note: NoteModel;
}

export default function Note({ note }: NoteProps) {
  const [showEditDialog, setShowEditDialog] = useState(false);

  const wasUpdated = note.updatedAt > note.createdAt;
  const formattedDate = (wasUpdated ? note.updatedAt : note.createdAt).toDateString();

  return (
    <>
      <Card
        className="relative overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl rounded-3xl border border-gray-200 bg-white/70 dark:bg-gray-900/80 dark:border-gray-700 backdrop-blur-lg shadow-lg dark:shadow-gray-800 p-6"
        onClick={() => setShowEditDialog(true)}
      >
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-500 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-80"></div>

        <CardHeader>
          <CardTitle className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-500 to-yellow-500 bg-clip-text text-transparent tracking-wide">
            {note.title}
          </CardTitle>
          <CardDescription className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
            {formattedDate}
            {wasUpdated && (
              <span className="px-3 py-1 text-xs font-semibold bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded-full shadow-sm">
                Updated
              </span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-line text-gray-900 dark:text-gray-300 leading-relaxed text-sm">
            {note.content}
          </p>
        </CardContent>
      </Card>

      <AddNoteDialogBox open={showEditDialog} setOpen={setShowEditDialog} noteToEdit={note} />
    </>
  );
}
