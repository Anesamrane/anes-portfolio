import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Mypic from '../../public/Mypic.jpg'

export function NavBar() {
  return (
    <div className = 'flex justify-center items-center p-4'>
      <Link href="/" className='px-6 py-2 bg-primary text-stone-400 hover:text-stone-100 transition'> 
      <Image src={Mypic} alt="Logo" width={100} height={100} className='rounded-full' />
       </Link>
        <Link href="/" className='px-6 py-2 bg-primary text-stone-400 hover:text-stone-100 transition'> Overview </Link>
        <Link href="projects" className='px-6 py-2 bg-primary text-stone-400 hover:text-stone-100 transition'> Projects </Link>
        <Link href="articles" className='px-6 py-2 bg-primary text-stone-400 hover:text-stone-100 transition'> Articles </Link>
    </div>
  )
}
