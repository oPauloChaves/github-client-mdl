import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './todo/reducers'
import App from './todo/components/App'

let store = createStore(todoApp)

// https://github.com/facebookincubator/create-react-app/issues/93#issuecomment-282359099
const render = (Component) => {
  return ReactDOM.render(
    <Provider store={store}>
      <Component/>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./todo/components/App', () => {
    const NextApp = require('./todo/components/App').default;
    render(NextApp);
  });
}
