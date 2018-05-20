import React, { Component } from 'react';
import { Switch } from 'react-router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import AppBar from '@material-ui/core/AppBar';
import Home from './Home';
import Dashboard from './Dashboard';
import Navigation from '../../Components/Navigation';


const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: red,
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
