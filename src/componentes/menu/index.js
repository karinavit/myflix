import React from 'react';
import { Link } from 'react-router-dom'
import devflix from '../../assets/img/devflix.png';
import './menu.css';
import Button from '../Button'
//import ButtonLink from '../componentes/buttonLink';

function Menu(){  
  return(
    <nav className="Menu">
      <Link href="/">
      <img className="Logo" src={devflix} alt="devFlix logo" />
      </Link>

      <Button as={Link} className="ButtonLink"  to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
};

export default Menu;

//todo componente começa com letra maiúscula.