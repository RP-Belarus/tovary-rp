import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainNavigation.css';

const mainNavigation = props => (
    <header className="main-navigation">
        <div className="main-navigation__logo">
            <h1>Товары РП</h1>
        </div>
        <nav className="main-navigation__items">
            <ul>
                <li><NavLink to="/main">Главная</NavLink></li>
                <li><NavLink to="/villages">Поселения РП</NavLink></li>
                <li><NavLink to="/people">Люди</NavLink></li>
                <li><NavLink to="/products">Товары</NavLink></li>
                <li><NavLink to="/auth">Вход / Регистрация</NavLink></li>
                <li><NavLink to="/basket">Корзина</NavLink></li>
            </ul>
        </nav>
    </header>
);

export default mainNavigation;