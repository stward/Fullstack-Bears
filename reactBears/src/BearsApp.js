import React from 'react';
import './BearsApp.css';
import Home from './Home';
import ViewAllBears from './ViewAllBears';
import PostBearsData from './PostBearsData';

var BearsApp = React.createClass({
  getInitialState: function() {
    return {activeComponent: "Home"};
  },
  updateActiveComponent: function (whichIsActive) {
    this.setState({activeComponent: whichIsActive});
  },
  renderComponent: function() {
    if (this.state.activeComponent === 'Home') {
      return <Home updateActiveComponent={this.updateActiveComponent} />
    } else if (this.state.activeComponent === 'viewAll') {
      return <ViewAllBears />
    } else if (this.state.activeComponent === 'postNew') {
      return <PostBearsData />
    } else {
      return null
    }
  },
  render: function() {
    return (
      <div>
        {this.renderComponent()}
      </div>
    );
  }
});

export default BearsApp;
