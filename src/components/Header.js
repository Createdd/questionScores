import React, { PropTypes } from 'react';

import Stopwatch from './Stopwatch';
import Stats from './Stats';

const Header = props =>
  (<div className="header">
    <Stats questions={props.questions} />
    <h1>Scoreboard</h1>
    <Stopwatch />
  </div>);

Header.propTypes = {
  questions: React.PropTypes.array.isRequired,
};

export default Header;
