import {BiSolidErrorCircle} from "react-icons/bi"
import {BsDatabaseX} from "react-icons/bs"
//import {MdSignalWifiConnectedNoInternet3} from "react-icons/md"

function CurrentlyOffline() {
  return (
    <div className="text-center bg-slate-400 py-3 px-2">
        <div className="bg-white rounded-xl py-3 mx-3 my-2 flex flex-col items-center">
            <BiSolidErrorCircle className="text-red-500 text-4xl"/>
            <div className="text-center">
                <p className="py-3 flex flex-row items-center justify-center gap-1">Could not retrieve data <BsDatabaseX/></p>
                <h4 className="text-sm py-4 font-medium">Ensure You Are Connected to the internet</h4>
            </div>
        </div>
    </div>
  )
}

export default CurrentlyOffline