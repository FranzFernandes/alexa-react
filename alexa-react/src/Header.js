import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import {Route, Switch} from 'react-router-dom';
import {NavigationDrawer} from 'react-md';

//import views
import Home from './views/Home.js';
import Dashboard from './views/Dashboard.js';
import About from './views/About.js';
import NavItemLink from './NavItemLink.js';

const navItems = [
  {
    label: 'Home',
    to: '/',
    exact: true,
    icon: 'home',
  },
  {
    label: 'Dashboard',
    to: '/Dashboard',
    icon: 'dashboard',
  },
  {
    label: 'About',
    to: '/About',
    icon: 'face',
  },
];

class Header extends PureComponent {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  constructor(props) {
    super();
    this.state = {toolbarTitle: this.getCurrentTitle(props)};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({toolbarTitle: this.getCurrentTitle(nextProps)});
  }

  getCurrentTitle = ({location: {pathname}}) => {
    const lastSection = pathname.substring(pathname.lastIndexOf('/') + 1);
    if (lastSection === 'views' || lastSection === '') {
      return 'Home';
    }

    return lastSection;
  };

  render() {
    const {toolbarTitle} = this.state;
    const {location} = this.props;
    return (
      <NavigationDrawer
        drawerTitle="Alexa-react"
        toolbarTitle={toolbarTitle}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT}
        desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT}
        // toolbarZDepth={0}
        navItems={navItems.map(props => (
          <NavItemLink {...props} key={props.to} />
        ))}>
        <div className="App">
          <header className="App-header">
          </header>
        </div>
        <Switch key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/About" component={About} />
        </Switch>
      </NavigationDrawer>
    );
  }
}

export default withRouter(Header);
