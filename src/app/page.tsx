import { db } from "~/server/db";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const mockUrls= [
    "https://utfs.io/f/ecc469a3-c974-4c96-8558-9ff1e6d98787-ev05yj.png"
    ,"https://utfs.io/f/b36e403b-9eb4-45de-897c-31cd196c4548-vs12so.png",
"https://utfs.io/f/9fbd2099-bc21-4a1d-95a8-b6f8f3b797ab-ls485e.png",
"https://utfs.io/f/b73f661a-5d59-4513-9ccd-fb821fb57b91-tgzqft.png",
"https://utfs.io/f/42e8a30e-9b5e-4638-bcb8-4b230b7d5f21-cjo4om.png"
  ];
  const mockImages=mockUrls.map((url,index)=>(
    {
      id:index+1,
      url:url
    }
  ))
  const posts =await db.query.posts.findMany()
  console.log(posts)
  
  return (
<div>
  
<div className="flex flex-wrap gap-4 justify-center">
   {posts.map((post)=>(
    <div key={post.id}>
      <div>{post.name}</div>
      </div>
  ))}
    {[...mockImages,...mockImages,...mockImages].map((images,index)=>(
      <div key={images.id+"-"+index} className="w-1/5 h-1/5 ">
        <img src={images.url} alt="images"/> 
        </div>
    ))}

</div>
</div>
  );
}
