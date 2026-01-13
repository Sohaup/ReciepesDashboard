import { Button } from 'flowbite-react'
import { ArrowRight, Star } from 'lucide-react'


export default function FoodCard({ img, title, texts, rate, index }: { img: string, title: string, texts: string, rate: number, index: number }) {
    return (
        <div className="cardPopuler  border border-stone-500 rounded-lg p-3">
            <div className="img relative rounded-lg">
                <img src={img}  className='rounded-lg w-full h-100  object-cover'/>
                <div className="wrapper absolute inset-0 ">
                    <div className="badge bg-yellow-300 flex justify-center items-center rounded-tl-lg rounded-br-lg absolute left-0 top-0 p-5 ">
                        {index}
                    </div>
                    <div className="rate bg-white p-5 rounded-lg absolute right-0 bottom-5 flex gap-2 justify-center items-center">
                        <Star />
                        <span>
                            {rate}
                        </span>
                    </div>
                </div>
            </div>
            <div className="content flex justify-between  w-full ">
                <div className="texts w-3/4">
                    <h3>{title}</h3>
                    <p>{texts}</p>
                </div>
                <div className="btn w-1/4 flex h-20 items-center justify-center">
                    <Button className='bg-orange-500 hover:bg-orange-600'>
                        <ArrowRight/>
                    </Button>
                </div>
            </div>

        </div>
    )
}
