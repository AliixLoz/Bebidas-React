import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === '/', [pathname]);

  const [searchFilters, setSearchFilters] = useState({
    ingredient: '',
    category: ''
  });

  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const categories = useAppStore((state) => state.categories);
  const searchRecipes = useAppStore((state) => state.searchRecipes);
  const showNotification = useAppStore((state) => state.showNotification); // Obtiene la función para mostrar notificaciones

  useEffect(() => {
    fetchCategories();
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (Object.values(searchFilters).some(value => value === '')) {
      showNotification({
        text: "Falta llenar un campo de busqueda",
        error: true,
      })
      return
    }

    searchRecipes(searchFilters);
    showNotification({
      text: "Ya puedes visualizar la busqueda",
      error: false,
    })
  }

  return (
    <header className={isHome ? 'bg-header bg-cover' : 'bg-black'}>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="logotipo" />
          </div>

          <nav className="flex gap-4">
            <NavLink
              className={({ isActive }) => isActive ? 'text-blue-400 uppercase font-bold' : 'text-white uppercase font-bold'}
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive ? 'text-pink-500 uppercase font-bold' : 'text-white uppercase font-bold'}
              to={"favoritos"}
            >
              Favoritos
            </NavLink>
          </nav>
        </div>

        {isHome && (
          <form onSubmit={handleSubmit} className="md:w-1/2 2xl:w-1/3 bg-pink-600 my-32 p-10 rounded-lg shadow space-y-6">
            <div className="space-y-4">
              <label htmlFor="ingredient" className="block text-black uppercase font-extrabold text-lg">
                Nombre o Ingredientes
              </label>
              <input
                id='ingredient'
                type="text"
                name="ingredient"
                onChange={handleChange}
                value={searchFilters.ingredient}
                className="p-3 w-full rounded-lg focus:outline-none"
                placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila Café"
              />
            </div>

            <div className="space-y-4">
              <label htmlFor="category" className="block text-black uppercase font-extrabold text-lg">
                Categoría
              </label>
              <select
                id='category'
                onChange={handleChange}
                value={searchFilters.category}
                name="category"
                className="p-3 w-full rounded-lg focus:outline-none"
              >
                <option value="">--Seleccione--</option>
                {categories.drinks.map(category => (
                  <option key={category.strCategory} value={category.strCategory}>
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="submit"
              className="cursor-pointer bg-blue-100 hover:bg-blue-300 text-black font-extrabold w-17 p-2 rounded-lg uppercase"
              value="Buscar Recetas"
            />
          </form>
        )}
      </div>
    </header>
  );
}
