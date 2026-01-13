import burgerImg from '../../../../assets/dashboardTwo/burger.png'
import steakImg from '../../../../assets/dashboardTwo/steak.png'
import chickenImg from '../../../../assets/dashboardTwo/chicken.png'
import juiceImg from '../../../../assets/dashboardTwo/juice.png'
import CategoryCard from '../../../Ui/categoryCard/CategoryCard'

export const categories = [
    { title: "Burger", src: burgerImg },
    { title: "steak", src: steakImg },
    { title: "chicken", src: chickenImg },
    { title: "juice", src: juiceImg }
]

export default function DashBoardCategory() {

    return (
        <div className='my-4 space-y-5'>
            <h2 className='text-2xl font-semibold font-inter '>Categories</h2>
            <div className="content flex  justify-evenly gap-1 md:gap-0">
                {categories.map((category => <CategoryCard src={category.src} title={category.title} />))}
            </div>
        </div>
    )
}
