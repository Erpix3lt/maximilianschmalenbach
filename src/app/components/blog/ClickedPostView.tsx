import React from 'react'
import LargeWrapper from '../wrapper/LargeWrapper'
import Image from 'next/image'

const ClickedPostView = () => {
    return (
        <div className='max-w-5xl pl-5 pr-5'>
            <LargeWrapper>
                <h1 className='text-10xl font-serif break-all'>Garments.Digital</h1>
            </LargeWrapper>
            <div className='text-xm font-serif mt-10'>
                Garments.digital, a TH Köln start-up, offers a user-friendly platform for digital fashion design, simplifying the process for independent designers.  Founded by Maximilian Schmalenbach and Felix Willen, the platform allows users to easily create and customize digital T-shirt designs, animate them in 3D, and integrate them into social media or online marketplaces.  Overcoming initial challenges, the founders are expanding the platform to include various clothing items.  The project highlights successful collaboration between computer science and design in TH Kölns Code & Context program, emphasizing technical proficiency and user-friendly functionality in the digital fashion realm.  The team aims to build a community through Discord, facilitating interactions between designers and customers.
            </div>
            <div className='mt-10'>
                <Image src='/Shirt1.png' width={500} height={500} alt='Garments.Digital' />
                <Image src='/Shirt2.png' width={500} height={500} alt='Garments.Digital' />
                <Image src='/logo-animated.gif' width={500} height={500} alt='Garments.Digital' />

            </div>
        </div>
    )
}

export default ClickedPostView