import { useState } from "react"
import {getRandomVerse} from "../apiCalls"
import Loading from "../components/Loading"
import CurrentlyOffline from "../errors/CurrentlyOffline"
//import { TestContext } from "../context/ContextFile"
import useLocalStorage from "use-local-storage"

function DailyVerse() {
  const [randomVerseList,setRandomList]=useLocalStorage("random_list",[])
  const[loading,setLoading]=useState(false)
  const[offline,setOffline]=useState(false)

  function handleGetVerse(){
    setLoading(true)
    if(navigator.onLine){
      setOffline(false)
      getRandomVerse().then(function(data){
        setLoading(false)
        setRandomList(function(randomVerse){
          return [...data,...randomVerse]
        })
        console.log(randomVerseList);
      }).catch(function(err){
          console.log(err);
      })
    }else{
      alert("You Are Currently Offline")
      setOffline(true)
    }
  }


  return (
    <div >      
    {offline?<CurrentlyOffline/>:
    <div className="bg-slate-400">
      <button onClick={handleGetVerse} className={`bg-slate-600 py-1 px-1 text-sm rounded-md font-semibold text-white mx-2 my-2 `}>Get Random Verse</button>
      { 
      randomVerseList.length===0?<p className="font-semibold px-2 ">No Data</p>:
      randomVerseList.map(function(verses){
      return <>
        {loading?<Loading/>:<div className="bg-slate-400 border-2 mx-1 rounded-md my-4 border-slate-900 py-3 px-3 font-semibold">
          <p className="text-center font-bold">{verses.book_name} {verses.chapter}:{verses.verse}</p>
          <p>{verses.text}</p>
        </div>}
      </>
    })}
    <br/>
    </div>}
    </div>
  )
}

export default DailyVerse
