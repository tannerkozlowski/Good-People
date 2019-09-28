import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import history from 'browserHistory';

import Home from 'modules/Home';
import VideoPage from 'modules/VideoPage';

import 'styles/global.scss';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/video" component={VideoPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
