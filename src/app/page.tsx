import About from "./components/About";
import ClickedPostView from "./components/blog/ClickedPostView";
import Posts from "./components/blog/Posts";
import Led from './components/three/led';

export default function Home() {
  return (
    <main className="flex flex-row ">
      <div className="w-110 max-h-screen overflow-y-scroll scrollbar-hidden p-4">
        <div>
          <About></About>
        </div>
        <div className="mt-4">
          <Posts></Posts>
        </div>
      </div>
      <ClickedPostView></ClickedPostView>
    </main>
  )
}
