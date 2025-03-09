import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard";
import Home from "../home";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </>
    );
};
