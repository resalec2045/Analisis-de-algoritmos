import React from "react";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import "./index.css"; // Asegúrate de importar los estilos

function App() {
  return (
    <BrowserRouter basename="/">
      {/* Aplicamos la clase "dark-mode" en toda la app */}
      <div className="dark-mode min-h-screen flex main-content flex-grow-1">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
