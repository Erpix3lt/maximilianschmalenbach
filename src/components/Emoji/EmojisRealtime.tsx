'use client'

//no cookie auth !! add this https://www.youtube.com/watch?v=w3LD0Z73vgU&list=PL5S4mPUpp4OtMhpnp93EFSo42iQ40XjbF&index=1&t=173s

import supabase from "@/utils/supabase";
import { useEffect } from "react";

type Emoji = {
    created_at: string;
    id: number;
    emoji: string;
}

export default function EmojisRealtime({emojis} : {emojis: Emoji[]}) {
    useEffect(() => {
        const channel = supabase.channel('realtime emojis').on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'emojis'
        }, (payload) => {
            console.log('Change received!', payload)
        }).subscribe()

        return () => {
            supabase.removeChannel(channel)
        }
    }, [supabase])

    return <div>{JSON.stringify(emojis, null, 2)}</div>
}