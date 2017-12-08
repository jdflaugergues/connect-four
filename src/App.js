import React, { Component } from 'react';
import cxs from 'cxs';

import {Board, PlayerBoard} from './components';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: 'R'
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleWin = this.handleWin.bind(this);
  }

  handleClick(currentPlayer) {
    this.setState({
      currentPlayer
    });
  }

  handleWin(winner) {
    this.setState({
      winner
    });
  }

  render() {
    const titleStyle = cxs({
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Arial, sans-serif'
    });

    return (
      <div className="App">
        <h1 className={titleStyle}>Connect 4</h1>
        <PlayerBoard currentPlayer={this.state.currentPlayer} winner={this.state.winner}/>
        <Board handleClick={this.handleClick} handleWin={this.handleWin}/>
      </div>
    );
  }
}

export default App;
