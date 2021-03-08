import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { useTable, useSortBy } from "react-table";

const Teams = (props) => (
  <tr>
    <td>{props.teams.team_name}</td>
    <td>{props.teams.team_league_rank}</td>
    <td>{props.teams.team_ep_rank}</td>
    <td>{props.teams.team_win}</td>
    <td>{props.teams.team_loss}</td>
    <td>{props.teams.team_streak}</td>
    <td>
      <Link to={"/edit/" + props.teams._id}>Edit</Link>
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
      .get("http://localhost:4000/Teams/")
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
        <h3 className="team-stats-title">Team Stats</h3>

        <div className="add-team">
          <NavLink to="/teamadd" activeClassName="nav-link-active">
            <FontAwesomeIcon icon={faUsers} />
          </NavLink>
        </div>

        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>League Rank</th>
              <th>EP Rank</th>
              <th>Wins</th>
              <th>Loss</th>
              <th>Steak</th>
            </tr>
          </thead>
          <tbody>{this.teamStats()}</tbody>
        </table>
      </div>
    );
  }
}
