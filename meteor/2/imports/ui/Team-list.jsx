import React, { Component } from 'react';
import {Avatar} from 'material-ui';
import { ListItem } from 'material-ui/List';

export default class TeamList extends Component {
  render() {
    return (
      <ListItem
        primaryText={this.props.player.ballManipulation}
        leftAvatar={<Avatar src="player.jpg"/>}
        />
    )
  }
}
