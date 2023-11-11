import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className='flex flex-row justify-evenly items-center'>
        <Link href="/"><Image alt="home" src="/images/home.png" width={40} height={40}></Image></Link>
        <Link href="/"><Image alt="home" src="/images/thesis.png" width={40} height={40}></Image></Link>
        <Link href="/"><Image alt="home" src="/images/gallery.png" width={40} height={40}></Image></Link>
    </div>
  )
}

export default NavBar