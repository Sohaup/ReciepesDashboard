import { CalendarRange, Ellipsis } from 'lucide-react'
import PlusButton from '../PlusButton/PlusButton'
import { Datepicker } from 'flowbite-react'


export default function Calender() {
    return (
        <div className='bg-white  rounded-xl p-5'>
            <div className="head flex gap-3 items-center">
                <div className="icon flex gap-3 items-center">
                    <CalendarRange />
                    <h3 className='text-2xl font-bold'>Calender</h3>
                </div>
                <PlusButton texts='sup' num={0} className='bg-linear-to-l from-0% from-rose-200 to-rose-500 text-black  max-w-35'/>
                <span>
                    <Ellipsis/>
                </span>
            </div>
            <div className="main flex justify-center mt-3">
                <Datepicker inline color='pink' className='shadow-none'/>
            </div>
        </div>
    )
}
