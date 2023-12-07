import { useEffect } from "react"
import axios from "axios"


// server: {
//   proxy: {
//     "/api": "http://localhost:8000",
//   },
// },

function App() {
  useEffect(() => {
    console.log("HEllo World");
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/contact")
        console.log(response.data);
      } catch (error) {
        console.log("OH NO ERROR");
        console.log(error);
      }
    }
    fetchData()
  })

  return <div>
    <h2>Adddddddress</h2>

  </div>
}

export default App
