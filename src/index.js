import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import CadastroVideo from './pages/cadastro/video'
import Home from './pages/Home';

const Página404 = () => (<div><h1>Erro 404</h1><Link to='/'>'Home'</Link></div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/Cadastro/video' component={CadastroVideo} />
      <Route path='/' component={Home} exact />
      <Route component={Página404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
