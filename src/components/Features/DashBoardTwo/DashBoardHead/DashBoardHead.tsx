import { Button } from 'flowbite-react'
import { ArrowRight, Search } from 'lucide-react'
import { BarChart, PieChart } from '@mui/x-charts'


export default function () {
    return (
        <div className='flex flex-col gap-6'>
            <div className="title flex flex-col xl:flex-row justify-evenly items-center gap-3 lg:gap-0 ">
                <h1 className='text-4xl lg:text-6xl font-bold font-inter'>DashBoardTwo</h1>
                <div className="input w-full xl:w-1/2 p-3 rounded-lg flex gap-1 border border-slate-100 placeholder:text-slate-100">
                    <span>
                        <Search />
                    </span>
                    <input className='focus:outline-0' placeholder='SEARCH SOMETHING ..' />
                </div>
            </div>
            <div className="cards flex flex-col xl:flex-row justify-between gap-4">
                <FirstCard />
                <SecondCard />
            </div>
        </div>
    )
}

function FirstCard() {
    return (
        <div className="headCard bg-black rounded-lg p-5 flex justify-between items-center gap-2 lg:gap-0">
            <div className="col flex flex-col gap-4 max-w-1/2">
                <div className="texts space-y-4">
                    <h2 className='text-3xl text-white font-bold font-inter '>
                        Week`s Data
                        <span className='text-orange-400'>Statistic</span>
                    </h2>
                    <p className='text-slate-100 text-lg   '>
                        Lorem ipsum dolor sit amet 
                         consectetur adipisicing elit.
                    </p>
                </div>
                <div className="btn">
                    <Button className='bg-white text-black hover:bg-orange-600 hover:text-white'>Learn More <ArrowRight /></Button>
                </div>
            </div>
            <div className="col flex flex-col gap-4 justify-center items-center min-h-full max-w-1/2  ">
                <div className="chart relative ">
                    <PieChart
                        series={[{ data: [{ value: 85 }, { value: 15 }] }]}
                        width={130}
                        height={130}
                        colors={['orange', 'orangered']}
                    />
                    <div className="circle w-20 h-20 bg-white rounded-full absolute top-1/2 left-1/2 -translate-1/2 flex items-center justify-center">
                        <p className='text-3xl font-bold'>85%</p>
                    </div>
                </div>
                <p className='text-slate-400 font-bold capitalize'>This Week`s Goal</p>
            </div>

        </div>
    )
}

function SecondCard() {
    return (
        <div className="headCard bg-orange-500 p-3 rounded-lg">
            <div className="head flex justify-between gap-8 items-center ">
                <h2 className='text-3xl text-white font-bold font-inter'>Chart Value</h2>
                <p className='text-slate-100 '>Learn More</p>
            </div>
            <div className="content w-full">              

                <BarChart
                    xAxis={[
                        {
                            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            scaleType: 'band',
                            tickPlacement: 'middle',
                            categoryGapRatio:.3
                        },
                    ]}
                    series={[
                        {
                            data: [95, 75, 70, 70, 45, 50, 75],
                            label: 'Daily Values',
                        },
                    ]}
                    height={200}
                    width={400}
                    colors={['white']}
                />

            </div>
        </div>
    )
}
