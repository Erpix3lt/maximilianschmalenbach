"use client"

import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"


const ClientComponentExample = () => {
  const supabase = createClientComponentClient()

  const [data, setData] = useState()

  const handleClick = async () => {
    const { data } = await supabase.storage
    .from('blog-images').getPublicUrl('00002-17165681.png')
    //@ts-ignore
    setData(JSON.stringify(data))
  }

  return (
    <button onClick={handleClick}>{data ? data : "Client Component"}</button>
  )
}

export default ClientComponentExample