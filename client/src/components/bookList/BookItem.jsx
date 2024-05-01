import React from 'react';
import {Col} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "./BookItem.css"

const BookItem = ({book}) => {
    return (
        <Col className="bookItem__container" md={4}>
            <div className="recommendation__wrapper">
                <div className="recommendation__flip__card__container">
                    <div className="recommendation__flip__card">
                        <div className="recommendation__card__front">
                            <div className="recommendation__card__front__wrapper">
                                <img
                                    className="recommendation__card__front__image"
                                    src={require(`../../assets/books/the-little-prince.jpg`)}
                                    alt={book}/>
                            </div>
                        </div>
                        <div className="recommendation__card__back">
                            <div className="recommendation__back__side__content">
                                <p className="recommendation__back__side__text">{book.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="recommendation__author">{book.author}</p>
                <p className="recommendation__book">"{book.name}"</p>
                <p className="recommendation__price">{book.price} &#x20bd;</p>
                <NavLink to="/shop"><button className="recommendation__button">Купить</button></NavLink>
            </div>
        </Col>
    );
};

export default BookItem;