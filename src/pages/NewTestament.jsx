import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { getNewTestament } from "../apiCalls"
import { split } from "../helper";
import NewTestamentList from "../components/OldTestamentList";
import CurrentlyOffline from "../errors/CurrentlyOffline";

function NewTestament() {
  const[newTestamentBooks,setNewTestamentBooks]=useState([])
  const [connected,setConnected]=useState(false)
  const [loading,setLoading]=useState(false)
  useEffect(function(){
    if(navigator.onLine){
      setLoading(true)
      getNewTestament().then(function(data){
        setLoading(false)
        setNewTestamentBooks(split(data));
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
        {connected?<CurrentlyOffline/>:newTestamentBooks.map(function(test,index){
          return <NewTestamentList book={test} key={index}/>
        })}
      </div>}

    </div>
  )
}

export default NewTestament
