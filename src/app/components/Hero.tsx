"use client";
import { Play } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from 'react'

export default function Hero() {
    const [showLine, setShowLine] = useState(false);
    
    useEffect(()=>{
     
setShowLine(true)
    },[])

  return (
    <section className="text-center mt-24">
    <h1 className="text-5xl font-bold mb-6 leading-tight">Scheduling{' '}
         <span className={"text-blue-600 cool-underline"+(showLine?"show-underline":"")}>made simple</span> 
         <br />for people like you</h1>
    <p className="text-gray-600">
      Most scheduling are simple but ours is more simple. <br />
      On tope of this , it's open source and you can see the code.
      </p>
      <div className="mt-4 flex gap-4 justify-center">
      <Link href={'/'} className="bg-black text-white px-4 py-2 rounded-full">Get Startted for Free</Link>
      <Link href={'/'} className="border border-gray-300 px-4 py-2 rounded-full inline-flex gap-1 items-center text-gray-800"><Play size={16}/>Watch the video</Link>
      </div>
      

  </section>
  )
}
