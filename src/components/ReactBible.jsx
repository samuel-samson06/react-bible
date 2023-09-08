import { BrowserRouter, Route, Routes } from "react-router-dom"
import OldTestament from "../pages/OldTestament"
import NewTesament from "../pages/NewTestament"
import DailyVerse from "../pages/DailyVerse"
import Settings from "../pages/Settings"
import PageNotFound from "../pages/PageNotFound"
import AppLayout from "./AppLayout"
import ChapterComponent from "./ChapterComponent"
import Chapter from "./Chapter"
//import NewTestamentList from "./NewTestamentList"

function ReactBible() {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<AppLayout/>}>
                  <Route index path="/" element={<OldTestament/>}/>
                  <Route path="/newTestament" element={<NewTesament/>}/>
                  <Route path="/dailyVerse" element={<DailyVerse/>}/>
                  <Route path="/setting" element={<Settings/>}/> 
              </Route>
              <Route path="/newTestament/:id" element={<p>TESTING2</p>}/>
              <Route path="/:id" element={<ChapterComponent/>}/>
              <Route path={`/:id/:id2`} element={<Chapter/>}/>
              <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
 
    </>
  )
}

export default ReactBible
