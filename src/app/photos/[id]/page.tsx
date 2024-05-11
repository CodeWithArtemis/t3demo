import { getImages } from '~/server/queries';
import  Modal from '~/components/modal';
import Home from '~/components/modal';
import Image from 'next/image';
import { db } from '~/server/db';
export default async function PhotoModal({ 
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const post= await getImages(Number(photoId));
  console.log({post})
  return <Home id={Number(photoId)}></Home>
}