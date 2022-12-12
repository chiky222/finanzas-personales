import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="menu-nav">
      <ul className="menu-nav-lista">
        <li className="menu-item"><NavLink className="links" to="/">TABLA RESÚMEN</NavLink></li>
        <li className="menu-item"><NavLink className="links" to="/tablaConceptos/ingresoPrincipal">INGRESO PRINCIPAL</NavLink></li>
        <li className="menu-item"><NavLink className="links" to="/tablaConceptos/otrosIngresos"> OTROS INGRESOS</NavLink></li>
        <li className="menu-item"><NavLink className="links" to="/tablaConceptos/gastosFijos">GASTOS FIJOS</NavLink></li>
        <li className="menu-item"><NavLink className="links" to="/tablaConceptos/gastosPersonales">GASTOS PERSONALES</NavLink></li>
        <li className="menu-item"><NavLink className="links" to="/tablaConceptos/ahorroInversion">AHORRO / INVERSIÓN</NavLink></li>
      </ul>
    </nav>
  )
};

export default NavBar;