"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import {AiOutlineRocket} from "react-icons/ai"

export default function Room() {
  const [id, setID] = useState<string|null>(null);
  const router = useRouter()
  const sendToRoom = (e: any) => {
    e.preventDefault()
    if (id == null)return;
    router.push(`/room/${id}`)
  }

  const wakeServer = async () => {
    if(!process.env.NEXT_PUBLIC_API_URL)return;
    await fetch(process.env.NEXT_PUBLIC_API_URL);
  }

  useEffect(()=>{
    wakeServer()
  },[])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-white gap-10">
      <h1 className='text-[50px] font-black'>Enter a Room</h1>
      <form onSubmit={(e)=>sendToRoom(e)} className='flex items-center gap-10 p-5 border-white border-solid border-2 rounded-xl'>
        <input className="text-black p-3 rounded" id="roomId" onChange={(e)=>{setID(e.target.value)}} type='text' placeholder='Enter Room ID'/>
        <button type='submit'> <AiOutlineRocket className="text-white text-[50px]" /> </button>
      </form>
    </main>
  )
}
