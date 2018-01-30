import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';
import {Divider} from 'material-ui';



export default class TeamStats extends Component {
  render() {
    const players = this.props.players;
    const numPlayers = players.length;

    const tags=[
      'ballManipulation',
      'kickingAbilities',
      'passingAbilities',
      'duelTackling',
      'fieldCoverage',
      'blockingAbilities',
      'gameStrategy',
      'playmakingRisks'
    ];

    const tagsData=tags.map(tag=>
      Math.round((players.reduce((sum, player) => (sum + player[tag]), 0) / ( 3 * numPlayers )) * 100)
    );

    const defense = Math.round((tagsData[3]+tagsData[4]+tagsData[5]+tagsData[6]+tagsData[7])/5);
    const offense = Math.round((tagsData[0] + tagsData[1] + tagsData[2] + tagsData[4] + tagsData[6] + tagsData[7])/6);
    const total = Math.round(tagsData.reduce((sum,val)=>sum+val)/8);

    const data = {
      labels: ['Ball Manipulation', 'Kicking', 'Passing', 'Duel/Tackling', 'Field Coverage', 'Blocking', 'Strategy', 'Risks'],
      datasets: [
        {
          label: 'In % of max possible',
          backgroundColor: 'rgba(143, 202, 249, 0.2)',
          borderColor: 'rgba(12, 71, 161, 1)',
          pointBackgroundColor: 'rgba(12, 71, 161, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(12, 71, 161, 1)',
          data: tagsData
        }
      ]
    };


    return (
      <div>
        <h2>Team Stats</h2>
        <div className="row">
          <div className="col s12 m7">
            <Radar data={data}
            width={500}
            height={500}
            option={{
              maintainAspectRatio: false
            }}/>
          </div>
          <div className="col s12 m5">
            <h4>Scores in % of max possible</h4>
            <Divider />
            <h4>Team's offense: {offense}%</h4>
            <h4>Team's defense: {defense}%</h4>
            <h4>Team's total: {total}%</h4>
            <Divider />
            <h4>Number of players: {numPlayers}</h4>
          </div>
        </div>
      </div>
    );
  }
}
