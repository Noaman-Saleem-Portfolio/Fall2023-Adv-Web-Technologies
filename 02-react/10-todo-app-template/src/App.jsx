import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Todos from "./pages/Todos/Todos"
import Menubar from "./components/Menubar/Menubar"
import CreateTodo from "./pages/CreateTodo/CreateTodo"

function App() {

  return (
    <BrowserRouter>
    <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/create-todo" element={<CreateTodo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
