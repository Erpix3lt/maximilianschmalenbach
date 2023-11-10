import supabase from "@/utils/supabase"
import EmojisRealtime from "./EmojisRealtime"
import EmojiInput from "./EmojiInput"

export const revalidate = 0;

const insertEmoji = async (emoji: string) => {
  'use server'
  const { data, error } = await supabase.from('emojis').insert({ emoji })
  if (error) console.log(error)
  return data
}

export default async function Emojis(){
  const { data } = await supabase.from('emojis').select();
  return <div>
    <EmojiInput handleClick={insertEmoji}/>
    <EmojisRealtime serverEmojis={data ?? []}/>
  </div>
}