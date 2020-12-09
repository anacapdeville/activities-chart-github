import React from 'react';
import date from '../teste_arvore_data.json';
import { Gray, GreenOne, GreenTwo, GreenThree, GreenFour } from './styles.js';

class Pixel extends React.Component {
  returnCount() {
    const { dateSelected } = this.props;
    const findData = date.filter((item) => item.date === dateSelected)
    if (findData[0]) {
      return findData[0].count;
    }
    return 0;
  }

  renderPixel() {
    const count = this.returnCount();
    if (count === 0) {
      return (
        <Gray />
      )
    }
    else if (count > 0 && count <= 15) {
      return (
        <GreenOne />
      )
    }
    else if (count >= 16 && count <= 25) {
      return (
        <GreenTwo />
      )
    }
    else if (count >= 26 && count <= 40) {
      return (
        <GreenThree />
      )
    }
    else if (count >= 41) {
      return (
        <GreenFour />
      )
    }
  }
  render() {
    return (
      <div>
        {this.renderPixel()}
      </div>
    )
  }
}

export default Pixel;
