import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FlowBrain - Sign In",
};
export default function SignInPage(){
    return(
    <div className="flex justify-center items-center h-screen">
      <SignIn appearance={{variables:{colorPrimary:"#0F172A"}}}/>
    </div>
    )
}

