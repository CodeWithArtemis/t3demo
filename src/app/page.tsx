import { db } from "~/server/db";
export const dynamic = "force-dynamic";
import Image from "next/image";
import {  SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Link from "next/link";


async function images(){
   const posts=await getMyImages();
 return (
<div
    className="flex flex-wrap gap-4 justify-center w-[80vw] mx-auto">
    {posts.map((post,index)=>(
      <div key={post.id+"-"+index} className="flex  flex-col items-center w-48 justify-center ">
        <Link href={`/photos/${post.id}`}>
        <Image src={post.url} alt={post.name} width={192} height={192} loading="lazy" style={{objectFit:"cover"}} />
        </Link>
        <div className="text-center ">
          {post.name}
        </div>
        </div>
    ))}

</div>
  )
}

export default function HomePage() {

  return (
<>
<SignedOut>
    <div >
      Please Sign In 
    </div>
  </SignedOut>
 
 <SignedIn>
  
  {images()}
 </SignedIn>
 
 </> 
)
}