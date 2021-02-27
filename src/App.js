import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/main.scss";

import NavigationContainer from "./components/navigation/navigation-container";
import Home from "./components/pages/home.component";
import Stats from "./components/pages/stats.component";
import Teams from "./components/pages/teams.component";




class App extends Component {
  render() {
    return (
      <div className="container">
      <Router>
        <div> <NavigationContainer/> </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path ="/Teams/:id" component={Teams} />
          <Route path="/Stats" component={Stats} />
        </Switch>
        
      </Router>
    </div>
    );
  }
}

export default App;
