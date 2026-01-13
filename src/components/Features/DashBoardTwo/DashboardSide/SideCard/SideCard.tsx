import { ArrowRight, CircleDollarSign, Wallet, type LucideIcon } from "lucide-react"
import avatarImg from "../../../../../assets/mainBoard/avatar6.png"
import { Button } from "flowbite-react"

export default function SideCard() {
    return (
        <div className="flex flex-col items-center justify-center gap-3 text-white ">
            <div className="img">
                <img src={avatarImg} className="w-50 h-50 rounded-full mx-auto" />
                <div className="texts font-inter my-3 ">
                    <h5 className="text-3xl font-bold text-center">Brother Dylan</h5>
                    <p className="text-slate-300 text-sm font-semibold text-center">Staff manager</p>
                </div>
                <div className="foot bg-stone-800 rounded-lg p-4 flex flex-col justify-center items-center gap-3">
                    <div className="group flex gap-3">
                        <FootCard Icon={Wallet} text="Balance" price={4888} />
                        <FootCard Icon={CircleDollarSign} text="Sold Out" price={3500} />
                    </div>
                    <Button className="w-full bg-white text-black hover:bg-orange-500 hover:text-white">
                        <p className="font-semibold">View All Data</p>
                        <ArrowRight/>
                    </Button>
                </div>
            </div>
        </div>
    )
}


function FootCard({ text, price, Icon }: { text: string, price: number, Icon: LucideIcon }) {
    return (
        <div className="foot-card bg-stone-700 text-stone-400 rounded-md  px-4 py-2 flex justify-evenly items-center gap-3">
            <Icon />
            <div className="texts">
                <h6 className="text-xl font-inter font-bold text-amber-400">{text}</h6>
                <p className="">${price}</p>
            </div>
        </div>

    )
}