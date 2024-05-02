import { db } from "~/server/db";
export const dynamic = "force-dynamic";
import Image from "next/image";
export default async function HomePage() {
   const posts =await db.query.image.findMany(
    {
      orderBy:(model,{desc})=>desc(model.id),
    }
  ) 
  console.log(posts)

  interface iPost {
    id: number;
  name: string;
  url: string;
  createdAt: Date;
  updatedAt: Date | null;
  } 
  
  return (
<div>
  
<div className="flex flex-wrap gap-4 justify-center w-[80vw] mx-auto">
   {/* {posts.map((post)=>(
    <div key={post.id}>
      <div>{post.name}</div>
      </div> */}
  {/* ))} */}


    {[...posts,...posts,,...posts].map((post,index)=>(
      <div key={post.id+"-"+index} className="flex  flex-col items-center justify-center ">
        <Image src={post.url} alt={post.name} width={200} height={200} loading="lazy" />
        <div className="text-center ">
          {post.name}
        </div>
        </div>
    ))}

</div>
</div>
  );
}
