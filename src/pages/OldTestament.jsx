import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { getOldTestament } from "../apiCalls"
import { split } from "../helper";
import OldTestamentList from "../components/OldTestamentList";
import CurrentlyOffline from "../errors/CurrentlyOffline";

function OldTestament() {
  const[oldTestamentBooks,setOldTestamentBooks]=useState([])
  const [connected,setConnected]=useState(false)
  const [loading,setLoading]=useState(false)
  useEffect(function(){
    if(navigator.onLine){
      setLoading(true)
      getOldTestament().then(function(data){
        setLoading(false)
        setOldTestamentBooks(split(data));
        setConnected(false)
      })
    }else{
      setConnected(true)
    }
  },[])

  return (
    <div>
      {
      loading?<Loading/>:
      <div>
        {connected?<CurrentlyOffline/>:oldTestamentBooks.map(function(test,index){
          return <OldTestamentList book={test} key={index}/>
        })}
      </div>}

    </div>
  )
}

export default OldTestament
