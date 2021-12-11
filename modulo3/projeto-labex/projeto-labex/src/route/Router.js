import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "../styles/GlobalStyle";
import Home from "../pages/HomePage";
import ListTripPages from "../pages/ListTripsPage";
import LoginPage from "../pages/LoginPage";
import AdminHomePage from "../pages/AdminHomePage";
import TripDetailsPage from "../pages/TripDetailsPage";
import Header from "../components/Header";

const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/trips/list">
                    <ListTripPages />
                </Route>

                <Route exact path="/login">
                    <LoginPage />
                </Route>

                <Route exact path="/admin/trips/list">
                    <AdminHomePage />
                </Route>

                <Route exact path="/admin/trips/:id">
                    <TripDetailsPage />
                </Route>

                <Route exact path="">
                    <p>Página inexistente.</p>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router;