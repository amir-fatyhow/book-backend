import React from 'react';
import './Genre.css'
import {NavLink} from "react-router-dom";

const Genre = ({title, imgUrl}) => {
    return (
        <div className="genre__card">
            <NavLink to="/shop">
                <h2 className="genre__card__title">{title}</h2>
                <div className="genre__card__image__wrapper">
                    <div className="genre__image__blur__effect"></div>
                    <img className="genre__image" src={require(`../../../assets/genres/${imgUrl}.jpg`)} alt={title}/>
                </div>
            </NavLink>
        </div>
    );
};

export default Genre;