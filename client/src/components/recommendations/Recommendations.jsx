import React from 'react';
import Recommendation from "./recommendation/Recommendation";
import './Recommendations.css'


const Recommendations = () => {
    return (
        <div className="recommendations__wrapper">
            <h2 className="recommendations__title">РЕКОМЕНДУЕМ</h2>
            <ul className="recommendations__list">
                <li className="recommendations__list__item">
                    <Recommendation
                        imgUrl={"amphibian-man"}
                        author={"А.С. Пушкин"}
                        book={"Евгений Онегин"}
                        text={"\"Человек-амфибия\" - один из самых известных романов основоположника " +
                            "российской научной фантастики Александра Беляева. " +
                            "Увлекательная и драматичная история Ихтиандра - юноши, " +
                            "наделенного способностью дышать под водой."}
                        price={199}
                    />
                </li>
                {/*<li className="recommendations__list__item">
                    <Recommendation
                        imgUrl={"under-the-dome"}
                        author={"Стивен Кинг"}
                        book={"Под куполом"}
                        text={"Однажды маленький городок, вместе со всеми обитателями, " +
                            "накрыло таинственным невидимым куполом, не позволяющим ни покинуть город, " +
                            "ни попасть туда извне. Что теперь произойдет с его жителями? " +
                            "Ведь когда над человеком не довлеет ни закон, ни страх наказания – слишком тонкая " +
                            "грань отделяет его от превращения в жестокого зверя."}
                        price={199}
                    />
                </li>

                <li className="recommendations__list__item">
                    <Recommendation
                        imgUrl={"gone-with-the-wind"}
                        author={"Маргарет Митчелл"}
                        book={"Унесённые ветром"}
                        text={"«Унесенные ветром» — история о молодой южанке, " +
                            "дочери состоятельного владельца плантаций в Джорджии, " +
                            "чья беззаботная юность прекращается с началом Гражданской войны. " +
                            "В один миг девушке пришлось повзрослеть: мать умерла, отец болен, " +
                            "а родное поместье разграбили янки."}
                        price={199}
                    />
                </li>*/}
            </ul>
        </div>
    );
};

export default Recommendations;