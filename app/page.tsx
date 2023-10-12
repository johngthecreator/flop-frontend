import Image from 'next/image'
import RandomCircle from './RandomCircle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
      <div className='text-center z-10'>
        <h1 className='text-[75px] font-bold'>Say hello to <span className='font-black underline'>flop.</span></h1>
        <p className='text-2xl'>The open-source file sharing platform you didn't needed</p>
      </div>
      <RandomCircle top="150" left="400"/>
      <RandomCircle top="600" left="400"/>
      <RandomCircle top="400" left="900"/>
      <RandomCircle top="600" left="1300"/>
      <RandomCircle top="200" left="1500"/>
      <RandomCircle top="300" left="100"/>
    </main>
  )
}
