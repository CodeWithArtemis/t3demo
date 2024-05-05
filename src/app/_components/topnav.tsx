"use client";
import { SignedOut, SignedIn, UserButton, SignUpButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";
export default function TopNav() {
 const router =useRouter()
    return(
    <nav className="flex  border-b items-center justify-between w-full ">
      <div className="p-4 text-2xl font-semibold " >
        Gallery
      </div>
      <div className="flex  flex-row mx-5">
        
        <SignedOut>
            <SignUpButton>Sign Up</SignUpButton>
        
        </SignedOut>
        <SignedIn >

        <UploadButton  className="flex h-20 w-60 px-4 py-4" endpoint="imageUploader" onClientUploadComplete={()=>{
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                router.refresh()
        }} />
            <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}
