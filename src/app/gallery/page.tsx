import supabase from '../../utils/supabase'

export default async function Posts() {
    const { data: emojis } = await supabase.from('emoji_gallery').select('id, emoji')

    if (!emojis) {
        return <p>No posts found.</p>
    }

    return emojis.map((emoji) => (
        <div key={emoji.id}>
            <p>Emoji: {emoji.emoji}</p>
        </div>
    ))
}
