import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// global.backendUrl = "https://cors-example-api.apps.openxcell.dev"
global.backendUrl = "http://localhost:9000"
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
