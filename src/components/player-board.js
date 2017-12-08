import React, {Component} from 'react';
import PropTypes from 'prop-types'

import cxs from 'cxs';

import Player from './player';

const red = '#d8544a';
const yellow = '#ecb538';

const style = {
  boardPlayer: {
    margin: '50px auto',
  }
};

export default class PlayerBoard extends Component {
  render() {
    const boardPlayerStyle = cxs(Object.assign(style.boardPlayer, {
    }));

    return (
      <div className={boardPlayerStyle}>
        <Player code={'R'} color={red} {...this.props}/>
        <Player code={'J'} color={yellow} {...this.props}/>
      </div>
    );
  }
}

PlayerBoard.Column = {
  currentPlayer: PropTypes.string.isRequired,
  winner: PropTypes.string
};
