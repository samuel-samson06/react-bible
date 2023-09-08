import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { TestContext } from "../context/ContextFile"

function ChapterComponentList({chapter}) {
  const {id}=useParams()
  const {darkMode}=useContext(TestContext)
  return (
    <div className={`my-2 px-4 items-center ${darkMode?"text-white":"text-black"}`}>
      <div className={`border-2  text-center ${!darkMode && "border-black"}`}>
        <Link to={`/:${id}/${chapter}`}>{chapter}</Link>
      </div>
    </div>
  )
}

export default ChapterComponentList
