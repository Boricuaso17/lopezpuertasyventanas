import React from 'react';

export const Header = () => {
  return (
    <div>
      <div id="header">
        <a id="logoLink" href="./index.html">
          <img id="logoLink" src="./images/logo.jpeg" alt="logo" draggable="false" />
        </a>
      </div>

      <div id="menu">
        <ul id="menuItems">
          <li>
            <a className="menuLinks" href="./index.html">INICIO</a>
          </li>
          <li>
            <a className="menuLinks" href="./sobreNosotros.html">SOBRE NOSOTROS</a>
          </li>
          <li>
            <a className="menuLinks" href="./puertas.html">PRODUCTOS Y SERVICIOS</a>
          </li>
          <li>
            <a className="menuLinks" href="./ventanas.html">GALERÍA</a>
          </li>
          <li>
            <a className="menuLinks" href="./cotizaciones.html">SOLICITUD DE COTIZACIÓN</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
