import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home/Home"
import Crypto from "./pages/Crypto/Crypto"
import Menubar from "./components/Menubar/Menubar"

const App = () => {
  return (
    <BrowserRouter>
    <Menubar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App