import { Button  } from 'flowbite-react'
import { Bell, Mail, Menu, Search, X } from 'lucide-react'
import { useState } from 'react'
import DrawerSideBar from '../DrawerSideBar/DrawerSideBar';


export default function Header() {
    const [isOpen , setIsOpen] = useState<boolean>(false);
    return (
        <nav className='w-full bg-slate-100 rounded-xl p-4 flex justify-between items-center'>
            <div className="form bg-white rounded-[30px] flex items-center w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/4 py-2 relative ">
                <Search className='ms-3' />
                <input className='bg-transparent focus:outline-0 ms-1' />
                <Button className="absolute right-0 bg-yellow-800 rounded-[30px] px-10  transition-colors hover:bg-rose-800 font-semibold font-sans">
                    <span>Search</span>
                </Button>
            </div>
            <div className="icons flex gap-1">
                <span className='w-10 h-10 rounded-full bg-yellow-800 flex items-center justify-center text-white transition-colors hover:bg-rose-800'>
                    <Mail />
                </span>
                 <span className='w-10 h-10 rounded-full bg-yellow-800 hidden  lg:flex  items-center justify-center text-white transition-colors hover:bg-rose-800'>
                    <Bell />
                </span>
                <span onClick={()=>setIsOpen(true)} className='w-10 h-10 rounded-full bg-yellow-800  flex lg:hidden items-center justify-center text-white transition-colors hover:bg-rose-800'>
                    {isOpen ? <X/> : <Menu/> }
                </span>
                
            </div>
            <DrawerSideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
        </nav>
    )
}


