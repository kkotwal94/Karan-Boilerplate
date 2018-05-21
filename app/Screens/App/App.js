import React, { Component } from 'react';
import { Switch } from 'react-router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import AppBar from '@material-ui/core/AppBar';
import classNames from 'classnames';
import Home from './Home';
import Dashboard from './Dashboard';
import Navigation from '../../Components/Navigation';
import AppLayout from '../../Layout/AppLayout';
import Sidebar from '../../Components/Sidebar';
import Content from '../../Components/Content';
import styles from '../../Css/main';
import SidebarContext from '../../Context/SidebarContext';

const cx = classNames.bind(styles);
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: red,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarOpen: false,
    };
  }

  handleDrawerOpen = () => {
    this.setState(state => ({
      sideBarOpen: true,
    }));
  };

  handleDrawerClose = () => {
    this.setState(state => ({
      sideBarOpen: false,
    }));
  };

  render() {
    const { sideBarOpen } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <AppLayout>
          <SidebarContext.Provider value={sideBarOpen}>
            <Navigation handleDrawerOpen={this.handleDrawerOpen} />
            <Sidebar handleDrawerClose={this.handleDrawerClose} />
          </SidebarContext.Provider>
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </Content>
        </AppLayout>
      </MuiThemeProvider>
    );
  }
}

export default App;
