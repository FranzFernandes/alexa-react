import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme();

export default class Home extends React.Component {
  render() {
    return (
    <MuiThemeProvider theme={theme}>
      <div className="Home">
        <Header />
        <Main />
      </div>
    </MuiThemeProvider>
    );
  }
}
