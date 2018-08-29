import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import XPage from './pages/XPage';
import XPageTwo from './pages/XPageTwo'
import XCollection from './pages/XCollection'
import XNoMatch from './pages/XNoMatch';
import { XNav } from './components/XNav';

class App extends Component {
  render() {
    return <Router forceRefresh={!'pushState' in window.history}>
      <div>
        <XNav />
        <Switch>
          <Route exact path='/' component={XPage} />
          <Route exact path='/XPageTwo' component={XPageTwo} />
          <Route exact path='/XCollection/:id' component={XCollection} />
          <Route component={XNoMatch} />
        </Switch>
      </div>
    </Router>
  }
};

export default App;
