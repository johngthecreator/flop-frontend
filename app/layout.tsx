import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-black text-white'>
      <body className={inter.className}>
        <header className='flex justify-between items-center p-10 z-10'>
          <h1 className='text-[60px] font-black'>flop.</h1>
          <div className='flex gap-10 font-semibold text-xl'>
            <Link href="/">Home</Link>
            <Link href="/room">Join Room</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
