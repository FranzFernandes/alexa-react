import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Header from './Header.js';

const theme = createMuiTheme();

ReactDOM.render(
  <div>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Header />
      </MuiThemeProvider>
    </BrowserRouter>
  </div>
, document.getElementById('root'),
);

registerServiceWorker();
