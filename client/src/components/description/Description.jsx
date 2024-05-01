import React from 'react';
import './Description.css'

const Description = () => {
    return (
        <div className="description__wrapper" id="description">
            <div className="description__flex__container">
                <div className="description__text">
                    <h2 className="description__text-title">О нас</h2>
                    <p className="description__text-paragraph">Мы создали приложение, с помощью которого</p>
                    <p className="description__text-paragraph">вы сможете увидеть старую классику в новом</p>
                    <p className="description__text-paragraph">формате, познакомиться с новыми авторами,</p>
                    <p className="description__text-paragraph">преобразить скучные черно-белые страницы</p>
                    <p className="description__text-paragraph">книг в красочные картинки!</p>
                </div>
                <img className="description__logo" src={require("../../assets/logo/vbook.png")} alt="vbook"/>
            </div>
        </div>
    );
};

export default Description;