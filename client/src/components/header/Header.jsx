import React, {useContext} from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Header = observer(() => {
    const {user} = useContext(Context)
    return (
        <header className="header__container" id="header">
            <div className="header__background__wrapper">
                <img className="header__background__image" src={require("../../assets/background/books.jpg")} alt="books"/>
            </div>
            <div className="header__navbar__wrapper">
                <div className="header__logo__wrapper">
                    <NavLink to="/shop" className="header__vbook">
                        <a>
                            <img className="header__vbook__image" src={require("../../assets/logo/vbook.png")} alt="vbook"/>
                        </a>
                    </NavLink>
                    <navbar className="header__navbar">
                        <a className="header__navbar__link" href="#header">Главная</a>
                        <a className="header__navbar__link" href="#genres">Каталог</a>
                        <a className="header__navbar__link" href="#description">О проекте</a>
                        <a className="header__navbar__link" href="#contacts">Контакты</a>
                    </navbar>
                </div>
                <div className="header__text">
                    <h1 className="header__text-title">VBOOK</h1>
                    <p className="header__text-paragraph">Смотри книги в любое время в любом месте!</p>
                    <NavLink to="/registration">
                        <button className="header__button-hover header__button-color-7" onClick={() => user.setIsAuth(true)}>Зарегистрироваться</button>
                    </NavLink>
                </div>
            </div>
        </header>
    );
});

export default Header;