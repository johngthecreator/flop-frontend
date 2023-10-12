"use client";
import { io } from "socket.io-client";
import { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineCloudDownload, AiOutlineSend } from "react-icons/ai";


export default function RoomId({ params }: { params: { roomId: string } }){
    const id = params.roomId
    const [selectedFile, setSelectedFile] = useState<File|null>(null);
    // const [b64, setb64] = useState<ArrayBuffer | string | null>(null);
    const [b64, setb64] = useState<any>(null);
  
    useEffect(()=>{
      getBase64();
    },[selectedFile])
    if (!process.env.NEXT_PUBLIC_API_URL)return;
    const socket = io(process.env.NEXT_PUBLIC_API_URL)


    socket.emit("joinRoom", params.roomId)
    socket.on('connect',()=>{console.log("user connected")})
    socket.on('disconnect',()=>{console.log("user disconnected")})
    socket.on('broadcastMessage', msg => {console.log(msg)})

    // const sendMessage = () => {
    //     socket.emit("sendMessage", "Booooooo", params.roomId)
    // }

  
    const handleFile = (e:ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if(e.target.files){
        setSelectedFile(e.target.files[0]);
      }
    }
  
    const getBase64 = () => {
      const reader = new FileReader();
      if (selectedFile != null){
        reader.readAsDataURL(selectedFile);
        reader.onload = () => {
          setb64(reader.result);
          console.log(typeof reader.result);
        };
        reader.onerror = (error) => {
          console.log('Error: ', error);
        };
      }
    }
  
    socket.on("broadcastFile", fileData => {
      console.log("new file received!");
      setb64(fileData);
    })
  
    const shareFile = () => {
      if(b64 != null){
        console.log("file sent");
        socket.emit("sendFile", b64, selectedFile?.name, id);
      }else{
        alert("add a file!");
      }
    }

    return(
        <main className="flex w-screen h-full flex-col items-center justify-between p-24">
            <h1 className="text-[50px] font-black">Welcome to {params.roomId}&apos;s Room</h1>
            <div className="flex flex-col justify-center text-center m-5">
                <h2>Select a file to get started... or just wait...</h2>
                <div className="flex justify-between border-solid border-white border-2 rounded-lg p-4 m-2 ">
                    <input type="file" onChange={handleFile} />
                    <button onClick={shareFile}><AiOutlineSend className="text-2xl"/></button>
                </div>
            </div>
            { b64?.fileName ? 
                (
                    <a className="bg-black p-4 m-2 flex rounded-xl gap-5 border-solid border-white border-2" 
                    href={(typeof b64?.fileData == "string") ? b64?.fileData : "#"} 
                    download={`${b64?.fileName}.${b64?.fileExtension}`}>{b64?.fileName}.{b64?.fileExtension} <AiOutlineCloudDownload className="text-2xl"/></a>
                ) : (
                    <h2>new files will show up here...</h2>
                )
            }
        </main>
    )

}