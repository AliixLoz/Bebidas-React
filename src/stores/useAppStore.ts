import { create } from "zustand";
import { createRecipesSlice, RecipesSlicesType } from "./recipeSlice";

export const useAppStore = create<RecipesSlicesType>((...a) => ({
    ...createRecipesSlice(...a)
}))