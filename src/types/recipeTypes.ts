export type recipeType = {
    id:string ,
    publisher:string ,
    image_url:string ,
    title:string
}

export type recipeSliceStateType = {
    isLoading:boolean ,
    isError:boolean ,
    recipes:recipeType[] | any ,
    apiKey:string
}