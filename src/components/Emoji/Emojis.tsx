import supabase from "@/utils/supabase"
import EmojisRealtime from "./EmojisRealtime"


export default async function Emojis(){
  const { data } = await supabase.from('emojis').select();
  console.log(data)
  return <EmojisRealtime emojis={data ?? []}/>
}