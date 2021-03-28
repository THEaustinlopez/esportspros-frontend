import React, { Component } from "react";
import axios from "axios";

export default class EditPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player_ep_rank: "",
      player_name: "",
      player_position: "",
      player_team: "",
      player_elims: "",
      player_healing: "",
      player_deaths: "",
      player_risk: "",
    };
    this.onChangePlayerEPRank = this.onChangePlayerEPRank.bind(this);
    this.onChangePlayerName = this.onChangePlayerName.bind(this);
    this.onChangePlayerPosition = this.onChangePlayerPosition.bind(this);
    this.onChangePlayerTeam = this.onChangePlayerTeam.bind(this);
    this.onChangePlayerElims = this.onChangePlayerElims.bind(this);
    this.onChangePlayerHealing = this.onChangePlayerHealing.bind(this);
    this.onChangePlayerDeaths = this.onChangePlayerDeaths.bind(this);
    this.onChangePlayerRisk = this.onChangePlayerRisk.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangePlayerEPRank(e) {
    this.setState({
      player_ep_rank: e.target.value,
    });
  }

  onChangePlayerName(e) {
    this.setState({
      player_name: e.target.value,
    });
  }

  onChangePlayerPosition(e) {
    this.setState({
      player_position: e.target.value,
    });
  }

  onChangePlayerTeam(e) {
    this.setState({
      player_team: e.target.value,
    });
  }

  onChangePlayerElims(e) {
    this.setState({
      player_elims: e.target.value,
    });
  }

  onChangePlayerHealing(e) {
    this.setState({
      player_healing: e.target.value,
    });
  }

  onChangePlayerDeaths(e) {
    this.setState({
      player_deaths: e.target.value,
    });
  }

  onChangePlayerRisk(e) {
    this.setState({
      player_risk: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const updatedPlayerStats = {
      player_ep_rank: this.state.player_ep_rank,
      player_name: this.state.player_name,
      player_position: this.state.player_position,
      player_team: this.state.player_team,
      player_elims: this.state.player_elims,
      player_healing: this.state.player_healing,
      player_deaths: this.state.player_deaths,
      player_risk: this.state.player_risk,
    };

    axios
      .post(
        "https://fantasy-esports-pros-backend.herokuapp.com/players/update/" +
          this.props.match.params.id,
        updatedPlayerStats
      )
      .then((res) => console.log(res.data));

    this.props.history.push("/playersstats");
  }

  componentDidMount() {
    axios
      .get(
        "https://fantasy-esports-pros-backend.herokuapp.com/players/" +
          this.props.match.params.id
      )
      .then((response) => {
        // console.log(response);
        this.setState({
          player_ep_rank: response.data.player_ep_rank,
          player_name: response.data.player_name,
          player_position: response.data.player_position,
          player_team: response.data.player_team,
          player_elims: response.data.player_elims,
          player_healing: response.data.player_healing,
          player_deaths: response.data.player_deaths,
          player_risk: response.data.player_risk,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="edit-player-container">
        <h3>Update Player's Information</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Player Esports Pros Rank</label>
            <input
              type="text"
              className="player-ep-rank"
              value={this.state.player_ep_rank}
              onChange={this.onChangePlayerEPRank}
            />

            <label>Player Name</label>
            <input
              type="text"
              className="player-name"
              value={this.state.player_name}
              onChange={this.onChangePlayerName}
            />

            <label>Player Position</label>
            <input
              type="text"
              className="player-position"
              value={this.state.player_position}
              onChange={this.onChangePlayerPosition}
            />

            <label>Player's Team</label>
            <input
              type="text"
              className="player-team"
              value={this.state.player_team}
              onChange={this.onChangePlayerTeam}
            />

            <label>Eliminations</label>
            <input
              type="text"
              className="player-elims"
              value={this.state.player_elims}
              onChange={this.onChangePlayerElims}
            />

            <label>Player Healing</label>
            <input
              type="text"
              className="player-healing"
              value={this.state.player_healing}
              onChange={this.onChangePlayerHealing}
            />

            <label>Player Deaths</label>
            <input
              type="text"
              className="player-deaths"
              value={this.state.player_deaths}
              onChange={this.onChangePlayerDeaths}
            />

            <label>Player Risk</label>
            <input
              type="text"
              className="player-risk"
              value={this.state.player_risk}
              onChange={this.onChangePlayerRisk}
            />

            <div className="form-group">
              <input
                type="submit"
                value="Update Player"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
