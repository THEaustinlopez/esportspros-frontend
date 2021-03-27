// import { jsx } from "theme-ui";
import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/main.scss";

import NavigationContainer from "./components/navigation/navigation-container";
import Home from "./components/pages/home.component";
import PlayerAdd from "./components/pages/playeradd.component";
import PlayersStats from "./components/pages/playersstats.component";
import TeamsStats from "./components/pages/teamsstats.component";
import TeamAdd from "./components/pages/teamadd.component";
import EditPlayer from "./components/pages/editplayer.component";
import EditTeam from "./components/pages/editteam.component";
// import Slider from "./helpers/slider";
import Icons from "./helpers/icons";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            {" "}
            <NavigationContainer />{" "}
          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/playersstats/" component={PlayersStats} />
            <Route path="/teamsstats/" component={TeamsStats} />
            <Route path="/playeradd/" component={PlayerAdd} />
            <Route path="/teamadd/" component={TeamAdd} />
            <Route path="/editplayer/:id/" component={EditPlayer} />
            <Route path="/editteam/:id" component={EditTeam} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
