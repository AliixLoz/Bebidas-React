import { useAppStore } from "../stores/useAppStore"
import { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink}: DrinkCardProps){

    const selectRecipe = useAppStore(state => state.selectRecipe)


    return(
        <div className="border shadow-lg">
        <div className="overflow-hidden">
            <img 
            src={drink.strDrinkThumb} 
            alt={'Imagen de ' + drink.strDrink}
            className="hover:scale-135 transition-transform hover:rotate-2"
             />
        </div>
        <div className="p-4">
            <h2 className="text-2xl truncate font-black">
                {drink.strDrink}
            </h2>
            <button
                type="button"
                onClick={() => selectRecipe(drink.idDrink)}
                className="bg-pink-300 hover:bg-pink-600 mt-5 w-full p-3 font-bold text-black text-lg"
                >Ver Receta</button>
        </div>
    </div>
    )
}