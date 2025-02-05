import { StateCreator } from "zustand"

type Category = {}

export type RecipesSlicesType = {
    categories: Category[]

}

export const createRecipesSlice : StateCreator<RecipesSlicesType> = () => ({
    categories: []
})