import type React from "react";
import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";



export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 m-5">
      <div className="side">
        <Header />
     </div>
      <div className="main flex w-full gap-5 bg-slate-100 rounded-xl">
        <SideBar className="hidden" />
        <div className="childrens w-full ">
          {children}
        </div>       

      </div>

    </div>
  )
}
