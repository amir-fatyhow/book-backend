import React from 'react';
import Recommendation from "./recommendation/Recommendation";
import './Recommendations.css'


const Recommendations = () => {
    return (
        <div className="recommendations__wrapper">
            <h2 className="recommendations__title">РЕКОМЕНДУЕМ</h2>
            <ul className="recommendations__list">
                <li className="recommendations__list__item">
                    <Recommendation book={"Евгений Онегин"}/>
                </li>
            </ul>
        </div>
    );
};

export default Recommendations;