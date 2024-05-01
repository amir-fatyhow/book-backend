import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Shop from "../pages/Shop";
import Auth from "../pages/Auth";
import BookPage from "../pages/BookPage";
import Basket from "../pages/Basket";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {!user.isAuth && <Route path="/shop" element={<Shop/>}/>}
            {!user.isAuth && <Route path="/login" element={<Auth/>}/>}
            {!user.isAuth && <Route path="/registration" element={<Auth/>}/>}
            {!user.isAuth && <Route path="/book/:id" element={<BookPage/>}/>}
            {user.isAuth && <Route path="/basket" element={<Basket/>}/>}
            <Route path="*" element={<Navigate to="/shop" replace />} />
        </Routes>
    );
};

export default AppRouter;