
import ChatMessage from './ChatMessage/ChatMessage'
import { Link, SendHorizonal } from 'lucide-react'


export default function ChatViwer() {
  return (
    <div className='flex flex-col gap-3  relative mt-auto'>
         <div className="group space-y-3 self-start">
            <ChatMessage name='Rahaf' message='Sohaipy..' className='text-pink-400'/>
            <ChatMessage name='Rahaf' message='Where Are You ?' className='text-pink-400'/>
        </div>   
        <div className="group space-y-3 self-end">
            <ChatMessage name='Sohaip' message='Rhooofa ' className='text-blue-800'/>
            <ChatMessage name='Sohaip' message='I am here ' className='text-blue-800'/>
        </div>
         <div className="group space-y-3 self-start">            
            <ChatMessage name='Rahaf' message='mmmm welcome ' className='text-pink-400'/>
           
        </div>   
        <div className="chatForm w-full  flex items-center " >
            <span className='rounded-icon bg-slate-100 w-10 h-10'>
                <Link/>
            </span>
           <input className='focus:outline-0 bg-slate-100 min-w-3/4 text-xl rounded-[30px] p-1 placeholder:text-slate-600  ' placeholder='Message Here..'/>
           <span className='rounded-icon bg-black text-white w-11 h-11'>
            <SendHorizonal/>
           </span>
        </div>
    </div>
  )
}
