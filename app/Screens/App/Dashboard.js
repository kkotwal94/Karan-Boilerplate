import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Dashboard extends Component {
  render() {
    return (
      <div>
        We're on the dashboard page
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Dashboard;
