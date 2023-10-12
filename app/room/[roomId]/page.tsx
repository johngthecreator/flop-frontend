"use client";
import { io } from "socket.io-client";
import { useEffect } from "react";
export default function RoomId({ params }: { params: { roomId: string } }){
    const socket = io(process.env.PROD_URL || "http://localhost:8080")

    useEffect(()=>{
        socket.emit("joinRoom", params.roomId)
    },[])

    socket.on('connect',()=>{console.log("user connected")})
    socket.on('disconnect',()=>{console.log("user disconnected")})
    socket.on('broadcastMessage', msg => {console.log(msg)})

    const sendMessage = () => {
        socket.emit("sendMessage", "Booooooo", params.roomId)
    }

    return(
        <div>
            <h1>{params.roomId}</h1>
            <button onClick={sendMessage}> Send Message </button>
        </div>
    )

}