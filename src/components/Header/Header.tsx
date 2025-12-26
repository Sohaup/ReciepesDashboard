import { Button } from 'flowbite-react'
import { Bell, Mail, Search } from 'lucide-react'


export default function Header() {
  return (
    <nav className='w-full bg-slate-100 rounded-xl p-4 flex justify-between items-center'>
        <div className="form bg-white rounded-[30px] flex items-center w-1/4 py-2 ">
            <Search className='ms-3'/>
            <input className='bg-transparent focus:outline-0 ms-1'/>
            <Button className="bg-yellow-800 rounded-[30px] px-10 ms-auto me-2 transition-colors hover:bg-rose-800 font-semibold font-sans">
            <span>Search</span>
           </Button>
        </div>
        <div className="icons flex gap-1">
            <span className='w-10 h-10 rounded-full bg-yellow-800 flex items-center justify-center text-white transition-colors hover:bg-rose-800'>
                <Mail/>
            </span>
            <span className='w-10 h-10 rounded-full bg-yellow-800 flex items-center justify-center text-white transition-colors hover:bg-rose-800'>
                <Bell/>
            </span>
        </div>
    </nav>   
  )
}
