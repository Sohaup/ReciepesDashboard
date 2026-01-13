import { useDispatch, useSelector } from "react-redux"
import type { dispatchType, storeType } from "../../../../store/store"
import { getRecipes } from "../../../../store/recipeSlice/RecipeSlice";
import { useEffect } from "react";
import hocLoader from "../../../Ui/HOCLoader/HocLoader";
import type { recipeType } from "../../../../types/recipeTypes";
import FoodCard from "../../../Ui/FoodCard/FoodCard";

const MainPopulerContentAsync = hocLoader(DashBoardPopulerPrepective); 

export default function DashBaordPopuler() {
    const recipeState = useSelector((store: storeType) => store.recipeSlice);
    const dispatch = useDispatch<dispatchType>();
    useEffect(() => {
        dispatch(getRecipes("burger"));

    } , []); 

   return (
     <MainPopulerContentAsync loading={recipeState.isLoading} error={recipeState.isError} recipes={recipeState.recipes}/>
   )
}

function DashBoardPopulerPrepective({recipes }:{recipes?:recipeType[]}) {
    useEffect(()=>{
        console.log(recipes);
    }, [])
    return (
        <section>
            <div className="title my-4 ">
                <h2 className='font-inter text-4xl font-bold'>Our Populer Products</h2>
            </div>
            <div className="content grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {recipes?.map((recipe , index)=> <FoodCard key={recipe.id} img={recipe.image_url} rate={Math.round(Math.abs(( index - 10 )/3))} index={index+1} title={recipe.title} texts={recipe.publisher}/>)}
            </div>
        </section>
    )
}
