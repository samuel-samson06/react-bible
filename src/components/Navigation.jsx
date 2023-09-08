import { NavLink } from "react-router-dom"
import {GiOpenBook,GiSpellBook} from 'react-icons/gi'
import {BsCalendar2Check} from "react-icons/bs"
import {AiOutlineSetting} from "react-icons/ai"

function Navigation() {
  return (
    <div className=" flex justify-between  items-center flex-row px-2 py-1">
        <NavLink to={"/"} className={"flex flex-col text-slate-300 items-center"}>
            <GiOpenBook  className="text-xl " />
            <span className="font-light text-[12px]">Old Testament</span>
        </NavLink>
        <NavLink to={'/newTestament'} className={"flex text-slate-300 flex-col items-center"}>
            <GiSpellBook className="text-2xl " />
            <span className="font-light text-[12px]">New Testament</span>
        </NavLink>
        <NavLink to={'/dailyVerse'} className={"flex text-slate-300 flex-col items-center"}>
            <BsCalendar2Check className="text-xl " />
            <span className="font-light text-[12px]">Random Verses</span>
        </NavLink>
        <NavLink to={'/setting'} className={"flex text-slate-300 flex-col items-center"}>
            <AiOutlineSetting className=" text-xl " />
            <span className="font-light text-[12px]">Settings</span>
        </NavLink>
    </div>
  
)
}

export default Navigation
