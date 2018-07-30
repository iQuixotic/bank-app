import * as React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import { 
  Add,
  Ledger,
  Main,
} from '../containers';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Route exact={true} path="/" component={Main} />
          <Route exact={true} path="/id/:id" component={Ledger} />
          <Route exact={true} path="/new" component={Add} />
        </div>
      </Router>
    );
  }
}

export default App;


