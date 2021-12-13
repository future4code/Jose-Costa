import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Heading, Paragraph } from "evergreen-ui";
import { GlobalStyle } from "../App-style/GlobalStyle";

import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import Home from "../pages/HomePage/HomePage";
import ListTripPages from "../pages/ListTripsPage/ListTripsPage";
import LoginPage from "../pages/LoginPage/LoginPage";

import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";
import Header from "../components/Header/Header";

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
                    <Heading textAlign="center" margin={10}>Página inexistente.</Heading>
                    <Paragraph textAlign="center" >Verifique sua digitação e tente novamente. :)</Paragraph>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router;