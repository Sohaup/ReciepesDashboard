import { categories } from '../../DashBoardCategory/DashBoardCategory'


export default function SoldOutSection() {
    return (
        <div className='bg-stone-800 rounded-lg text-white w-[85%] mx-auto p-2 flex flex-col justify-center items-center gap-3'>
            <div className="title">
                <h6 className='font-inter text-3xl text-white '>Sold Out</h6>
            </div>
            <div className="soldOut-cards grid grid-cols-2 gap-3">
                {categories.map((category , index)=> <SoldOutCard key={category.src} img={category.src} title={category.title} price={(index + 10) - 2}/>)}
            </div>
        </div>
    )
}

function SoldOutCard({ img, title, price }: { img: string, title: string, price: number }) {
    return (
        <div className="soldOutCard bg-stone-900 rounded-lg flex flex-col items-center justify-center p-3">
            <img src={img} className='w-8 h-8 ' />
            <h6 className='text-amber-400 font-bold text-xl  '>{title}</h6>
            <p>{price}</p>
        </div>
    )
}
