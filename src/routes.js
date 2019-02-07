import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './views/home';
import Items from './views/items';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/items' component={Items} />
      </Switch>
    </BrowserRouter>
  )
}