import type React from "react";


export default function LastRowCard({ Header, Main, Footer }: { Header: React.ReactElement, Main: React.ReactElement, Footer: React.ReactElement }) {
    return (
        <div className="white-card flex flex-col  gap-5 w-full   overflow-hidden md:h-140 xl:h-150">            
           {Header}
           {Main}
           {Footer}
        </div>
    )
}
