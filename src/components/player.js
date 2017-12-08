import React, {Component} from 'react';
import PropTypes from 'prop-types'

import cxs from 'cxs';

const red = '#d8544a';
const yellow = '#ecb538';

const style = {
  player: {
    border: '2px solid #d8544a',
    borderRadius: '10px',
    transition: 'background 1s',
    color: 'white',
    fontSize: '20px',
    marginLeft: '30px',
    marginRight: '30px',
    width: '150px',
    height: '50px',
    display: 'inline-block'
  },
  red: {
    borderColor: red
  },
  yellow: {
    borderColor: yellow
  }
};

export default class Player extends Component {
  render() {
    const playerName = this.props.code === 'R' ? 'Red' : 'Yellow';
    const background = (this.props.code === this.props.currentPlayer) ? this.props.color : "#0e98e3";
    const isWinner = (this.props.code === this.props.winner) ? 'Winner': '\u00A0';
    const playerStyle = Object.assign(style.player, {
      borderColor: this.props.color,
      background
    });

    return (
      <span className={cxs(playerStyle)}>
        <span>{`Player ${playerName}`}</span>
        <br/>
        <span>{isWinner}</span>
      </span>
    );
  }
}

Player.Column = {
  code: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  currentPlayer: PropTypes.string.isRequired,
  winner: PropTypes.string
};
