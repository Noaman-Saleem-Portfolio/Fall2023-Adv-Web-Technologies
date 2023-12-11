import { useEffect } from "react"
import axios from "axios"
function App() {
  useEffect(() => {
    const fetchData =async () => {
      try {
        const data = await axios.get("http://localhost:8000/api/v1/contact")
        console.log(data);
      } catch (error) {
        console.log("OH NO ERROR");
        console.log(err);
      }
    }

    fetchData()
  })

  return (
    <h1>Hello World!!!</h1>
  )
}

export default App
