import React from 'react';
import './Subscription.css'
import {NavLink} from "react-router-dom";

const Mail = () => {
    return (
        <div className="subscription__wrapper">
            <h2 className="subscription__title">Узнайте об акциях и новинках первыми!</h2>
            <div className="subscription__wrapper__paragraph">
                <p className="subscription__paragraph">Один раз в месяц мы будем присылать вам информацию о</p>
                <p className="subscription__paragraph">наших последних обновлениях, скидках и акциях.</p>
                <p className="subscription__paragraph">Не пропустите!</p>
            </div>
            <div className="subscription__button">
                <NavLink to="/registration">
                    <button className="subscription__button-hover subscription__button-color-7">Подписаться</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Mail;