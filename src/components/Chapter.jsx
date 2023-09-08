import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getVerses } from "../apiCalls"
import Loading from "./Loading"
import CurrentlyOffline from "../errors/CurrentlyOffline"
import { TestContext } from "../context/ContextFile"
// import { newLine } from "../helper"

function Chapter() {
    const [verse,setVerse]=useState({})
    const [connected,setConnected]=useState(false)
    const {fontSizeIncrease,darkMode}=useContext(TestContext)
    
    //console.log(fontSizeIncrease);
    const navigate=useNavigate()
    const {id,id2}=useParams()
    useEffect(function(){
        getVerses(id.slice(1,).trim(),id2.trim()).then(function(data){
            if(navigator.onLine){
                setVerse(data);
                setConnected(false)
            }else{
                setConnected(true)
            }
        }).catch(function(err){
            console.log(err);
        })
    },[id,id2])
    return (
    <div>
        <div className="grid grid-cols-3">
            <button onClick={()=>{navigate(-1)}}>←</button>
            <h1>{Object.keys(verse).length===0 ? "":<h1 className="text-center font-semibold">{verse.Book}</h1>}</h1>
        </div>
        {connected?<CurrentlyOffline/>:
        <>
            {Object.keys(verse).length===0?<Loading/>:<h1 className={`${darkMode?"bg-slate-600":"bg-white"} ${darkMode && "text-white"} font-medium py-3 px-5 ${fontSizeIncrease}`}>{verse.Output}</h1>}
        </>}
    </div>
  )
}
export default Chapter
