import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Scoreboard from './src/containers/Scoreboard';
import QuestionReducer from './src/reducers/question';

const store = createStore(
  QuestionReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <Scoreboard />
  </Provider>,
	document.getElementById('root'),
);
