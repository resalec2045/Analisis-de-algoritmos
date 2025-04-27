import { Route, Routes } from "react-router-dom";
import DashboardAbstract from "../dashboardAbstract";
import Dashboard from "../dashboard";
import Seguimiento from "../seguimiento";
import Requerimiento2 from "../requerimiento2";
import Requerimiento3 from "../requerimiento3";
import Requerimiento5 from "../requerimiento5";
import Home from "../home";
import Requerimiento3_1 from "../requerimiento3.1";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboardAbstract" element={<DashboardAbstract />} />
                <Route path="/seguimiento" element={<Seguimiento />} />
                <Route path="/requerimiento2" element={<Requerimiento2 />} />
                <Route path="/requerimiento3" element={<Requerimiento3 />} />
                <Route path="/Requerimiento3_1" element={<Requerimiento3_1 />} />
                <Route path="/requerimiento5" element={<Requerimiento5 />} />
            </Routes>
        </>
    );
};
