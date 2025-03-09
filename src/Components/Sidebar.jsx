import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../index.css"; // Asegúrate de tener este archivo con los estilos

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column p-3">
      <NavLink to="/" className="d-flex align-items-center mb-3 text-white text-decoration-none">
        <span className="fs-4">Análisis de algoritmos</span>
      </NavLink>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            <i className="bi bi-house-door me-2"></i>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
