import Navbar from "./components/Navbar"
import About from "./pages/About"
import ContactsPage from "./pages/ContactsPage"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import GetInvolved from "./pages/GetInvolved"

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Projects />
      <GetInvolved />
      <ContactsPage/>
      {/* Add more sections as needed */}
       
    </div>
  )
}

export default App
