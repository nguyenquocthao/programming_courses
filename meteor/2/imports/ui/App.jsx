import React, { Component } from 'react';
import {MuiThemeProvider} from 'material-ui/styles';
import {RaisedButton, AppBar, Divider} from 'material-ui';
import { List } from 'material-ui/List';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      players: []
    };
  }
  componentWillMount(){
    this.setState({
      players: [
      {
        _id: 1,
        name: "Manny Henri",
        ballManipulation: 1,
        kickingAbilities: 3,
        passingAbilities: 1,
        duelTackling: 1,
        fieldCoverage: 3,
        blockingAbilities: 2,
        gameStrategy: 3,
        playmakingRisks: 2,
      },
      {
        _id: 2,
        name: "Speedy Gonz",
        ballManipulation: 2,
        kickingAbilities: 3,
        passingAbilities: 1,
        duelTackling: 1,
        fieldCoverage: 3,
        blockingAbilities: 2,
        gameStrategy: 3,
        playmakingRisks: 2,
      },
      {
        _id: 3,
        name: "Tracey Good",
        ballManipulation: 2,
        kickingAbilities: 3,
        passingAbilities: 1,
        duelTackling: 1,
        fieldCoverage: 3,
        blockingAbilities: 2,
        gameStrategy: 3,
        playmakingRisks: 2,
      }
    ]
  });
  }
  getPlayers() {
    return this.state.players;
  }

  renderPlayers() {
    return this.getPlayers().map((player) => (
      <TeamList key={player._id} player={player} />
    ));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}/>
          <div className="row">
            <div className="col s12 m7" ><Player /></div>
            <div className="col s12 m5" >
              <Divider/>
                <List>
                  {this.renderPlayers()}
                </List>
              <Divider/>
            </div>
            <div className="col s12 m5" ><TeamStats/></div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
