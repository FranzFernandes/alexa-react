import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </div>
, document.getElementById('root'),
);

registerServiceWorker();
