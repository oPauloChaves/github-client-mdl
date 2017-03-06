import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configStore from './store/configStore'
import App from './containers/app/App'

import './index.css';

const store = configStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
