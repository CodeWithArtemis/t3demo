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
  
<div className="flex flex-wrap gap-4 justify-center w-full">
   {/* {posts.map((post)=>(
    <div key={post.id}>
      <div>{post.name}</div>
      </div> */}
  {/* ))} */}


    {[...posts,...posts,,...posts].map((post,index)=>(
      <div key={post.id+"-"+index} className="w-1/5 h-1/5 ">
        <img src={post.url} alt={post.name} />

        <div className="text-center ">
          {post.name}
        </div>
        </div>
    ))}

</div>
</div>
  );
}
