import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "../styles/GlobalStyle";
import Home from "../pages/HomePage";
import ListTripPages from "../components/ListTripsPage";
import ApplicationFromPage from "../pages/ApplicationFormPage";
import LoginPage from "../pages/LoginPage";
import AdminHomePage from "../pages/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";

const Router = (props) => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>

                <Route exact path="/">
                    <Header />
                    <Home />
                </Route>

                <Route exact path="/trips/list">
                <Header />
                    <ListTripPages />
                </Route>

                <Route exact path="/trips/application/:id">
                    <ApplicationFromPage />
                </Route>

                <Route exact path="/login">
                    <LoginPage />
                </Route>

                <Route exact path="/admin/trips/list">
                    <AdminHomePage />
                </Route>

                <Route exact path="/admin/trips/create">
                    <CreateTripPage />
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