// import { createNotesSchema } from "@/lib/validation/notes";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./dialog";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
// import { Input } from "./input";
// import { Textarea } from "./textarea";
// import LoadingButton from "./loading-button";
// import { useRouter } from "next/navigation";

// interface AddNoteDialogProps {
//     open: boolean;

//     setOpen(open: boolean): void;
// }
// export default function AddNoteDialog({open, setOpen}: AddNoteDialogProps){
//      const router = useRouter()
//     const form = useForm<createNotesSchema>({
//         resolver: zodResolver(createNotesSchema),
//         defaultValues: { title: "", content: "" },
//     })
//     async function onSubmit(input: createNotesSchema) {
//           try{
//               const response = await fetch("/api/notes", {
//                   method: "POST",
//                   headers: { "Content-Type": "application/json" },
//                   body: JSON.stringify(input),
//               })
//               if(!response.ok) throw Error("status code " + response.status)
//               form.reset()
//               router.refresh()
//               setOpen(false)
      
      
//           } catch(error){
//               console.error(error);
//             alert("Failed to create note. Please try again.");
//           }
//         }
//     return (
//         <Dialog open={open} onOpenChange={() => setOpen(false)}>
//             <DialogContent>
//                 <DialogHeader>
//                     <DialogTitle>Add Note</DialogTitle>
//                 </DialogHeader>
//                 <Form {...form} >
//                     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
//                         <FormField
//                            control={form.control}
//                            name="title"
//                            render={({field}) => (
//                             <FormItem>
//                                 <FormLabel>Note Title</FormLabel>
//                                 <FormControl>
//                                     <Input placeholder="Notes Title" {...field}/>
//                                 </FormControl>
//                                 <FormMessage/>
//                             </FormItem>
//                             )}
//                         />
//                         <FormField
//                            control={form.control}
//                            name="content"
//                            render={({field}) => (
//                             <FormItem>
//                                 <FormLabel>Note Content</FormLabel>
//                                 <FormControl>
//                                     <Textarea placeholder="Notes Content" {...field}/>
//                                 </FormControl>
//                                 <FormMessage/>
//                             </FormItem>
//                             )}
//                         />
//                         <DialogFooter>
//                             <LoadingButton loading={form.formState.isSubmitting} type="submit" className="bg-yellow-500 text-white">Submit</LoadingButton>
//                         </DialogFooter>

//                     </form>

//                 </Form>
//             </DialogContent>
//         </Dialog>
//     )


/// }

// import { createNotesSchema } from "@/lib/validation/notes";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./dialog";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
// import { Input } from "./input";
// import { Textarea } from "./textarea";
// import LoadingButton from "./loading-button";
// import { motion } from "framer-motion";

// interface AddNoteDialogProps {
//   open: boolean;
//   setOpen(open: boolean): void;
// }

// export default function AddNoteDialog({ open, setOpen }: AddNoteDialogProps) {
//   const form = useForm<createNotesSchema>({
//     resolver: zodResolver(createNotesSchema),
//   });

//   async function onSubmit(input: createNotesSchema) {
//     alert(JSON.stringify(input, null, 2));
//   }

//   return (
//     <Dialog open={open} onOpenChange={() => setOpen(false)}>
//       <DialogContent className="max-w-lg p-6 bg-white rounded-2xl shadow-xl">
//         <DialogHeader>
//           <DialogTitle className="text-2xl font-bold text-gray-800">📝 Add a New Note</DialogTitle>
//         </DialogHeader>

