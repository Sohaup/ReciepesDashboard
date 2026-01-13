import { Bell, Earth, Filter } from "lucide-react";


export default function SideHead() {
  return (
    <div className="text-white flex justify-evenly items-center my-5">
        <span className="p-3 flex justify-center items-center bg-white rounded-lg text-black ">
            <Bell className="fill-black"/>
        </span>
        <span>
            <Earth/>
        </span>
        <div className="group flex gap-2">
            <Filter/>
            <p className="font-inter font-bold text-2xl ">Setting</p>
        </div>
    </div>
  )
}
