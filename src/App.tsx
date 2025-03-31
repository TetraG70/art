import Navbar from "./components/Navbar"
import About from "./pages/About"
import BlogPage from "./pages/BlogPage"
import ContactsPage from "./pages/ContactsPage"
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
      <ContactsPage/>
      {/* Add more sections as needed */}
       
    </div>
  )
}

export default App
