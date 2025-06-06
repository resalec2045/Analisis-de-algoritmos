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
        <li>
          <NavLink to="/dashboardAbstract" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard Abstract
          </NavLink>
        </li>
        <li>
          <NavLink to="/requerimiento2" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            <i className="bi bi-speedometer2 me-2"></i>
            Requerimiento 2
          </NavLink>
        </li>
        <li>
          <NavLink to="/requerimiento3" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            <i className="bi bi-speedometer2 me-2"></i>
            Requerimiento 3
          </NavLink>
        </li>
        <li>
          <NavLink to="/Requerimiento3_1" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            <i className="bi bi-speedometer2 me-2"></i>
            Requerimiento 3 (Graficas)
          </NavLink>
        </li>
        <li>
          <NavLink to="/requerimiento5" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            <i className="bi bi-speedometer2 me-2"></i>
            Requerimiento 5
          </NavLink>
        </li>
        <li>
          <NavLink to="/seguimiento" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            <i className="bi bi-speedometer2 me-2"></i>
            Seguimiento 2
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
