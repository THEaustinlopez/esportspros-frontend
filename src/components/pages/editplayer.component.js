import React, { Component } from "react";
import axios from "axios";

export default class EditPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player_name: "",
      player_position: "",
      player_age: "",
      player_team: "",
      player_ep_rank: "",
      player_in_game_rank: "",
      player_consistency_rating: "",
      player_risk: "",
    };
    this.onChangePlayerName = this.onChangePlayerName.bind(this);
    this.onChangePlayerPosition = this.onChangePlayerPosition.bind(this);
    this.onChangePlayerAge = this.onChangePlayerAge.bind(this);
    this.onChangePlayerTeam = this.onChangePlayerTeam.bind(this);
    this.onChangePlayerEPRank = this.onChangePlayerEPRank.bind(this);
    this.onChangePlayerInGameRank = this.onChangePlayerInGameRank.bind(this);
    this.onChangePlayerConsistencyRating = this.onChangePlayerConsistencyRating.bind(
      this
    );
    this.onChangePlayerRisk = this.onChangePlayerRisk.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onChangePlayerAge(e) {
    this.setState({
      player_age: e.target.value,
    });
  }

  onChangePlayerTeam(e) {
    this.setState({
      player_team: e.target.value,
    });
  }

  onChangePlayerEPRank(e) {
    this.setState({
      player_ep_rank: e.target.value,
    });
  }

  onChangePlayerInGameRank(e) {
    this.setState({
      player_in_game_rank: e.target.value,
    });
  }

  onChangePlayerConsistencyRating(e) {
    this.setState({
      player_consistency_rating: e.target.value,
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
      player_name: this.state.player_name,
      player_position: this.state.player_position,
      player_age: this.state.player_age,
      player_team: this.state.player_team,
      player_EP_Rank: this.state.player_ep_rank,
      player_in_game_rank: this.state.player_in_game_rank,
      player_consistency_rating: this.state.player_consistency_rating,
      player_risk: this.state.player_risk,
    };

    axios
      .post(
        "http://localhost:4000/Players/update/" + this.props.match.params.id,
        updatedPlayerStats
      )
      .then((res) => console.log(res.data));

    this.props.history.push("/playersstats");
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/Players/" + this.props.match.params.id)
      .then((response) => {
        // console.log(response);
        this.setState({
          player_name: response.data.player_name,
          player_position: response.data.player_position,
          player_age: response.data.player_age,
          player_team: response.data.player_team,
          player_ep_rank: response.data.player_ep_rank,
          player_in_game_rank: response.data.player_in_game_rank,
          player_consistency_rating: response.data.player_consistency_rating,
          player_risk: response.data.player_risk,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <h3>Update Player's Information</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
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

            <label>Player Age</label>
            <input
              type="text"
              className="player-age"
              value={this.state.player_age}
              onChange={this.onChangePlayerAge}
            />

            <label>Player's Team</label>
            <input
              type="text"
              className="player-team"
              value={this.state.player_team}
              onChange={this.onChangePlayerTeam}
            />

            <label>Player Esports Pros Rank</label>
            <input
              type="text"
              className="player-ep-rank"
              value={this.state.player_ep_rank}
              onChange={this.onChangePlayerEPRank}
            />

            <label>Player's In-Game Rank</label>
            <input
              type="text"
              className="player-in-game-rank"
              value={this.state.player_in_game_rank}
              onChange={this.onChangePlayerInGameRank}
            />

            <label>Player Consistency Rating</label>
            <input
              type="text"
              className="player-consitency-rating"
              value={this.state.player_consistency_rating}
              onChange={this.onChangePlayerConsistencyRating}
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
