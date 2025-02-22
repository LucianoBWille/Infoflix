/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line object-curly-newline
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';

const Pagina404 = () => (
  <div>
    <h1>Erro 404</h1>
    <Link to="/">'Home'</Link>
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Cadastro/video" component={CadastroVideo} />
      <Route path="/Cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
