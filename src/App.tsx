import Navbar from "./components/Navbar"
import About from "./pages/About"
import BlogPage from "./pages/BlogPage"
import Home from "./pages/Home"
import Projects from "./pages/Projects"


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Projects />
      < BlogPage />
      {/* Add more sections as needed */}
       
    </div>
  )
}

export default App
