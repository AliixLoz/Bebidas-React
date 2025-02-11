import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"

export default function IndexPage() {

  const recipes = useAppStore(state => state.recipes)

  const hasRecipes = useMemo(() => recipes.drinks.length > 0, [recipes])

  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1>
      {
        hasRecipes ? (
          <div className="grid grid-cols-1 md:grid-cols-5 2xl:grid-cols-5 my-10 gap-10">
            {
              recipes.drinks.map(drink => (
                <DrinkCard
                  key={drink.idDrink}
                  drink={drink}
                />
              ))
            }
          </div>
        ) : (
          <p className="my-10 text-center text-2xl">No hay recetas todavía, busca con el formulario</p>
        )
      }
    </>
  )
}