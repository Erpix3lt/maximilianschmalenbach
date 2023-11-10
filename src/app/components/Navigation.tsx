import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <div>
            <hr></hr>
            <div className='flex flex-row justify-evenly'>
                <Link className="font-serif" href="">Projects</Link>
                <Link className="font-serif" href="">Gallery</Link>
                <Link className="font-serif" href="">Links</Link>
                <Link className="font-serif" href="">Thesis</Link>
            </div>
            <hr></hr>
        </div>
    )
}

export default Navigation