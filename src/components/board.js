import React, {Component}  from 'react';
import PropTypes from 'prop-types'
import cxs from 'cxs';

import _ from 'lodash';

import {Column} from '../components';


// Scan the board for a given player, if he win
function scanBoard(games, player, c, l) {
  const isWinner = _.repeat(player, 3);

  return _.reduce(_.range(1, 4), (acc, n) => `${acc}${_.get(games, [c+n, l])}`, '') === isWinner ||
    _.reduce(_.range(1, 4), (acc, n) => `${acc}${_.get(games, [c, l+n])}`, '') === isWinner ||
    _.reduce(_.range(1, 4), (acc, n) => `${acc}${_.get(games, [c+n,l+n])}`, '') === isWinner ||
    _.reduce(_.range(1, 4), (acc, n) => `${acc}${_.get(games, [c+n, l-n])}`, '') === isWinner;
}

// Check if exist a winner on board
function checkWinner(games) {
  return games.reduce((acc, column, c) => {
    return acc || column.find((player, l) => scanBoard(games, player, c, l));
  }, '');
}

export default class Board extends Component {

  constructor(props) {
    super(props);

    this.state = {
      game: _.times(7, ()=>[]),
      currentPlayer: 'R',
      gameFinished: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(colNumber) {
    if (this.state.gameFinished) {
      return;
    }

    const column = this.state.game[colNumber];

    if (column.length >= 6) {
      return;
    }

    const player = this.state.currentPlayer;
    column.push(player);
    const winner = checkWinner(this.state.game);
    const currentPlayer = player === 'R' ? 'J' : 'R';
    this.setState({
      currentPlayer,
      game: this.state.game,
      gameFinished: !!winner
    });
    if (!!winner) {
      return this.props.handleWin(winner);
    }
    this.props.handleClick(currentPlayer);
  }

  render() {
    const boardStyle = cxs({
      textAlign: 'center'
    });

    return (
      <div className={boardStyle}>
        {this.state.game.map((value, colNumber) =>
          <Column
            handleClick={this.handleClick}
            key={colNumber}
            colNumber={colNumber}
            tokens={value}
          />
        )}
      </div>
    );
  }
}


Board.Column = {
  handleClick: PropTypes.func.isRequired,
  handleWin: PropTypes.func.isRequired
};

