import mainIcon from "../../assets/mainLayout/icon.png";
import {PanelTopBottomDashed , ClipboardList, ChartPie, Calendar, Settings, Moon} from "lucide-react"
import { Button } from "flowbite-react";
import { useLocation , Link } from "react-router-dom";
import { useEffect } from "react";

export default function SideBar() {
    const {pathname} = useLocation();
    useEffect(()=>{
        console.log(pathname);
        
    }, [])
  return (
    <div className="sidebar hidden lg:flex flex-col gap-30 bg-slate-100 rounded-lg px-8 py-16">
        <div className="head flex flex-col gap-2 items-center ">
            <img src={mainIcon} alt="main icon" className="w-15 h-15 rounded-full " />
            <h1 className="text-2xl font-bold text-yellow-700">Recipes </h1>
        </div>
        <ul className="menu flex flex-col gap-6 my-2">
            <h2 className="text-slate-600 text-sm uppercase text-center">menu</h2>
            <li className={`flex gap-1 relative side-bar-links-hover ${pathname == "/" ? " after:absolute after:h-10 after:w-2 after:bg-yellow-400 after:-left-8 after:-top-2 after:rounded-tr-xl after:rounded-br-xl hover:after:bg-transparent hover:after:transition-colors " : ""}`}>
                <span><PanelTopBottomDashed/></span>
                <Link to={"/"} >Dashboard</Link>
            </li>
            <li className={`flex gap-1 relative side-bar-links-hover ${pathname == "/tasks" ? " after:absolute after:h-10 after:w-2 after:bg-yellow-400 after:-left-8 after:-top-2 after:rounded-tr-xl after:rounded-br-xl hover:after:bg-transparent hover:after:transition-colors" : ""}`}>
                <span><ClipboardList/></span>
                <Link to={"/tasks"}>Tasks</Link>
            </li>
            <li className={`flex gap-1 relative  side-bar-links-hover ${pathname == "/analys" ? " after:absolute after:h-10 after:w-2 after:bg-yellow-400 after:-left-8 after:-top-2 after:rounded-tr-xl after:rounded-br-xl hover:after:bg-transparent hover:after:transition-colors" : ""}`}>
                <span><ChartPie/></span>
                <Link to={"/analys"}>Analysis</Link>
            </li>
            <li className={`flex gap-1 relative side-bar-links-hover ${pathname == "/calender" ? " after:absolute after:h-10 after:w-2 after:bg-yellow-400 after:-left-8 after:-top-2 after:rounded-tr-xl after:rounded-br-xl hover:after:bg-transparent hover:after:transition-colors" : ""}`}>
                <span><Calendar/></span>
                <Link to={"/calender"}>Calender</Link>
            </li>
            <li className={`flex gap-1 relative side-bar-links-hover ${pathname == "/settings" ? " after:absolute after:h-10 after:w-2 after:bg-yellow-400 after:-left-8 after:-top-2 after:rounded-tr-xl after:rounded-br-xl hover:after:bg-transparent hover:after:transition-colors" : ""}`}>
                <span><Settings/></span>
                <Link to={"/settings"}>Settings</Link>
            </li>
            <li className="flex gap-1">
                <span><Moon/></span>
                <p>Dark Mode</p>
            </li>
        </ul>

        <div className="card cool-bg-img rounded-xl flex flex-col items-center justify-center gap-2 p-3">  
            <span className="bg-white w-8 h-8 flex items-center justify-center rounded-full self-start">
                 <img src={mainIcon} className="w-6 h-6 rounded-full"/>
            </span>         
           
            <h3 className="flex flex-col font-bold text-white font-sans text-md ">
                <span>Visit Our</span>
                <span>Recipes Website</span>
            </h3>
           <Button className="bg-yellow-800 rounded-[30px] px-15 transition-colors hover:bg-rose-800 font-semibold font-sans">
            <Link to={"https://reciepes-4y6k.vercel.app/"} target="_blank">Visit</Link>
           </Button>
        </div>
    </div>
  )
}
