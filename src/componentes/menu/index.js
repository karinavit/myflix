import React from 'react';
import devflix from '../../assets/img/devflix.png';
import './menu.css';
import Button from '../Button'
//import ButtonLink from '../componentes/buttonLink';

function Menu(){  
  return(
    <nav className="Menu">
      <a href="/">
      <img className="Logo" src={devflix} alt="devFlix logo" />
      </a>

      <Button as="a" className="ButtonLink"  href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
};

export default Menu;

//todo componente começa com letra maiúscula.