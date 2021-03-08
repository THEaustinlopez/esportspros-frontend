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
    <td>{props.players.player_name}</td>
    <td>{props.players.player_position}</td>
    <td>{props.players.player_age}</td>
    <td>{props.players.player_team}</td>
    <td>{props.players.player_ep_rank}</td>
    <td>{props.players.player_in_game_rank}</td>
    <td>{props.players.player_consistency_rating}</td>
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
      .get("http://localhost:4000/Players/")
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
        <h3 className="players-stats-title">Player Stats</h3>

        <div className="add-player">
          <NavLink to="/Playeradd" activeClassName="nav-link-active">
            <FontAwesomeIcon icon={faUserPlus} />
          </NavLink>
        </div>

        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Age</th>
              <th>Team</th>
              <th>EP Rank</th>
              <th>In Game Rank</th>
              <th>Consistency</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>{this.playerStats()}</tbody>
        </table>
      </div>
    );
  }
}
