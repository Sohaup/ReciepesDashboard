import DashBoardCategory from "../../components/Features/DashBoardTwo/DashBoardCategory/DashBoardCategory";
import DashBoardHead from "../../components/Features/DashBoardTwo/DashBoardHead/DashBoardHead";
import DashBaordPopuler from "../../components/Features/DashBoardTwo/DashBoardPopulerSection/DashBaordPopuler";
import SideCard from "../../components/Features/DashBoardTwo/DashboardSide/SideCard/SideCard";
import SideHead from "../../components/Features/DashBoardTwo/DashboardSide/SideHead/SideHead";
import SideOrder from "../../components/Features/DashBoardTwo/DashboardSide/SideOrders/SideOrder";
import SoldOutSection from "../../components/Features/DashBoardTwo/DashboardSide/SideSoldOut/SoldOutSection";



export default function DashboardTwo() {
    return (
        <section className="flex flex-col-reverse 2xl:flex-row justify-between w-full lg:w-[80%] xl:w-full ms-auto h-full bg-white ">
            <div className="cont p-3 flex flex-row justify-between gap-3 w-full h-full">
                <div className="content bg-white min-w-3/4">
                    <DashBoardHead />
                    <DashBoardCategory />
                    <DashBaordPopuler />


                </div>

            </div>
            <div className="side-content h-full bg-black min-w-1/4 rounded-xl space-y-5 ">
                <SideHead/>
                <SideCard/>
                <SoldOutSection/>
                <SideOrder/>
            </div>
        </section>
    )
}
