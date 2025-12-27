import { Button } from "flowbite-react";
import { ArrowRight, ChartNoAxesCombined, Eye, Key, ListCheck, Plus } from "lucide-react";

export default function MainBoard() {
    return (
        <section className="bg-slate-100 rounded-xl p-5 my-5 flex flex-col gap-5 ">

            <div className="title flex justify-between ">
                <div className="texts space-y-2">
                    <h1 className="text-3xl font-bold font-sans">Dashboard</h1>
                    <p className="text-slate-500 text-sm font-sans w-1/2 md:w-full">plan , view , display , monitor and perform operations</p>
                </div>
                <div className="btn">
                    <Button className="rounded-[30px] bg-linear-to-l from-yellow-600 via-yellow-700 to-yellow-800 flex gap-1 font-lg">
                        <span><Plus /></span>
                        New Recipe
                    </Button>
                </div>
            </div>
            <CardsSection />
            <TaskCards />
            <LastRowCards />
        </section>
    )
}

function CardsSection() {
    return (
        <div className="cardsCont grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="card   rounded-xl p-5">
                <div className="card-head">
                    <h2>Total Recipes</h2>
                    <span><ArrowRight /></span>
                </div>
                <div className="card-body">
                    <p>N</p>
                </div>
                <div className="card-foot">
                    <p>click to view</p>
                </div>
            </div>
            <div className="card  rounded-xl p-5">
                <div className="card-head">
                    <h2>Total species</h2>
                    <span><ArrowRight /></span>
                </div>
                <div className="card-body">
                    <p>N</p>
                </div>
                <div className="card-foot">
                    <p>click to view</p>
                </div>
            </div>
            <div className="card  rounded-xl p-5">
                <div className="card-head">
                    <h2>created Recipes</h2>
                    <span><ArrowRight /></span>
                </div>
                <div className="card-body">
                    <p>N</p>
                </div>
                <div className="card-foot">
                    <p>click to view</p>
                </div>
            </div>
            <div className="card   rounded-xl p-5">
                <div className="card-head flex-col  ">
                    <h2>Analysis</h2>
                    <p className="text-sm text-slate-400">show project analysis </p>
                </div>
                <div className="card-body">
                    <p ><ChartNoAxesCombined size={40} /></p>
                </div>
                <div className="card-foot">
                    <p>click to view</p>
                </div>
            </div>
            <div className="card   rounded-xl p-5">
                <div className="card-head flex-col  ">
                    <h2>Operations</h2>
                    <p className="text-sm text-slate-400">perform tasks on the recipes </p>
                </div>
                <div className="card-body">
                    <p ><ListCheck size={40} /></p>
                </div>
                <div className="card-foot">
                    <p>click to view</p>
                </div>
            </div>
            <div className="card   rounded-xl p-5">
                <div className="card-head flex-col  ">
                    <h2>Display</h2>
                    <p className="text-sm text-slate-400">Display all Recipes </p>
                </div>
                <div className="card-body">
                    <p ><Eye size={40} /></p>
                </div>
                <div className="card-foot">
                    <p>click to view</p>
                </div>
            </div>
        </div>
    )
}

function TaskCards() {
    return (
        <div className="taskcards flex gap-3 flex-col lg:flex-row">
            
        </div>
    )
}

function LastRowCards() {
    return (
        <div className="rowCards grid grid-cols-1 lg:grid-cols-3 gap-3" >
            <div className="card  rounded-xl p-5 flex-col items-center justify-evenly lg:col-start-1 lg:col-end-3 ">
                <div className="card-head flex-col  ">
                    <h2>Your Key</h2>
                    <p className="text-sm text-slate-400">Your Api Key </p>
                    <p className="mx-auto text-center w-fit " ><Key size={40} className="rotate-45"/></p>
                </div>
                <div className="card-body justify-center ">
                    
                    <p className="text-lg md:text-xl  ">b9654564-e0ed-4597-b6d1-9fafc69be32f</p>
                    <div className="card-foot ">
                        <p className="text-sm text-center">click to view</p>
                    </div>
                </div>

            </div>
            <div className="card text-white red-cool-bg-img   rounded-xl p-5  lg:col-start-3">
                <div className="card-head flex-col  ">
                    <h2>Time</h2>
                    <p className="text-sm text-slate-400">Track the Time </p>
                </div>
                <div className="card-body">
                    <p >N:N:N</p>
                </div>                
            </div>
        </div>
    )
}