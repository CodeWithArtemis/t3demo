import Modal from "./modal"
export default function photoModal({params:{id:photoId},}:{params:{id:string}}){
console.log(photoId)
    return(
    <Modal isOpen={true} onClose={()=>{}}>
{photoId}
    </Modal>
)
}