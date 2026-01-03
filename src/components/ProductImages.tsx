"use client"

import Image from "next/image"
import { useState } from "react";
import React from "react";


//const images = [
//{ id: 1, url: "https://images.pexels.com/photos/25682730/pexels-photo-25682730/free-photo-of-elephant-on-lakeshore.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" 
//},
//{ id: 2, url: "https://images.pexels.com/photos/30675194/pexels-photo-30675194/free-photo-of-creative-watercolor-art-workspace-with-supplies.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" 
//},
//{ id: 3, url: "https://images.pexels.com/photos/25682730/pexels-photo-25682730/free-photo-of-elephant-on-lakeshore.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" 
//},
//{ id: 4, url: "https://images.pexels.com/photos/30675194/pexels-photo-30675194/free-photo-of-creative-watercolor-art-workspace-with-supplies.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" 
//},
//]

const ProductImages = ({items}: {items:any}) => {

    const [index,setIndex] = useState(0);
    return (

        <div className=''>
            <div className="h-[500px] relative">
                <Image src={items[index].image?.url} alt="" fill sizes="30vw" className="object-cover rounded-md" />
                </div>
                <div className="flex justify-between gap-4 mt-8">
                {items.map((item:any,i:number)=>(
                    <div className="w-2/4 h-32 relative gap-4 mt-8 cursor-pointer" key={item._id} onClick={()=>setIndex(i)}>
                <Image src={item.image?.url} alt="" fill sizes="30vw" className="object-cover rounded-md" />
                </div>
                ))}
            </div> 
        </div>
    )
}

export default ProductImages