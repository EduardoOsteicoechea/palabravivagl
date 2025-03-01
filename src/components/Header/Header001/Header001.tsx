import React from 'react';
import { Link } from 'react-router-dom';

const Component: React.FC = () =>
{
   return (
      <div className="Header001-OuterContainer">
        <Link to="/">inicio</Link>
        <Link to="/creencias">creencias</Link>
        <Link to="/iglesias">iglesias</Link>
        <Link to="/liderazgo">liderazgo</Link>
        <Link to="/historia">historia</Link>
        <Link to="/proyectos">proyectos</Link>
        <Link to="/recursos">recursos</Link>
        <Link to="/contacto">contacto</Link>
      </div>
    );
}

export default Component;