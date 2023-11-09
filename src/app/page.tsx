import Heading from '@/components/Heading'
import LinkTree from '@/components/LinkTree'
import Sketch from '@/components/Sketch'
import SmileyService from '@/components/Smiley/SmileyService'

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <Heading />
      <LinkTree />
      <Sketch></Sketch>
      <SmileyService></SmileyService>
    </main>
  )
}
