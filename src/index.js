import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import reducers from './reducers/index.js';
import MyMap from './containers/map-container.js'
import './index.css';

import * as serviceWorker from './serviceWorker';

let store = createStore(reducers, applyMiddleware(thunk, logger))

class App extends Component {
  render(){
    return(
      <MyMap></MyMap>
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
