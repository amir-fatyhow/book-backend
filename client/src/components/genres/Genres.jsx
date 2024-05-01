import React from 'react';
import Genre from "./genre/Genre";
import './Genres.css';

const Genres = () => {
    return (
        <div className="genres__wrapper" id="genres">
            <h2 className="genres__title">ЖАНРЫ</h2>
            <ul className="genres__list">
                <li className="genres__list__item">
                    <Genre title={"РОМАН"} imgUrl={"novel"}/>
                </li>
                <li className="genres__list__item">
                    <Genre title={"ТРИЛЛЕР"} imgUrl={"thriller"}/>
                </li>
                <li className="genres__list__item">
                    <Genre title={"ФАНТАСТИКА"} imgUrl={"fantastic"}/>
                </li>
                <li className="genres__list__item">
                    <Genre title={"СКАЗКИ"} imgUrl={"fairy-tale"}/>
                </li>
            </ul>
        </div>
    );
};

export default Genres;