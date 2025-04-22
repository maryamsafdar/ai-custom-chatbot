import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FlowBrain - Sign Up", 
}

export default function SignUpPage(){
    return(
    <div className="flex justify-center items-center h-screen">
      <SignUp appearance={{variables:{colorPrimary:"#0F172A"}}}/>
    </div>
    )
}

