import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import DashboardEmployee from './dashboardEmployee';
import Header from "./header"
import LandingPage from './landingPage';
import Login from "./login"
import Signup from './signup';

function MainRouter() {
  return (
    <BrowserRouter>
        <Header></Header>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/dashboard" exact component={DashboardEmployee}></Route>
    </BrowserRouter>
  );
}

export default MainRouter;
