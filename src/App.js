import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Add from './components/Add';
import data from './Data/Room';
import Update from './components/Update';




export default class App extends Component {
  constructor(){
    super();

    if(localStorage.getItem('rooms')==null){
      localStorage.setItem('rooms',JSON.stringify(data));
     
    }
    
  }
  render(){
  return (
      <BrowserRouter>
         <Header/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path='/add' component={Add} />
            <Route path='/update/:id' component={Update} />

            
          </Switch>
      </BrowserRouter>
      );
}}

