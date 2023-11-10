import Heading from '@/app/components/Heading'
import LinkTree from '@/app/components/LinkTree'
import ProjectsOverview from './components/projects/ProjectsOverview'
import Navigation from './components/Navigation'
import GifGallery from './components/GifGallery'

// TODO: Grid System of many artifacts -> Topics, or digital fashion images ..

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className='mb-4'>
        <Heading />
        <LinkTree />
      </div>
      <div className='mb-10'>
        <Navigation />
      </div>
      <div>
        <GifGallery />
      </div>
      <div>
        <ProjectsOverview />
      </div>
    </main>
  )
}
