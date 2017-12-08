import React, {Component} from 'react';
import PropTypes from 'prop-types'

import cxs from 'cxs';

const style = {
  token: {
    width: '50px',
    height: '50px',
    webkitBorderRadius: '25px',
    mozBorderRadius: '25px',
    borderRadius: '25px',
    background: '##0e98e3',
    margin: '10px'
  }
};

export default class Box extends Component {
  render() {
    const tokenStyle = cxs(Object.assign(style.token, {
      background: this.props.token === 'R' ? '#d8544a' : this.props.token === 'J' ? '#ecb538' : '#0e98e3'
    }));

    return (
      <div className={tokenStyle}>
      </div>
    );
  }
}

Box.Column = {
  key: PropTypes.number.isRequired,
  tokens: PropTypes.array.isRequired
};
