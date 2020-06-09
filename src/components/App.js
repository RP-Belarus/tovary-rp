import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import MainPage from "../pages/Main";
import AuthPage from '../pages/Auth';
import VillagesPage from "../pages/Villages";
import PeoplePage from "../pages/People";
import ProductsPage from "../pages/Products";
import MainNavigation from "./Navigation/MainNavigation";

import './App.css';

class App extends Component{
    render(){
        return (
            <BrowserRouter>
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
                        </Switch>
                    </main>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

export default App;
