import axios from 'axios'
import type { recipeType } from '../types/recipeTypes';

export async function getMealRecipes(meal:string , apiKey:string) : Promise<recipeType[]> {
    const res = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${meal}&key=${apiKey}`);
    const data = await res.data; 
    return data.data.recipes;
}