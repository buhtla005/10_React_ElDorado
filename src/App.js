import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/single-room/SingleRoom'
import ErrorPage from './pages/Error'

import './App.css'


function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
