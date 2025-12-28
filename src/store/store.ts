import {configureStore} from '@reduxjs/toolkit'
import recipeSlice from './recipeSlice/RecipeSlice'

export const store = configureStore({
    reducer: {
        recipeSlice
    } 
});

export type storeType = ReturnType<typeof store.getState>;
export type dispatchType = typeof store.dispatch;

