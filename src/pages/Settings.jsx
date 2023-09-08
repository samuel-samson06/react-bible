import { useContext} from "react";
import {TestContext} from "../context/ContextFile"

function Settings() {
  const{darkMode,setDarkMode,fontSize,fontSizeIncrease,setFontSizeIncrease}=useContext(TestContext)
  const handleSwitch=()=>{
    setDarkMode(!darkMode);
  }
  return (
    <div className={`${darkMode && "bg-slate-600"}`}>
        <p className="text-white text-center text-sm">Personal Settings</p>
        <main className="flex justify-between py-3 px-2">
          <p>Dark Mode </p>
          <div onClick={handleSwitch} className={darkMode?"switch":"switchOff"}>
            <div className={darkMode?"circle":"circleOff"}>.</div>
          </div>
        </main>
        <p className="text-sm px-3 py-1 font-semibold">Fonts</p>
        <p className={`${fontSizeIncrease} bg-white mx-3 py-1 px-1 my-2`}>Your Text Size Would Be Like This</p>
        <div className="flex justify-evenly">
          {fontSize.map(function(each,index){
            return <button onClick={()=>{
              setFontSizeIncrease(`text-[${each}0px]`)
              
            }} key={index} className="bg-slate-300 py-[2px] px-2 mb-3">{each}</button>
          })}
        </div>
        <p className="px-3 font-bold">Info</p>
        <ul className={`${darkMode?"bg-white":"bg-slate-500"} rounded-lg list-disc max-[400px]:text-sm  mx-4 py-3 px-6 ${!darkMode && "text-white"}`}>
          <li>Api Gotten From Rapid APIs</li>
          <li>Mobile App Not Available For Now</li>
          <li>Database used to Store chapters are still under Construction</li>
          <li>We are not under any company or organisation</li>
          <p></p>
        </ul><br/><br/>
    </div>
  )
}

export default Settings
