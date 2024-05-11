import React, {useContext, useState} from 'react';
import "./Auth.css"
import {NavLink, useLocation} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {login, registration} from "../../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === "/login"
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const reg = async (e) => {
        try {
            e.preventDefault()
            let data = await registration(email, password)
            user.setUser(user)
            user.setIsAuth(true)
            navigate("/shop")
        } catch(e) {
            alert(e.response.data.message)
        }
    }

    const log = async (e) => {
        try {
            e.preventDefault()
            let data = await login(email, password)
            user.setUser(user)
            user.setIsAuth(true)
            navigate("/shop")
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className="auth__login__page">
            <div className="auth__background__wrapper">
                <img className="auth__background__image" src={require("../../assets/background/auth_background.png")} alt="books"/>
            </div>
            <div className="auth__form">
                {!isLogin && <form className="auth__register__form">
                    <input
                        className="auth__register__form__input"
                        type="text"
                        placeholder="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        className="auth__register__form__input"
                        type="password"
                        placeholder="пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className="auth__button">
                        <button
                            className="auth__register__form__button-hover auth__register__form__button-color-7"
                            onClick={reg}
                        >Создать
                        </button>
                    </div>
                    <p className="auth__registration__message">Уже зарегистрированы? <NavLink
                        to="/login">Войти</NavLink></p>
                </form>}
                {isLogin && <form className="auth__login__form">
                    <input
                        className="auth__register__form__input"
                        type="text"
                        placeholder="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        className="auth__register__form__input"
                        type="password"
                        placeholder="пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className="auth__button">
                        <button
                            className="auth__register__form__button-hover auth__register__form__button-color-7"
                            onClick={log}
                        >Войти
                        </button>
                    </div>
                    <p className="auth__registration__message">Не зарегистрированы? <NavLink to="/registration">Создать
                        аккаунт</NavLink></p>
                </form>}
            </div>
        </div>
    );
});

export default Auth;