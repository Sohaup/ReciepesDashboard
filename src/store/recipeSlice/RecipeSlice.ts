import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import { getMealRecipes } from '../../api/recipeApi';
import type { recipeSliceStateType, recipeType } from '../../types/recipeTypes';

export const getRecipes = createAsyncThunk('recipes/get' , async (meal:string )=> {getMealRecipes(meal , initialState.apiKey )});
const initialState:recipeSliceStateType = {
    recipes:[] ,
    isLoading:false ,
    isError:false ,
    apiKey:"b9654564-e0ed-4597-b6d1-9fafc69be32f"
}
const recipeSlice = createSlice({
    name:"recipe slice" ,
    initialState ,
    reducers:{

    } ,
    extraReducers:async function (builder) {
        builder.addCase(getRecipes.pending , (prevState)=> {
            prevState.isLoading = true;
            prevState.isError = false;
        });
        builder.addCase(getRecipes.rejected , (prevState)=>{
            prevState.isError = true;
            prevState.isLoading = false;
        });
        builder.addCase(getRecipes.fulfilled , (prevState , action)=> {
            prevState.isLoading = false;
            prevState.isError = false;
            prevState.recipes =  action.payload;
        })
    }
});

export default recipeSlice.reducer;