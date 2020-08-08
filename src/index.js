import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import CadastroVideo from './pages/cadastro/video'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/Cadastro/video' component={CadastroVideo} />
      <Route path='/' component={App} exact />
      <Route component={() => (<div><h1>Erro 404</h1><a href='/'>Home</a></div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
