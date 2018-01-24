import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {withStyles} from 'material-ui/styles';

//import views
import Home from './Home.js';
import Dashboard from './views/Dashboard.js';
import Login from './views/Login.js';
import About from './views/About.js';

//Appbar imports
import Button from 'material-ui/Button';
import Appbar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = {
  root: {
    width: '100%',
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButtons: {
    display: 'flex',
    float: 'none',
    marginRight: 0,
    marginLeft: 'auto',
  },
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      title: 'Home',
    };
  }

  handleClick(newState) {
    this.setState({
      title: newState,
    });
  }
  render() {
    return (
      <div>
        <Appbar position="static" title={this.state.title}>
          <Toolbar>
            <Typography type="title" color="inherit">
              {this.state.title}
            </Typography>
            <div style={styles.menuButtons}>
              <Link to="/">
                <Button onClick={() => this.handleClick('Home')}>Home</Button>
              </Link>
              <Link to="/dashboard">
                <Button
                  onClick={() => this.handleClick('Dashboard')}>
                  Dashboard
                </Button>
              </Link>
              <Link to="/login">
                <Button onClick={() => this.handleClick('Login')}>Login</Button>
              </Link>
              <Link to="/about">
                <Button onClick={() => this.handleClick('About')}>About</Button>
              </Link>
            </div>
          </Toolbar>
        </Appbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
