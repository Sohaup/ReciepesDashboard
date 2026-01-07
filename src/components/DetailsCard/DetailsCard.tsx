import { Ellipsis, Link, MessageSquare, ShieldCheck } from 'lucide-react'
import React from 'react'
import avatar3Img from '../../assets/mainBoard/avatar3.png';
import avatar4Img from '../../assets/mainBoard/avatar4.png';
import avatar5Img from '../../assets/mainBoard/avatar5.png';
import avatar6Img from '../../assets/mainBoard/avatar6.png';

const avatarImgs = [avatar3Img, avatar4Img, avatar5Img, avatar6Img];

export default function DetailsCard({ Buttons, title, texts }: { Buttons: Array<React.ReactElement>, title: string, texts: string }) {
    return (
        <div className='flex flex-col gap-5 bg-slate-100 rounded-xl m-5 p-5 '>
            <div className="card-head flex flex-row">
                <div className="cont flex gap-2 ">
                    {Buttons.map((Button) => <div>{Button}</div>)}
                </div>
                <span>
                    <Ellipsis />
                </span>
            </div>
            <div className="title">
                <h2 className='text-4xl font-bold'>{title}</h2>
            </div>
            <div className="content text-slate-700 leading-8">
                {texts}
            </div>
            <div className="avatars flex relative">
                {avatarImgs.map((avatar, index) => <span key={avatar} className={` border border-white rounded-full w-12 h-12 -mx-3 `}><img src={avatar} alt="avatar image" className={`w-12 h-12 rounded-full z-${index + 1}`} /></span>)}
            </div>
            <div className="card-foot border-t border-slate-400 flex justify-between pt-5 text-slate-500 ">
                <div className="group flex gap-6 ">
                    <span className='flex gap-2'>
                        <span>
                            <MessageSquare />
                        </span>
                        <span>
                            10
                        </span>
                    </span>
                    <span className='flex gap-2'>
                        <span>
                            <Link />
                        </span>
                        <span>
                            2
                        </span>
                    </span>
                </div>

                <span className='flex gap-2'>
                    <span>
                        <ShieldCheck />
                    </span>
                    <span>
                        0/2
                    </span>
                </span>
            </div>
        </div>
    )
}
