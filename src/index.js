import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/home'; 

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro';
import CadastroCategoria from './pages/cadastro/categoria'; 





ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route path="/" component={() => (<div>Página 404</div>)}  /> 
    </Switch>
  </BrowserRouter>,

document.getElementById('root')
);

  /* <React.StrictMode>
    <App />
  </React.StrictMode>, */
  // as vezes no React você só quer fazer um teste e essa forma de sintaxe vai te ajudar de forma fácil e tals a forma idel seria colocar isso numa const, assim: const Pagina404 = () => (<div>Página 404</div>)

