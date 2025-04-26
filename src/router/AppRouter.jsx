import { Route, Routes } from "react-router-dom";
import DashboardAbstract from "../dashboardAbstract";
import Dashboard from "../dashboard";
import Seguimiento from "../seguimiento";
import Home from "../home";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboardAbstract" element={<DashboardAbstract />} />
                <Route path="/seguimiento" element={<Seguimiento />} />
            </Routes>
        </>
    );
};
