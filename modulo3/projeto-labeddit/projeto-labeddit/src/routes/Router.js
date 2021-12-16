import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Post from "../pages/Post/Post";
import Feed from "../pages/Feed/Feed";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<HomePage />} />
                <Route exact path={"/cadastro"} element={<Cadastro />} />
                <Route exact path={"/login"} element={<Login />} />
                <Route exact path={"/feed"} element={<Feed />} />
                <Route exact path={"/post/:id"} element={<Post />} />
                <Route exact path={"*"} element={<p>Página inexistente. Verifique sua digitação.</p>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;