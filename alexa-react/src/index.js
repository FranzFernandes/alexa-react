import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header.js';
import WebFontLoader from 'webfontloader';
import './index.css';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

ReactDOM.render(
  <div>
    <BrowserRouter>
        <Header />
    </BrowserRouter>
  </div>
, document.getElementById('root'),
);

registerServiceWorker();
