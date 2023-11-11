import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className='flex flex-row gap-10'>
        <Link href="/"><Image alt="home" src="/images/navbar/home.png" width={40} height={40}></Image></Link>
        <Link href="/"><Image alt="home" src="/images/navbar/thesis.png" width={40} height={40}></Image></Link>
        <Link href="/"><Image alt="home" src="/images/navbar/gallery.png" width={40} height={40}></Image></Link>
    </div>
  )
}

export default NavBar