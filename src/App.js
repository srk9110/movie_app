import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from './routes/home';
import Detail from './routes/detail';
import Navigation from './components/navigation';

function App(){
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/movie/:id" component={Detail}/>
    </HashRouter>
  );
}

export default App;