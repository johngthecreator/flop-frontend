"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Room() {
  const [id, setID] = useState<string|null>(null);
  const router = useRouter()
  const sendToRoom = (e: any) => {
    e.preventDefault()
    if (id == null)return;
    router.push(`/room/${id}`)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Room</p>
      <form onSubmit={(e)=>sendToRoom(e)}>
        <input id="roomId" onChange={(e)=>{setID(e.target.value)}} type='text' placeholder='Enter Room ID'/>
        <input type='submit' />
      </form>
    </main>
  )
}
