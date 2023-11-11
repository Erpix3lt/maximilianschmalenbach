import About from "./components/About";
import NavBar from "./components/NavBar";
import Posts from "./components/blog/posts";

export default function Home() {
  return (
    <main className="flex flex-row">
      <div className="w-96 bg-slate-100 m-4">
        <NavBar></NavBar>
        <About></About>
        <Posts></Posts>
      </div>
    </main>
  )
}
