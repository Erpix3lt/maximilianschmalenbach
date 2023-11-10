'use client'

import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";

type serverEmojis = {
    id: number;
    created_at: string;
    emoji: string;
}

export default function EmojisRealtime({serverEmojis}: {serverEmojis: serverEmojis[]}){
    const [emojis, setEmojis] = useState(serverEmojis)
    useEffect(() => {

        //listener
        const channel = supabase.channel('realtime emojis').on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'emojis'
        }, (payload) => {

            //assign new data on event
            setEmojis([...emojis, payload.new as serverEmojis])
        }).subscribe()

        return () => {
            supabase.removeChannel(channel)
        }
    }, [supabase, emojis, setEmojis])

    //return live data -> emojis, serverEmojis would be the static data
    return <pre>{JSON.stringify(emojis, null, 2)}</pre>
}