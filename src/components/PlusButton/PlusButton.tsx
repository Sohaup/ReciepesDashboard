import { Plus } from 'lucide-react'


export default function PlusButton({ texts, num, className }: { texts: string, num: Number, className: string }) {
    return (
        <div className={`w-50 h-12 px-8 rounded-[30px] group   relative transition-colors duration-500 hover:bg-black hover:text-white flex items-center  ${className}`}>
            <button className={`bg-transparent hover:bg-transparent text-black group-hover:text-white transition-colors duration-500 flex justify-start items-center gap-1`}>
                <span className='font-capiltailze text-md '>{texts}</span>
                <span className='w-6 h-6 rounded-full bg-linear-to-l from-rose-300 to-rose-500 flex justify-center items-center'>
                    {String(num)}
                </span>
            </button>
            <span className='absolute right-0 top-1 w-10 h-10 rounded-full bg-slate-300 flex justify-center items-center group-hover:bg-slate-800 transition-colors duration-500'>
                <Plus/>
            </span>
        </div>

    )
}
