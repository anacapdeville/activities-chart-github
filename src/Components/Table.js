import React from 'react';
import PropTypes from 'prop-types';
import date from '../teste_arvore_data.json';
import Year2016 from './Year2016';
import Year2017 from './Year2017';
import { DivTable, GraySpan, GreenOneSpan, GreenTwoSpan, GreenThreeSpan, GreenFourSpan, DivLabel, Paragraph, Scale } from './styles.js';

class Table extends React.Component {
  convertDate(dt) {
    const newDate = new Date(dt);
    return newDate;
  };

  sumOfContributions() {
    const { year } = this.props;
    const dataFiltered = date.filter((item) => this.convertDate(item.date).getFullYear() === year);
    const contributions = dataFiltered.reduce((sum, item) => {
      return sum + item.count;
    }, 0);
    const contributionsWithComma = contributions.toLocaleString('en');
    return contributionsWithComma;
  };

  render() {
    const { year } = this.props;
    return (
      <div>
        <Paragraph>{ this.sumOfContributions() } contributions in { year}</Paragraph>
        <DivTable>
          { year === 2016 ? <Year2016 /> : <Year2017 /> }
        </DivTable>
        <DivLabel>
          <Scale>Less</Scale>
          <GraySpan />
          <GreenOneSpan />
          <GreenTwoSpan />
          <GreenThreeSpan />
          <GreenFourSpan />
          <Scale>More</Scale>
        </DivLabel>
      </div>
    );
  };
}

Table.propTypes = {
  year: PropTypes.number.isRequired,
};

export default Table;
