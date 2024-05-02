import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import "./GenreBar.css"
import {NavLink} from "react-router-dom";

const GenreBar = observer(() => {
    const {book} = useContext(Context)
    const {user} = useContext(Context)

    const logout = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <div className="genreBar__container">
            {book.genre.map(genre =>
                <div
                    className={`genreBar__listItem ${genre.id === book.selectedGenre.id ? "genreBar__listItem-active" : "genreBar__listItem-not-active"}`}
                    onClick={() => book.setSelectedGenre(genre)}
                    key={genre.id}
                >
                    {genre.name === "roman" && <img className="genreBar__icon" src={require(`../../assets/icons/novel.png`)} alt="novel icon"/>}
                    {genre.name === "thriller" && <img className="genreBar__icon" src={require(`../../assets/icons/thriller.png`)} alt="thriller icon"/>}
                    {genre.name === "fantasy" && <img className="genreBar__icon" src={require(`../../assets/icons/fantasy.png`)} alt="fantasy icon"/>}
                    {genre.name === "fairy tail" && <img className="genreBar__icon" src={require(`../../assets/icons/fairy.png`)} alt="fairy icon"/>}

                    {genre.name === "roman" && <p className={`genreBar__name ${genre.id === book.selectedGenre.id ? "genreBar__name-active" : "genreBar__name-not-active"}`}>романы</p>}
                    {genre.name === "thriller" && <p className={`genreBar__name ${genre.id === book.selectedGenre.id ? "genreBar__name-active" : "genreBar__name-not-active"}`}>триллеры</p>}
                    {genre.name === "fantasy" && <p className={`genreBar__name ${genre.id === book.selectedGenre.id ? "genreBar__name-active" : "genreBar__name-not-active"}`}>фантастика</p>}
                    {genre.name === "fairy tail" && <p className={`genreBar__name ${genre.id === book.selectedGenre.id ? "genreBar__name-active" : "genreBar__name-not-active"}`}>сказки</p>}
                </div>
            )}
            <div className="genreBar__listItem__logout__basket">
                <NavLink to="/" className="genreBar__NavLink">
                    <div
                        className="genreBar__listItem"
                        onClick={() => logout()}
                    >
                        <img className="genreBar__icon" src={require(`../../assets/icons/basket.png`)} alt="novel icon"/>
                        <p className={"genreBar__name"}>Корзина</p>
                    </div>
                </NavLink>

                <NavLink to="/" className="genreBar__NavLink">
                    <div
                        className="genreBar__listItem"
                        onClick={() => logout()}
                    >
                        <img className="genreBar__icon_logout" src={require(`../../assets/logo/vbook.png`)} alt="novel icon"/>
                        <p className={"genreBar__logout"}>Выйти</p>
                    </div>
                </NavLink>
            </div>
        </div>
    );
});

export default GenreBar;