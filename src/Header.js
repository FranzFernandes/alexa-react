import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Button from 'material-ui/Button';
import Appbar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export class Dashboard extends React.Component {
  render(){
    return (<h1>Placeholder for Dashboard</h1>

    )
  }
}
export class Login extends React.Component {
  render(){
    return (
    <Button raised color="primary">
      Placeholder for Login
    </Button>
    )
  }
}

export default class Header extends React.Component {
  render(){
  return(
  <div>
    <Appbar position="static">
      <Toolbar>
        <IconButton color="contrast" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit">
          Title
        </Typography>
        <Link to="/dashboard"><Button color="contrast">Dashboard</Button></Link>
      </Toolbar>
    </Appbar>
    <Switch>
      <Route path = "/dashboard" component={Dashboard} />
      <Route path = "/login" component={Login} />
    </Switch>
  </div>
  )
}
}
