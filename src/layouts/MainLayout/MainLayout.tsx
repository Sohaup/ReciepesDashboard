import type React from "react";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


export default function MainLayout({children}:{children:React.ReactNode}) {
  return (
    <div className="flex gap-2 m-5">
        <div className="side">
            <SideBar/>
        </div>
        <div className="main w-full">
            <Header/>
            {children}
            <Footer/>
        </div>
        
    </div>
  )
}
