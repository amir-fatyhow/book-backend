import React, {useContext} from 'react';
import {Routes, Route} from "react-router-dom";
import Shop from "../pages/Shop";
import Auth from "../pages/Auth";
import Basket from "../pages/Basket";
import {Context} from "../index";
import Header from "./header/Header";
import Genres from "./genres/Genres";
import Recommendations from "./recommendations/Recommendations";
import Description from "./description/Description";
import Mail from "./subscription/Subscription";
import Contacts from "./contacts/Contacts";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    console.log(user.isAuth)
    return (
        <Routes>
            {user.isAuth && <Route path="/shop" element={<Shop/>}/>}
            {!user.isAuth && <Route path="/login" element={<Auth/>}/>}
            {!user.isAuth && <Route path="/registration" element={<Auth/>}/>}
            {user.isAuth && <Route path="/basket" element={<Basket/>}/>}

            {!user.isAuth && <Route path="/" element=
                {<>
                <Header />
                <Genres />
                <Recommendations />
                <Description />
                <Mail />
                <Contacts />
                </>}
            />}
        </Routes>
    );
});

export default AppRouter;