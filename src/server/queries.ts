import "server-only"; 
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
 
export async function getMyImages(){
    const user=auth();
if(!user.userId) throw new Error("Not signed in");

    const images=await db.query.image.findMany(
        {
            where:(model,{eq})=>eq(model.userId,user.userId),  
            orderBy:(model,{desc})=>desc(model.id)
        }
    );
    return images;
}
export async function getImages(id:number){
    const images=await db.query.image.findFirst(
        {
            where:(model,{eq})=>eq(model.id,id),    
        }

    )
    if (!images) throw new Error("Not found");
    return images;  
}