import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { RaisedButton, Avatar, Chip} from 'material-ui';
import { blue200, lightBlue800, lightBlue50 } from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12,
  },
};

class TagItem extends Component{
  render(){
    return(
      <Chip
      backgroundColor={blue200}
      style={styles.chip}
      >
        <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
          {this.props.number}
        </Avatar>
        {this.props.children}
      </Chip>
    )
  }
}

export default class Player extends Component {
  showEditForm() {
    this.props.showEditForm();
  }

  render() {
    const player = this.props.player;
    const defense = player.duelTackling + player.fieldCoverage + player.blockingAbilities + player.gameStrategy + player.playmakingRisks;
    const offense = player.kickingAbilities + player.gameStrategy + player.ballManipulation + player.passingAbilities + player.fieldCoverage + player.playmakingRisks;
    const total = player.kickingAbilities + player.gameStrategy + player.ballManipulation + player.passingAbilities + player.fieldCoverage + player.playmakingRisks + player.duelTackling + player.blockingAbilities;

    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title={player.name} subtitle={`Offense: ${offense} - Defense: ${defense} - Total: ${total}`} />}
        >
          <img src="player.jpg" />
        </CardMedia>
        <CardText>
          <div style={styles.wrapper}>
            <TagItem number={player.ballManipulation}>Ball manipulation</TagItem>
            <TagItem number={player.kickingAbilities}>Kicking abilities</TagItem>
            <TagItem number={player.passingAbilities}>Passing abilities</TagItem>
            <TagItem number={player.duelTackling}>Duel/Tackling abilities</TagItem>
            <TagItem number={player.fieldCoverage}>Field speed coverage</TagItem>
            <TagItem number={player.blockingAbilities}>Blocking abilities</TagItem>
            <TagItem number={player.gameStrategy}>Game strategy</TagItem>
            <TagItem number={player.playmakingRisks}>Playmaking risks</TagItem>
          </div>
        </CardText>
        <CardActions>
          <RaisedButton
            label="Edit player/stats"
            labelPosition="before"
            style={styles.button}
            onClick={this.showEditForm.bind(this)}/>
        </CardActions>
      </Card>
    )
  }
}
