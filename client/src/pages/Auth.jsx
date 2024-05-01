import React from 'react';
import "./Auth.css"
import {NavLink, useLocation} from "react-router-dom";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === "/login"
    return (
        <div className="auth__login__page">
            <div className="auth__background__wrapper">
                <img className="auth__background__image" src={require("../assets/background/auth_background.png")} alt="books"/>
            </div>
            <video autoPlay muted loop poster="../assets/poster/poster_eguene_onegin.jpg" className="myVideo">
                <source src={require("../assets/video/eguene_onegin_60s_logo.mp4")} type="video/mp4"/>
            </video>
            <div className="auth__form">
                {!isLogin && <form className="auth__register__form">
                    <input className="auth__register__form__input" type="text" placeholder="имя"/>
                    <input className="auth__register__form__input" type="text" placeholder="email"/>
                    <input className="auth__register__form__input" type="password" placeholder="пароль"/>
                    <div className="auth__button">
                        <button
                            className="auth__register__form__button-hover auth__register__form__button-color-7">Создать
                        </button>
                    </div>
                    <p className="auth__registration__message">Уже зарегистрированы? <NavLink
                        to="/login">Войти</NavLink></p>
                </form>}
                {isLogin && <form className="auth__login__form">
                    <input className="auth__register__form__input" type="text" placeholder="имя"/>
                    <input className="auth__register__form__input" type="password" placeholder="пароль"/>
                    <div className="auth__button">
                        <button
                            className="auth__register__form__button-hover auth__register__form__button-color-7">Войти
                        </button>
                    </div>
                    <p className="auth__registration__message">Не зарегистрированы? <NavLink to="/registration">Создать
                        аккаунт</NavLink></p>
                </form>}
            </div>
        </div>
    );
};

export default Auth;