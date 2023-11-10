"use client"

import Link from 'next/link'
import React from 'react'
import Draggable from 'react-draggable'

const LinkTree = () => {
    return (
        <Draggable>
            <ul className='text-xs text-red-500 font-serif'>
                <li><Link href="https://github.com/Erpix3lt">https://github.com/Erpix3lt</Link></li>
                <li><Link href="https://git.coco.study/mschmal2/thesis">https://git.coco.study/mschmal2/thesis</Link></li>
                <li><Link href="https://garments.digital/">https://garments.digital/</Link></li>
            </ul>
        </Draggable>
    )
}

export default LinkTree