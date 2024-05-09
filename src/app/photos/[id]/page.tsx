import { getImages } from '~/server/queries';
import { Modal } from './modal';
import Image from 'next/image';
import { db } from '~/server/db';
export default async function PhotoModal({ 
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const post= await getImages(Number(photoId));
  console.log({post})
  return <Modal>
    <Image src={post.url} className='rounded-lg' alt="photo"  width={400} height={300} />
  </Modal>;
}