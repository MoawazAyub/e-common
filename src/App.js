import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header.component.jsx';
import ShopPageSignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/signin' component={ShopPageSignInAndSignUpPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
