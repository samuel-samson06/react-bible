import {AiOutlineArrowRight} from "react-icons/ai"
import { Link } from "react-router-dom"

function NewTestamentList({book}) {
    console.log(book)
    return (
    <div className=" bg-slate-400">
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

export default NewTestamentList