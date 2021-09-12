import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Header from "./header"
import LandingPage from './landingPage';
import Login from "./login"
import Signup from './signup';
import TicketView from "./ticketView"

function MainRouter() {
  return (
    <BrowserRouter>
        <Header></Header>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/dashboard" exact component={Dashboard}></Route>
        <Route path="/ticket/:ticketId" exact component={TicketView}></Route>
    </BrowserRouter>
  );
}

export default MainRouter;
