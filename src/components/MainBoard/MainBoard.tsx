import { Button } from "flowbite-react";
import { ArrowBigDownDash, ArrowBigUpDash,  Clock, Crown, Dot, FireExtinguisher, MessageCircleMore, Notebook, ScreenShare, Square, TestTube, User } from "lucide-react";
import avatar3Img from '../../assets/mainBoard/avatar3.png';
import avatar4Img from '../../assets/mainBoard/avatar4.png';
import avatar5Img from '../../assets/mainBoard/avatar5.png';
import avatar6Img from '../../assets/mainBoard/avatar6.png';
import PlusButton from "../PlusButton/PlusButton";
import DetailsCard from "../DetailsCard/DetailsCard";
import { buttonCaller } from "../GredientButton/GredientButton";
import Calender from "../Calender/Calender";
import CardHeader from "../LastRowCard/CardHeader/CardHeader";
import LastRowCard from "../LastRowCard/LastRowCard";
import CardImg from "../LastRowCard/CardImg/CardImg";
import CardFooter from "../LastRowCard/CardFooter/CardFooter";
import ChatViwer from "../LastRowCard/ChatViwer/ChatViwer";



const avatarImgs = [avatar3Img, avatar4Img, avatar5Img, avatar6Img];

export default function MainBoard() {
    return (
        <section className="bg-slate-100 rounded-xl p-5 my-5 flex flex-col gap-5 ">

            <div className="title flex justify-between  ">
                <div className="texts flex gap-5 items-center flex-col md:flex-row">
                    <h1 className="text-3xl font-bold font-sans">Recipes Dashboard</h1>
                    <div className="btn self-start md:self-center">
                        <Button className="rounded-[30px] bg-linear-to-l from-yellow-600 via-yellow-700 to-yellow-800 flex gap-1 font-lg">
                            <span><Crown /></span>
                            Pro member
                        </Button>
                    </div>
                </div>
                <div className="side">
                    <p className="flex items-center">
                        <span><Dot color="green" size={50} /></span>
                        last update on 4 jen 2026
                    </p>
                    <div className="cont flex  justify-between items-center flex-col lg:flex-row gap-3 lg:gap-0">
                        <div className="avatars flex relative">
                            {avatarImgs.map((avatar, index) => <span key={avatar} className={` border border-white rounded-full w-12 h-12 -mx-3 `}><img src={avatar} alt="avatar image" className={`w-12 h-12 rounded-full z-${index + 1}`} /></span>)}
                        </div>
                        <div className="btn">
                            <Button className="bg-black rounded-[30px] px-8 relative min-w-25 hover:bg-white hover:text-black duration-500 group">
                                <span className="font-semibold absolute left-4 "> Add</span>
                                <span className=" absolute right-0 bg-slate-700 rounded-full w-9 h-9 flex justify-center items-center group-hover:bg-rose-400 transition-colors  duration-500"><User /></span>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
            <CardsSection />
            <LastRowCards />
        </section>
    )
}

function CardsSection() {
    const buttonsArr1 = [
        buttonCaller({ text: "urgent", className: "bg-linear-to-b from-yellow-300 to-orange-600", Icon: FireExtinguisher }),
        buttonCaller({ text: "normal", className: "bg-linear-to-b from-rose-300 from-0% to-red-600 to-100% ", Icon: Clock }),
    ]

    const buttonsArr2 = [
        buttonCaller({ text: "low", className: "bg-linear-to-b from-yellow-300 to-orange-600", Icon: ArrowBigDownDash }),
        buttonCaller({ text: "high", className: "bg-linear-to-b from-rose-300 from-0% to-red-600 to-100% ", Icon: ArrowBigUpDash }),
    ]
    return (
        <div className="cardsCont flex flex-col gap-3">
            <div className="rowOne flex flex-col 2xl:flex-row gap-2">
                <div className="cont flex flex-col gap-2">
                    <div className="buttons  grid grid-cols-2 md:grid-cols-3  2xl:grid-cols-4  gap-2 place-items-start">
                        <PlusButton texts="ToDo" num={2} className="bg-white text-black" />
                        <PlusButton texts="Progress" num={4} className="bg-white text-black" />
                        <PlusButton texts="Preview" num={5} className="bg-white text-black" />
                        <PlusButton texts="Completed" num={7} className="bg-white text-black" />
                    </div>
                    <div className="cards flex flex-col lg:flex-row gap-2 bg-white rounded-xl">
                        <DetailsCard Buttons={buttonsArr1} title="Revmap Sidebar" texts="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nemo rerum laboriosam excepturi repellendus voluptatem distinctio ipsam porro dolor aspernatur." />
                        <DetailsCard Buttons={buttonsArr2} title="OnBoardingFlow" texts="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nemo rerum laboriosam excepturi repellendus voluptatem distinctio ipsam porro dolor aspernatur." />
                    </div>
                </div>

                <Calender/>

            </div>
            <div className="rowTwo">

            </div>
        </div>
    )
}

function LastRowCards() {
    return (
        <div className="rowCards flex flex-col xl:flex-row gap-2" >
            <div className="row grid grid-cols-1 md:grid-cols-2  gap-3 col-start-1 col-end-7 place-items-start   ">
              <LastRowCard 
              Header={<CardHeader Icon={ScreenShare} text="Meet Schedule " />}
              Main={<CardImg/>} 
              Footer={<CardFooter date="1jen 2007" text="Daily Scrum"/> } 
              />
              <LastRowCard
              Header={<CardHeader Icon={MessageCircleMore} text="Design Team Chat"/>}
              Main={<ChatViwer/>}
              Footer={<></>}
              />
            </div>
            <div className="col flex flex-col gap-4 lg:gap-2 items-start justify-center col-start-7 col-end-12 ">
                <div className="timer p-3  w-full space-y-5  rounded-xl bg-linear-0 from-violet-300 to-violet-500">
                    <div className="haed flex gap-2 items-center">
                        <span className="rounded-icon bg-slate-200/30">
                            <Clock/>
                        </span>
                        <h5 className="text-xl">Timer</h5>
                    </div>
                    <div className="main flex justify-between self-end" >
                        <p className="text-4xl">20:06</p>
                        <span className="rounded-icon bg-red-600 text-white">
                             <Square/>
                        </span>                       
                    </div>
                </div>

                 <div className="notes w-full  p-3 space-y-8 rounded-xl bg-linear-0 from-pink-200 to-pink-400">
                    <div className="haed flex gap-2 items-center">
                        <span className="rounded-icon bg-slate-200/30">
                            <Notebook/>
                        </span>
                        <h5 className="text-xl">Notes</h5>
                    </div>
                    <div className="main flex flex-col justify-between" >
                        <p className="text-md">
                            Lorem ipsum dolor sit amet consectetur
                            
                        </p>
                        <span className=" text-slate-600">
                             today
                        </span>                       
                    </div>
                </div>

                <div className="test w-full  p-3 space-y-8 rounded-xl bg-linear-0 from-green-200 to-green-400">
                    <div className="haed flex gap-2 items-center">
                        <span className="rounded-icon bg-slate-200/30">
                            <TestTube/>
                        </span>
                        <h5 className="text-xl">Test</h5>
                    </div>
                    <div className="main flex flex-col justify-between" >
                        <p className="text-md">
                            Lorem ipsum dolor sit amet consectetur
                            
                        </p>
                        <span className=" text-red-600">
                             start
                        </span>                       
                    </div>
                </div>
            </div>            
        </div>
    )
}

