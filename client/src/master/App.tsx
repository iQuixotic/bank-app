import * as React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import { 
  Main
} from '../containers';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Main} />
        </div>
      </Router>
    );
  }
}

export default App;


