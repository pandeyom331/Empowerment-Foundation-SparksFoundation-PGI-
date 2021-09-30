import React from "react";
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from "./pages";
import DonationPage from "./pages/Donate";
import { HashRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Donate" component={DonationPage} exact />
      </Switch>
    </Router>
  );
}

export default App;