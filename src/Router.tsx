import { Route, Routes } from "react-router-dom";
import { Programacao } from "./pages/Programacao";
import { SobreNos } from "./pages/SobreNos";
import { Home } from "./pages/Home";

export function Router(){
    return(
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/home" element={<Home />} />
        <Route index path="/programacao" element={<Programacao />} />
        <Route index path="/sobre" element={<SobreNos />} />
    </Routes>
    )
}