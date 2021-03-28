import React, { Component } from "react";
import axios from "axios";

export default class TeamAdd extends Component {
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

    console.log("Form Submitted");
    console.log(`Team EP Rank: ${this.state.team_ep_rank}`);
    console.log(`Team League Rank: ${this.state.team_league_rank}`);
    console.log(`Team name: ${this.state.team_name}`);
    console.log(`Team Wins: ${this.state.team_win}`);
    console.log(`Team Losses: ${this.state.team_loss}`);
    console.log(`Team Streak: ${this.state.team_streak}`);

    const newTeam = {
      team_ep_rank: this.state.team_ep_rank,
      team_league_rank: this.state.team_league_rank,
      team_name: this.state.team_name,
      team_win: this.state.team_win,
      team_loss: this.state.team_loss,
      team_streak: this.state.team_streak,
    };

    axios
      .post(
        "https://fantasy-esports-pros-backend.herokuapp.com/teams/add",
        newTeam
      )
      .then((res) => console.log(res.data));

    this.setState({
      team_ep_rank: "",
      team_league_rank: "",
      team_name: "",
      team_win: "",
      team_loss: "",
      team_streak: "",
    });
  }

  render() {
    return (
      <div className="teamadd-container">
        <h3>Add New Team</h3>
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
                value="Add Team"
                className="btn btn-primary"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
