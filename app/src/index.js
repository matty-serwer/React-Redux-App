// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// stylesheets
import './index.css';

// redux (helpers)

// components
import App from './App';

function reducer() {
  return {
    test: 'test reducer'
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
