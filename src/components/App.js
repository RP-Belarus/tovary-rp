import React, { Component } from 'react';
//import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import MainNavigation from "./Navigation/MainNavigation";
import MainPage from "../pages/Main";
import AuthPage from '../pages/Auth';
import VillagesPage from "../pages/Villages";
import PeoplePage from "../pages/People";
import ProductsPage from "../pages/Products";
import BasketPage from "../pages/Basket";

import './App.css';

class App extends Component{
    render(){
        return (
            //<BrowserRouter>
            <HashRouter>
                <React.Fragment>
                    <MainNavigation/>
                    <main className="main-content">
                        <Switch>
                            <Redirect from="/" to="/main" exact />
                            <Route path="/main" component={MainPage} />
                            <Route path="/auth" component={AuthPage} />
                            <Route path="/villages" component={VillagesPage} />
                            <Route path="/people" component={PeoplePage} />
                            <Route path="/products" component={ProductsPage} />
                            <Route path="/basket" component={BasketPage} />
                        </Switch>
                    </main>
                </React.Fragment>
            </HashRouter>
            //</BrowserRouter>
        );
    }
}

export default App;
