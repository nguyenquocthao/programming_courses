import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import {RaisedButton, Avatar, Chip} from 'material-ui';
import { blue200, blue900 } from 'material-ui/styles/colors';

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

const tags=['Ball manipulation', 'Kicking abilities', 'Passing ablilities', 'Duel/Tackling abilities', 'Field speed coverage', 'Blocking abilities', 'Game strategy', 'Playmaking risks'];

class TagItem extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Chip backgroundColor={blue200} style={styles.chip}>
        <Avatar size={32} color={blue200} backgroundColor={blue900}>
          2
        </Avatar>
        {this.props.children}
      </Chip>
    )
  }
}

export default class Player extends Component {
  render() {
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title="Emmanuel Henri" subtitle="Offense: 12 - Defense: 8" />}
        >
          <img src="player.jpg" />
        </CardMedia>
        <CardText style={styles.wrapper}>
          {tags.map(tag => <TagItem>{tag}</TagItem>)}
        </CardText>
        <CardActions>

        </CardActions>
      </Card>
    )
  }
}
