import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainPage extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Главная страница</h1>
                <p>Идея <strong>Родовых поместий</strong> изложена в книгах Владимира Мегре серии "Звенящие кедры России". Родовое поместье - это участок земли размером не менее 1 гектара, на котором семья создаёт и совершетствует среду обитания для себя и своего рода.</p>
                <p>Множество <Link to="/villages">Поселений</Link>, состоящих из Родовых поместий, существуют уже сейчас.</p>
                <p>В родовых поместьях живут прекрасные <Link to="/people">Люди...</Link></p>
                <p>Эти люди выращивают экологически чистые продукты, мастерят красивые изделия, производят прочую <Link to="/products">Продукцию</Link>.</p>
            </React.Fragment>
        );
    }
}

export default MainPage;