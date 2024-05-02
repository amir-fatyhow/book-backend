import React from 'react';
import {Col, Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "./BookItem.css"

const BookItem = ({book}) => {
    return (
        <Col className="bookItem__container" md={4}>
            <div className="bookItem__wrapper">
                <div className="bookItem__flip__card__container">
                    <div className="bookItem__flip__card">
                        <div className="bookItem__card__front">
                            <div className="bookItem__card__front__wrapper">
                                <Image
                                    className="bookItem__card__front__image"
                                    src={"http://localhost:5000/" + `${book.image}`}
                                    alt={book}/>
                            </div>
                        </div>
                        <div className="bookItem__card__back">
                            <div className="bookItem__back__side__content">
                                <p className="bookItem__back__side__text">{book.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="bookItem__author">{book.author}</p>
                <p className="bookItem__book">"{book.name}"</p>
                <p className="bookItem__price">{book.price} &#x20bd;</p>
                <NavLink to="/shop"><button className="bookItem__button">В корзину</button></NavLink>
            </div>
        </Col>
    );
};

export default BookItem;