//         <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//               <FormField
//                 control={form.control}
//                 name="title"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-gray-700 font-medium">Title</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Enter note title..."
//                         {...field}
//                         className="border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 transition"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="content"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-gray-700 font-medium">Content</FormLabel>
//                     <FormControl>
//                       <Textarea
//                         placeholder="Write your note here..."
//                         {...field}
//                         className="border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 transition"
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <DialogFooter>
//                 <LoadingButton
//                   loading={form.formState.isSubmitting}
//                   type="submit"
//                   className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg shadow-md transition-all"
//                 >
//                   Save Note
//                 </LoadingButton>
//               </DialogFooter>
//             </form>
//           </Form>
//         </motion.div>
//       </DialogContent>
//     </Dialog>
//   );
// }


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import { Textarea } from "./textarea";
import LoadingButton from "./loading-button";
import { motion } from "framer-motion";
import { Pencil, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { createNoteSchema, CreateNoteSchema } from "@/lib/validation/notes";
import { Note } from "@prisma/client";
import { useState } from "react";

interface AddNoteDialogProps {
  open: boolean;
  setOpen(open: boolean): void;
  noteToEdit?: Note
}

export default function AddNoteDialog({ open, setOpen, noteToEdit }: AddNoteDialogProps) {
  const [deleteInProgress, setDeleteInProgress] = useState(false);
  const router = useRouter()
  const form = useForm<CreateNoteSchema>({
    resolver: zodResolver(createNoteSchema),
    defaultValues: { title: noteToEdit?.title ||  "", content: noteToEdit?.content || "" },
  });



async function onSubmit(input: CreateNoteSchema) {
  try {
     if (noteToEdit) {
      const response = await fetch("/api/notes", {
        method: "PUT",
        
        body: JSON.stringify({
           ...input, 
           id: noteToEdit.id }),
    })
    if (!response.ok) throw new Error ("Status code: " + response.status)

     } else {
      const response = await fetch("/api/notes", {
        method: "POST",
        
        body: JSON.stringify(input),
    })
    if (!response.ok) throw new Error ("Status code: " + response.status)
    form.reset();

     }
      router.refresh();
      setOpen(false);
  } catch (error) {
      console.error("Error creating note:", error);
      alert("Failed to create note. Please try again.");
  }
}

async function deleteNote() {
  if (!noteToEdit) return;
  setDeleteInProgress(true);
  try {
    const response = await fetch("/api/notes", {
      method: "DELETE",
      body: JSON.stringify({ id: noteToEdit?.id }),
    });
    if (!response.ok) throw new Error("Status code: " + response.status);
    router.refresh();
    setOpen(false);
  } catch (error) {
    console.error("Error deleting note:", error);
    alert("Failed to delete note. Please try again.");
  }finally{
    setDeleteInProgress(false);
  }
}


  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent className="max-w-lg p-8 bg-gradient-to-br from-blue-100 via-purple-200 to-yellow-100 rounded-3xl shadow-2xl border border-gray-200">
        <DialogHeader>
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <Sparkles className="text-yellow-500 animate-pulse" size={24} />
            <DialogTitle className="text-3xl font-extrabold text-gray-900">
              <span className="bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text text-transparent">
              {noteToEdit? "Edit Note" : "Create New Note"}
              </span>
            </DialogTitle>
          </motion.div>
        </DialogHeader>

        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-800 font-semibold">Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter an inspiring title..."
                        type="text"
                        {...field}
                        className="text-black border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition-all bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-800 font-semibold">Your Note</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write down your amazing thoughts..."
                        typeof=""
                        {...field}
                        className="border-gray-300 text-black rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition-all bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                {noteToEdit && (
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }} 
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-full"
                  >
                    <LoadingButton
                      loading={deleteInProgress}
                      onClick={deleteNote}
                      variant="destructive"
                      className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 rounded-lg shadow-lg transition-all"
                      type="button"
                      disabled={form.formState.isSubmitting}
                    >
                      
                      <span> Delete Note 🗑</span>
                    </LoadingButton>
                  </motion.div>
                )}
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }} 
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full"
                >
                  <LoadingButton
                    loading={form.formState.isSubmitting}
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-yellow-500 hover:from-purple-700 hover:to-yellow-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2"
                    disabled={deleteInProgress}
                  >
                    <Pencil className="text-white" size={18} />
                    <span> Save Note ✨</span>
                  </LoadingButton>
                </motion.div>
              </DialogFooter>
            </form>
          </Form>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
