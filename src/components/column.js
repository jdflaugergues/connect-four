import React, {Component} from 'react';
import PropTypes from 'prop-types'

import cxs from 'cxs';
import _ from 'lodash';

import {Box} from '../components';

const boxes = _.times(6, _.noop);

export default class Column extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleClick(this.props.colNumber);
  }

  handleMouseOver() {
    // console.log('hover');
  }

  render() {
    const columnStyle = cxs({
      backgroundColor: '#175dcc',
      display: 'inline-block'
    });

    return (
      <span
        className={columnStyle}
        onClick={this.handleClick}
        onMouseOver={this.handleMouseOver}>
        {boxes.map((value, boxNumber) =>
          <Box
            key={boxNumber}
            token={this.props.tokens[5-boxNumber]}
          />
        )}
      </span>
    );
  }
}

Event.Column = {
  handleClick: PropTypes.func.isRequired,
  key: PropTypes.number.isRequired,
  colNumber: PropTypes.number.isRequired,
  tokens: PropTypes.array.isRequired,
  nbMaxColumn: PropTypes.number.isRequired
};
