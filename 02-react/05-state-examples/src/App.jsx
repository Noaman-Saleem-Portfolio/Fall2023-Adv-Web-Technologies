
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./components/Home/Home"
import { Counter } from "./components/Counter/Counter"
import Menubar from "./components/Menubar/Menubar"

import "./App.css"
import Room from "./components/Room/Room"

function App() {

  return (
    <BrowserRouter>
    <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
