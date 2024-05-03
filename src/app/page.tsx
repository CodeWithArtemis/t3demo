import { db } from "~/server/db";
export const dynamic = "force-dynamic";
import Image from "next/image";
import {  SignedIn, SignedOut } from "@clerk/nextjs";


async function images(){
    const posts =await db.query.image.findMany(
    {
      orderBy:(model,{desc})=>desc(model.id),
    }
  ) 
  console.log(posts)


 return (
<div
    className="flex flex-wrap gap-4 justify-center w-[80vw] mx-auto">
    {posts.map((post,index)=>(
      <div key={post.id+"-"+index} className="flex  flex-col items-center justify-center ">
        <Image src={post.url} alt={post.name} width={200} height={200} loading="lazy" />
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