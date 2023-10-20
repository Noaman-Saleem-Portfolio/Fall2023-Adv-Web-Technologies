import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact"
import Menubar from "./components/Menubar.jsx/Menubar"
import Books from "./pages/Books/Books"

function App() {

  return (
    <BrowserRouter>
    <Menubar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
