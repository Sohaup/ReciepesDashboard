import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { dispatchType, storeType } from '../../../../../store/store'
import { getRecipes } from '../../../../../store/recipeSlice/RecipeSlice';
import type { recipeType } from '../../../../../types/recipeTypes';
import hocLoader from '../../../../Ui/HOCLoader/HocLoader';

const AsyncSideOrderPresPictive = hocLoader(SideOrderPrespictive);

export default function SideOrder() {
    const recipesState = useSelector((store: storeType) => store.recipeSlice);
    const dispatch = useDispatch<dispatchType>();
    useEffect(() => {
        dispatch(getRecipes("burger"));
    }, []);
    return (
        <AsyncSideOrderPresPictive loading={recipesState.isLoading} error={recipesState.isError} recipes={recipesState.recipes} />
    )
}

function SideOrderPrespictive({ recipes }: { recipes?: recipeType[] }) {
    return (
        <section className='flex flex-col justify-center items-center'>
            <div className="title flex justify-evenly  items-center text-white gap-5 w-[90%] mx-auto">
                <h3 className='font-inter  text-2xl'>Orders History</h3>
                <p className='text-sm font-semibold text-stone-400'>view more</p>
            </div>
            <div className="main flex flex-col gap-5 w-[90%] mx-auto my-5">
                {recipes?.map((recipe, index) => <OrderCard key={recipe.id} title={recipe.title} text={recipe.publisher} src={recipe.image_url} price={(index + 5)} />)}
            </div>

        </section>
    )
}

function OrderCard({ title, text, src, price }: { title: string, text: string, price: number, src: string }) {
    return (
        <div className="orderCard border border-stone-700 text-white hover:bg-amber-400 hover:text-black transition-colors duration-300 group rounded-lg flex gap-5 justify-between  items-center px-3 py-6">
            <div className="img rounded-lg bg-white group-hover:bg-black transition-colors duration-300 flex justify-center items-center w-fit h-fit p-2">
                <img src={src} className='w-8 h-8 ' />
            </div>

            <div className="texts flex flex-col gap-1 justify-start w-1/2">
                <h4 className='font-inter font-bold text-lg'>{title}</h4>
                <p className='group-hover:text-gray-800 text-gray-200 transition-colors duration-300 '>{text}</p>
            </div>
 


            <div className="price border border-gray-800 group-hover:bg-amber-300 rounded-lg p-3 transition-colors duration-300 ">
                <p>${price}</p>
            </div>

        </div>
    )
}
