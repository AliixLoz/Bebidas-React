import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import { Categories, Drink, Recipe, Recipes, SearchFilters } from "../types"

export type RecipesSliceType = {
    categories: Categories
    recipes: Recipes
    selectedRecipe: Recipe
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters : SearchFilters) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    recipes: {
        drinks: []
    },
    selectedRecipe:{} as Recipe,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
        const recipes = await getRecipes(filters)
        set({
            recipes
        })
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe
        })
    }
})