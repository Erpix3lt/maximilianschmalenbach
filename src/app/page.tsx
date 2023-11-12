import About from "./components/About";
import NavBar from "./components/NavBar";
import Posts from "./components/blog/Posts";
import Led from './components/three/led';

export default function Home() {
  return (
    <main className="flex flex-row ">
      <div className="w-96 m-4">
        <NavBar></NavBar>
        <div className="mt-4">
          <About></About>
        </div>
        <div className="mt-4">
          <Posts></Posts>
        </div>
      </div>
      <Led></Led>
´    </main>
  )
}
