import { Button } from 'flowbite-react'
import { Bell, Filter, Mail, Menu, Moon, Search, X } from 'lucide-react'
import { useState } from 'react'
import mainLogo from '../../assets/mainLayout/icon.png'
import avatarImg from '../../assets/header/avatar1.png';
import DrawerSideBar from '../SideBar/DrawerSideBar/DrawerSideBar';

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <nav className='w-full  rounded-xl p-4 flex justify-between items-center'>
            <div className="logo relative   min-h-10 bg-slate-100  min-w-40 rounded-[30px] flex justify-center items-center px-2">
                <span className='bg-rose-200 absolute left-0 p-2 rounded-full w-12 h-12 flex justify-center items-center'>
                    <img src={mainLogo} alt='main logo for the entire app ' className='w-8 h-8 rounded-full ' />
                </span>

                <span className='font-bold ps-4 '>Recipes</span>
            </div>
            <div className="form-cont hidden lg:flex justify-center items-center gap-3 w-full lg:w-1/2    ">
                <div className="form self-start bg-slate-100 rounded-[30px]  flex items-center w-3/4 md:w-1/2 lg:w-1/2  py-2 relative ">
                    <Search className='ms-3' />
                    <input className='bg-transparent focus:outline-0 ms-1' />
                    <Button className="absolute right-0 bg-yellow-800 rounded-[30px] px-10  transition-colors hover:bg-rose-800 font-semibold font-sans">
                        <span>Search</span>
                    </Button>
                </div>
                <div className="icon">
                    <span className='bg-slate-100 w-10 h-10 flex justify-center items-center rounded-full p-2'>
                        <Filter />
                    </span>
                </div>
            </div>
            <div className="icons flex gap-1">
                <span className='w-10 h-10 rounded-full bg-yellow-800 flex items-center justify-center text-white transition-colors hover:bg-rose-800'>
                    <Mail />
                </span>
                <span className='w-10 h-10 rounded-full bg-yellow-800 hidden  lg:flex  items-center justify-center text-white transition-colors hover:bg-rose-800'>
                    <Bell />
                </span>
                <span className='w-10 h-10 rounded-full bg-yellow-800 flex items-center justify-center text-white transition-colors hover:bg-rose-800'>
                    <Moon />
                </span>
                <span onClick={() => setIsOpen(true)} className='w-10 h-10 rounded-full bg-yellow-800  flex lg:hidden items-center justify-center text-white transition-colors hover:bg-rose-800'>
                    {isOpen ? <X /> : <Menu />}
                </span>

            </div>
            <div className="avatar hidden lg:flex flex-col items-center">
                <img src={avatarImg} alt='avatar image' className='w-15 h-15 rounded-full '/>
                <span className='bg-slate-100 rounded-[30px] font-bold text-center'>Rama</span>
            </div>
            <DrawerSideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
    )
}


