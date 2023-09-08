import { useState } from "react"
import ReactBible from "./components/ReactBible"
import {TestContext} from "./context/ContextFile"
import useLocalStorage from "use-local-storage"

function App() {
  const [darkMode,setDarkMode]=useLocalStorage("dark-Mode",false)
  const [fontSize]=useState(["1","2","3","4","5","6","7"])
  const [fontSizeIncrease,setFontSizeIncrease]=useLocalStorage("text","text-[70px]")  
  const value={darkMode,setDarkMode,fontSize,fontSizeIncrease,setFontSizeIncrease}
  return (
    <TestContext.Provider value={value}>
        <ReactBible/>
    </TestContext.Provider>
  )
}

export default App
