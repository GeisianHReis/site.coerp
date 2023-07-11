import { Navigate, Route, Routes } from "react-router-dom";
import { Programacao } from "./pages/Programacao";
import { SobreNos } from "./pages/SobreNos";
import { Home } from "./pages/Home";
import { Cultos } from "./pages/Cultos";
import { Ministerios } from "./pages/Ministerios";
import { Selecione } from "./pages/Selecione";

export function Router(){
    return(
    <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route index path="/selecione" element={<Selecione />} />

        <Route index path="/home" element={<Home />} />
        <Route index path="/programacao" element={<Programacao />} />
        <Route index path="/cultos" element={<Cultos />} />
        <Route index path="/sobre" element={<SobreNos />} />
        <Route index path="/ministerios" element={<Ministerios />} />
    </Routes>
    )
}