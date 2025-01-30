import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import FavoritosPages from "./views/FavoritosPages"

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage/>} />
                <Route path="favoritos" element={<FavoritosPages/>} />
            </Routes>
        </BrowserRouter>
    )
}
