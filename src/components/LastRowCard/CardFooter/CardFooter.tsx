import { Button } from 'flowbite-react'
import { Calendar, Projector } from 'lucide-react'

export default function CardFooter({text , date}:{text:string , date:string}) {
  return (
    <div className='flex  justify-between mt-auto '>
        <div className="details flex flex-col items-start ">
            <h5 className='text-2xl font-bold'>{text}</h5>
            <p className='text-sm text-slate-600 flex gap-1 '> 
                <Calendar size={19}/>
                {date}
            </p>
        </div>
        <div className="btn">
            <Button className='flex  rounded-[30px] bg-slate-100 hover:bg-slate-300 relative min-w-40'>
                <p className='text-slate-600 absolute left-4'>                   
                    Join Meating
                </p>
                <span className='rounded-icon bg-white text-slate-600 absolute right-0'>
                    <Projector/>
                </span>
            </Button>
        </div>
    </div>
  )
}
