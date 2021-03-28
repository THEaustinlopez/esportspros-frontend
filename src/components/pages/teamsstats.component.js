import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { useTable, useSortBy } from "react-table";

const Teams = (props) => (
  <tr>
    <td>{props.teams.team_ep_rank}</td>
    <td>{props.teams.team_league_rank}</td>
    <td>{props.teams.team_name}</td>
    <td>{props.teams.team_win}</td>
    <td>{props.teams.team_loss}</td>
    <td>{props.teams.team_streak}</td>
    <td>
      <Link to={"/editteam/" + props.teams._id}>Edit</Link>
    </td>
  </tr>
);

export default class TeamsStats extends Component {
  constructor(props) {
    super(props);

    this.state = { teams: [] };
  }

  componentDidMount() {
    axios
      .get("https://fantasy-esports-pros-backend.herokuapp.com/teams")
      .then((response) => {
        console.log("getTeaems", response);
        this.setState({ teams: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  teamStats() {
    return this.state.teams.map(function (currentTeam, i) {
      return <Teams teams={currentTeam} key={i} />;
    }, useSortBy);
  }

  render() {
    return (
      <div className="team-stats-container">
        <div className="add-team">
          <h3 className="team-stats-title">Overwatch Team Stats</h3>
          <NavLink to="/teamadd" activeClassName="nav-link-active">
            <FontAwesomeIcon icon={faUsers} />
          </NavLink>
        </div>

        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>EP Rank</th>
              <th>League Rank</th>
              <th>Name</th>
              <th>Wins</th>
              <th>Loss</th>
              <th>Steak</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.teamStats()}</tbody>
        </table>
      </div>
    );
  }
}
