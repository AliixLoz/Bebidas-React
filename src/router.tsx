import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import FavoritosPages from "./views/FavoritosPages"
import Layout from "./layouts/Layout"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<IndexPage />} />
                    <Route path="favoritos" element={<FavoritosPages />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
