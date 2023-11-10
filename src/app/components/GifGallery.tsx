'use client'

import React from 'react'
import Image from 'next/image'
import Draggable from 'react-draggable'

const GifGallery = () => {
  return (
    <div className='flex flex-row justify-evenly'>
        <Draggable>
            <div>
                <Image alt='clothing items' src="/clothes_1.gif" width={200} height={200}></Image>
            </div>
        </Draggable>
        <Draggable>
            <div>
                <Image alt='clothing items' src="/clothes_2.gif"  width={200} height={200}></Image> 
            </div>
        </Draggable>
    </div>
  )
}

export default GifGallery