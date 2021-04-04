import React, { Component } from "react";
//import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Players = (props) => (
  <tr>
    <td>{props.players.player_ep_rank}</td>
    <td>{props.players.player_name}</td>
    <td>{props.players.player_position}</td>
    <td>{props.players.player_team}</td>
    <td>{props.players.player_elims}</td>
    <td>{props.players.player_healing}</td>
    <td>{props.players.player_deaths}</td>
    <td>{props.players.player_risk}</td>
    <td>
      <Link to={"/editplayer/" + props.players._id}>Edit</Link>
    </td>
  </tr>
);

export default class PlayersStats extends Component {
  constructor(props) {
    super(props);

    this.state = { players: [] };
  }

  componentDidMount() {
    // call to api and set state holding response

    axios
      .get("https://fantasy-esports-pros-backend.herokuapp.com/players")
      .then((response) => {
        this.setState({ players: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  playerStats() {
    return this.state.players.map(function (currentPlayer, i) {
      return <Players players={currentPlayer} key={i} />;
      //   console.log(currentPlayer, i);
    });
  }

  render() {
    return (
      <div className="players-stats-container">
        <div className="add-player">
          <h3 className="players-stats-title">Overwatch Player Stats</h3>
          <NavLink to="/Playeradd" activeClassName="nav-link-active">
            <FontAwesomeIcon icon={faUserPlus} />
          </NavLink>
        </div>

        <table
          className="table table-striped"
          style={{ marginTop: 20 }}
          variant="dark"
        >
          <thead>
            <tr>
              <th>EP Rank</th>
              <th>Name</th>
              <th>Position</th>
              <th>Team</th>
              <th>Eliminations</th>
              <th>Healing</th>
              <th>Deaths</th>
              <th>Risk</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.playerStats()}</tbody>
        </table>
      </div>
    );
  }
}
