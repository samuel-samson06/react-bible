import {AiOutlineArrowRight} from "react-icons/ai"
import { Link } from "react-router-dom"
import{useContext} from "react"
import { TestContext } from "../context/ContextFile"

function OldTestamentList({book}) {

  const {darkMode}=useContext(TestContext)

  return (
    <div className={darkMode?"bg-slate-600 text-white":"bg-white"}>
        <Link to={`/${book}`}>
            <p className="border-b-black py-1 px-3 
            border-b-[1px] font-semibold cursor-pointer flex flex-row justify-between">
                {book}
                <AiOutlineArrowRight/>
            </p>
        </Link>
    </div>
    
  )
}

export default OldTestamentList