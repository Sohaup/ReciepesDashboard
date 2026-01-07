import beatifulImg from '../../../assets/mainBoard/beatifulWomenTwo.jpg';
import { Bell, Ellipsis, MessageSquare, PhoneCall } from 'lucide-react';

export default function CardImg() {
    return (
        <div className='relative  '>
            <img src={beatifulImg} className='w-full h-full  rounded-xl ' />
            <div className="wrapper rounded-xl absolute inset-0 bg-black/30  flex flex-col">
                <div className="head w-full flex  justify-between p-2">
                    <h4 className='text-lg font-semibold'>preview</h4>
                    <span>
                        <Ellipsis />
                    </span>
                </div>
                <div className="foot w-1/2 flex items-center justify-between gap-10 absolute bottom-3  right-3 md:right-1/4 2xl:right-3 ">
                    <div className="group flex gap-3 items-center text-white">
                        <span className='rounded-icon  bg-red-600 cursor-pointer'>
                            <PhoneCall />
                        </span>
                        <span className=' rounded-icon bg-slate-100/25 cursor-pointer hover:bg-white hover:text-black transition-colors duration-300'>
                            <MessageSquare />
                        </span>
                    </div>
                    <span className=' rounded-icon bg-slate-100/25 cursor-pointer hover:bg-white hover:text-black transition-colors duration-300 '>
                        <Bell/>
                    </span>
                </div>
            </div>
        </div>
    )
}
