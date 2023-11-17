
import {useState} from "react"

import GrandParent from "./components/GrandParent"
import {CounterContextProvider} from "./context/counterContext"

function App() {
  // const [value,setValue] = useState(2)

  return (
    <CounterContextProvider>
      {/* <GrandParent value={value} setValue={setValue} /> */}
      <GrandParent />
    </CounterContextProvider>
  )
}

export default App
