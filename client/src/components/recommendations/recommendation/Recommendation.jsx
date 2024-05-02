import React from 'react';
import './Recommendation.css'
import {NavLink} from "react-router-dom";

const Recommendation = ({imgUrl, author, book, text, price}) => {
    return (
        <div className="recommendation__wrapper">
            <div className="recommendation__flip__card__container">
                <div className="recommendation__flip__card">
                    <video autoPlay muted loop poster="../assets/poster/poster_eguene_onegin.jpg" className="recommendation__back__side__cmyVideo">
                        <source src={require("../../../assets/video/eguene_onegin_60s_logo.mp4")} type="video/mp4"/>
                    </video>
                </div>
            </div>

            <p className="recommendation__book">"{book}"</p>
            <NavLink to="/registration"><button className="recommendation__button-hover recommendation__button-color-7">Купить</button></NavLink>
        </div>
    );
};

export default Recommendation;