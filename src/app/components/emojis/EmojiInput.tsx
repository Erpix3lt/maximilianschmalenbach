"use client"

import React from 'react'

const emojis = ['😊', '😄', '😍', '🤩', '😎', '🥳', '😇', '😂', '🤣', '😇']

//@ts-ignore
const EmojiInput = ({handleClick}) => {
    return (
        <div>
            {emojis.map((emoji, index) => (
                <button key={index} onClick={handleClick}>{emoji}</button>
            ))}
        </div>
    )
}

export default EmojiInput