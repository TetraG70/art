import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import HowItWorks from "./pages/HowitWorks"
import GetInvolved from "./pages/GetInvolved"
import { Route, Routes } from "react-router-dom"
const App = () => {
  return (
    <div>
      {/* <Navbar /> */}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
