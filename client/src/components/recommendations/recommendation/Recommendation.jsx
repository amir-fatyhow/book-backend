import React from 'react';
import './Recommendation.css'
import {NavLink} from "react-router-dom";

const Recommendation = ({imgUrl, author, book, text, price}) => {
    return (
        <div className="recommendation__wrapper">
            <div className="recommendation__flip__card__container">
                <div className="recommendation__flip__card">
                    <div className="recommendation__card__front">
                        <div className="recommendation__card__front__wrapper">
                            <img
                                className="recommendation__card__front__image"
                                src={require(`../../../assets/books/${imgUrl}.jpg`)}
                                alt={book}/>
                        </div>
                    </div>
                    <div className="recommendation__card__back">
                        <div className="recommendation__back__side__content">
                            <p className="recommendation__back__side__text">{text}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="recommendation__author">{author}</p>
            <p className="recommendation__book">"{book}"</p>
            <p className="recommendation__price">{price} &#x20bd;</p>
            <NavLink to="/shop"><button className="recommendation__button">Купить</button></NavLink>
        </div>
    );
};

export default Recommendation;