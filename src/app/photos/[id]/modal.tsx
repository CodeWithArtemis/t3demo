
import { getImages } from "~/server/queries";
import ClientPortal from "~/components/ClientPortal";
import Image from "next/image";
export default async  function Home({id}:{id:number}) {

  
const images=await getImages(id);
console.log({images})
return (
    <>
    
      <ClientPortal
        selector="modal-root"
      >
<div className="flex flex-col items-center justify-center z-10  mx-auto">
    <Image src={images.url} className='rounded-lg ' alt="photo"  width={400} height={300} />
</div>        
      </ClientPortal>
    </>
  );
}