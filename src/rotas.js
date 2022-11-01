import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Header from "./Components/Header";

export default function Rotas() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} /> -
                <Route path="sobre" element={<Sobre />} />
            </Routes>
        </BrowserRouter>
    );
};
