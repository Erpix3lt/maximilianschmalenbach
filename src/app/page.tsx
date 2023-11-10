import Heading from '@/app/components/Heading'
import LinkTree from '@/app/components/LinkTree'
import Sketch from '@/app/components/Sketch'
import EmojiService from '@/app/components/emojis/EmojiService';

// TODO: Grid System of many artifacts -> Topics, or digital fashion images ..



export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <Heading />
      <LinkTree />
      <Sketch></Sketch>      
      <EmojiService></EmojiService>
    </main>
  )
}
