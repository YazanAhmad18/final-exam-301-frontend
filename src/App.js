import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import  Header  from './components /Header';
import Main from './components /Main';
import FavDrinks from './components /FavDrinks';

export class App extends Component {
  render() {
    return (
      <>
      <Header/>

      <BrowserRouter>
          <Switch>
            <Route exact path="/">
                <Main/>

            </Route>
            <Route exact path="/favorite">

              <FavDrinks/>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App

