import { useNavigate, useParams } from "react-router-dom"
import { getBookName } from "../apiCalls"
import Loading from "./Loading"
import { useContext, useEffect, useState } from "react"
import ChapterComponentList from "./ChapterComponentList"
import CurrentlyOffline from "../errors/CurrentlyOffline"
import { TestContext } from "../context/ContextFile"

function ChapterComponent() {
  const {id}=useParams()
  const {darkMode}=useContext(TestContext)
  const navigate=useNavigate()
  const [bookError,setBookError]=useState(false)
  const [chapters,setChapter]=useState([])
  const [connected,setConnected]=useState(false)

    useEffect(function(){
        getBookName(id.trim()).then(function(data){     
            if(data==="Book not found"){
              setBookError(true)
            }else{
              if(navigator.onLine){
                setChapter(data);
                setBookError(false)
                setConnected(false)
              }else{
                setConnected(true)
              }
            }
        }).catch(function(err){
            console.log("ERROR",err);
        })
    },[id])
    
    const testing=chapters.reduce(function(emptyArr,currElement){
      if(!emptyArr.includes(currElement.chapter)){
        return [...emptyArr,currElement.chapter]
      }else{
        return emptyArr
      }},[])
    return (
      <div>
          <div className="grid grid-cols-3">
            <button onClick={()=>{navigate(-1)}}>←</button>
            <h1 className="text-center text-lg font-semibold">{id}</h1>  
          </div>
          {bookError?<div className="bg-slate-500 py-4 px-2 ">
            <p className="text-center font-semibold text-white">Book of {id} not Available. <br/>Database still under construction </p>
          </div>:
          <div>
          {connected?<CurrentlyOffline/>:chapters.length===0?<Loading/>:
          <div>
            <p className="text-center text-sm font-medium ">{chapters[chapters.length-1].chapter} Chapters(s), Verse(s) {chapters.length}</p>
              <div className={`grid grid-cols-4 ${darkMode?"bg-slate-600":"bg-white"}`}>
                {testing.map(function(chapter,index){
                  return <ChapterComponentList chapter={chapter} key={index}/>
                })}
              </div>
          </div>
          }
        </div>}
      </div>
  )
}

export default ChapterComponent