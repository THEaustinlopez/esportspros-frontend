import React, { Component } from "react";
import axios from "axios";

export default class EditTeam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      team_ep_rank: "",
      team_league_rank: "",
      team_name: "",
      team_win: "",
      team_loss: "",
      team_streak: "",
    };

    this.onChangeTeamEPRank = this.onChangeTeamEPRank.bind(this);
    this.onChangeTeamLeagueRank = this.onChangeTeamLeagueRank.bind(this);
    this.onChangeTeamName = this.onChangeTeamName.bind(this);
    this.onChangeTeamWin = this.onChangeTeamWin.bind(this);
    this.onChangeTeamLoss = this.onChangeTeamLoss.bind(this);
    this.onChangeTeamStreak = this.onChangeTeamStreak.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeTeamEPRank(e) {
    this.setState({
      team_ep_rank: e.target.value,
    });
  }

  onChangeTeamLeagueRank(e) {
    this.setState({
      team_league_rank: e.target.value,
    });
  }

  onChangeTeamName(e) {
    this.setState({
      team_name: e.target.value,
    });
  }

  onChangeTeamWin(e) {
    this.setState({
      team_win: e.target.value,
    });
  }

  onChangeTeamLoss(e) {
    this.setState({
      team_loss: e.target.value,
    });
  }

  onChangeTeamStreak(e) {
    this.setState({
      team_streak: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const updatedTeamStats = {
      team_ep_rank: this.state.team_ep_rank,
      team_league_rank: this.state.team_league_rank,
      team_name: this.state.team_name,
      team_win: this.state.team_win,
      team_loss: this.state.team_loss,
      team_streak: this.state.team_streak,
    };

    axios
      .post(
        "https://fantasy-esports-pros-backend.herokuapp.com/teams/update/" +
          this.props.match.params.id,
        updatedTeamStats
      )
      .then((res) => console.log(res.data));

    this.props.history.push("/teamsstats");
  }

  componentDidMount() {
    axios
      .get(
        "https://fantasy-esports-pros-backend.herokuapp.com/teams/" +
          this.props.match.params.id
      )
      .then((response) => {
        // console.log(response);
        this.setState({
          team_ep_rank: response.data.team_ep_rank,
          team_league_rank: response.data.team_league_rank,
          team_name: response.data.team_name,
          team_win: response.data.team_win,
          team_loss: response.data.team_loss,
          team_streak: response.data.team_streak,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="edit-team-container">
        <h3>Update Team Information</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>EP Rank</label>
            <input
              type="text"
              className="team-ep-rank"
              value={this.state.team_ep_rank}
              onChange={this.onChangeTeamEPRank}
            />

            <label>League Rank</label>
            <input
              type="text"
              className="team-league-rank"
              value={this.state.team_league_rank}
              onChange={this.onChangeTeamLeagueRank}
            />

            <label>Team Name</label>
            <input
              type="text"
              className="team-name"
              value={this.state.team_name}
              onChange={this.onChangeTeamName}
            />

            <label>Wins</label>
            <input
              type="text"
              className="team-win"
              value={this.state.team_win}
              onChange={this.onChangeTeamWin}
            />

            <label>Losses</label>
            <input
              type="text"
              className="team-loss"
              value={this.state.team_loss}
              onChange={this.onChangeTeamLoss}
            />

            <label>Streak</label>
            <input
              type="text"
              className="team-streak"
              value={this.state.team_streak}
              onChange={this.onChangeTeamStreak}
            />

            <div className="form-group">
              <input
                type="submit"
                value="Update Team"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
