import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './master/App';
import './master/main.css';
import { default as registerServiceWorker } from './master/registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
