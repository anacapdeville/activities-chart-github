import React from 'react';
import Table from './Components/Table';
import { ButtonDiv, ButtonYear } from './Components/styles';

class App extends React.Component {
  constructor() {
    super();
    this.state = {year: 2016};
  };

  handleClick(yr) {
    this.setState({year: yr})
  };

  render() {
    const { year } = this.state;
    return (
      <div>
        <Table year={ year } />
        <ButtonDiv>
          <ButtonYear onClick={() => this.handleClick(2016)}>2016</ButtonYear>
          {' '}
          <ButtonYear onClick={() => this.handleClick(2017)}>2017</ButtonYear>
        </ButtonDiv>
      </div>
    );
  };
}

export default App;
