import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import SmallWrapper from './wrapper/SmallWrapper';

const NavBar = () => {
  return (
    <div className='flex flex-row gap-4'>
        <SmallWrapper><Link href="/">Home</Link></SmallWrapper>
        <SmallWrapper><Link href="/gallery">Gallery</Link></SmallWrapper>
        <SmallWrapper><Link href="https://git.coco.study/mschmal2/thesis">Thesis</Link></SmallWrapper>
    </div>
  )
}

export default NavBar