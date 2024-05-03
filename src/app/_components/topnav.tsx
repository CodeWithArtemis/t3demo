"use client";
import { SignedOut, SignedIn, UserButton, SignUpButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";
export default function TopNav() {
 const router =useRouter
    return(
    <nav className="flex  p-4 text-2xl font-semibold border-b items-center justify-between w-full ">
      <div >
        Gallery
      </div>
      <div className="flex  flex-row ">
        
        <SignedOut>
            <SignUpButton>Sign Up</SignUpButton>
        
        </SignedOut>
        <SignedIn>

        <UploadButton endpoint="imageUploader" onClientUploadComplete={()=>{
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                router.refresh()
        }} />
            <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}
