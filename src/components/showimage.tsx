import { getImages } from "~/server/queries";
import Image from "next/image";
export default async function ShowImage(props:{id:number}) {
const image=await getImages(props.id)
return (
    <Image src={image.url} className='rounded-lg' alt="photo"  width={400} height={300} />

)
}
