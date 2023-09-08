import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"


function AppLayout() {
  return (
    <div>
      <h1 className="text-center bg-white font-semibold">React Online Bible </h1>
        <div className="bg-slate-700">
          <Navigation/>
        </div>
        <Outlet/>
    </div>
  )
}

export default AppLayout
