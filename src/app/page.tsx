import Image from "next/image";
import logo from "@/assests/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Use Next.js Link instead of lucide-react Link
import {redirect} from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { useAuth } from "@clerk/nextjs";


export default function Home() {
  const {userId}:any = auth()
  
  if (userId) redirect("/notes");

  // const { userId } = useAuth();
  // const router = useRouter();

  // if (userId) {
  //   router.push("/notes"); // Redirect to '/notes'
  // }
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-8 bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="flex flex-col items-center gap-6">
        <Image
          src={logo}
          alt="BrainSphere Logo"
          width={180}
          height={180}
          className="animate-bounce rounded-full shadow-xl"
        />
        <h1 className="text-center text-3xl font-extrabold tracking-tight lg:text-4xl">
          <span className="bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text font-sans font-extrabold text-transparent">
            BrainSphere
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-center text-sm font-light leading-relaxed tracking-wide text-gray-800 lg:text-sm">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-purple-600 to-yellow-500 bg-clip-text font-bold text-transparent">
            BrainSphere
          </span>
          , your{" "}
          <span className="font-semibold">
            intelligent note-taking assistant
          </span>{" "}
          powered by cutting-edge
          <span className="font-extrabold text-purple-700">
            {" "}
            AI technology{" "}
          </span>
          . Crafted with modern tools like
          <span className="font-mono font-bold text-gray-900">
            {" "}
            OpenAI
          </span>,{" "}
          <span className="font-mono font-bold text-gray-900">
            {" "}
            Pinecone
          </span>,{" "}
          <span className="font-mono font-bold text-gray-900"> Next.js</span>,
          <span className="font-mono font-bold text-gray-900"> Shadcn UI</span>,{" "}
          <span className="font-mono font-bold text-gray-900"> Clerk</span>, and
          more, BrainSphere empowers you to seamlessly capture, organize, and
          optimize your ideas!
        </p>
      </div>
      <Button size="lg" className="bg-gradient-to-r from-purple-600 to-yellow-500 text-white">
        <Link href="/notes" className="text-xl font-bold">
        Get Started →
        </Link>
      </Button>
    </main>
  );
}
