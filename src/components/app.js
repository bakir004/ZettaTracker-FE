import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./header"
import LandingPage from './landingPage';
import Login from "./login"
import { useAppStyles } from "../styles/appStyles"

function App() {
  const styles = useAppStyles();
  return (
    <div className={styles.root}>
      <BrowserRouter>
        <Header></Header>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/login" exact component={Login}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
