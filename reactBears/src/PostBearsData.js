import React from 'react';
import BearPostForm from './BearPostForm';
import $ from 'jquery';

var PostBearsData = React.createClass({
  getInitialState: function() {
    return (
      {
        bearName: null,
        bearSpecies: null,
        bearAge: null,
        bearLocation: null,
        bearAttitude: null,
        bearWeight: null
      }
    )
  },
  updateBearName: function (name) {
    var data = this.state;
    data.bearName = name;
    this.setState(data);
  },
  updateBearAge: function (age) {
    var data = this.state;
    data.bearAge = age;
    this.setState(data);
  },
  updateBearWeight: function (weight) {
    var data = this.state;
    data.bearWeight = weight;
    this.setState(data);
  },
  updateBearSpecies: function (species) {
    var data = this.state;
    data.bearSpecies = species;
    this.setState(data);
  },
  updateBearLocation: function (location) {
    var data = this.state;
    data.bearLocation = location;
    this.setState(data);
  },
  updateBearAttitude: function (attitude) {
    var data = this.state;
    data.bearAttitude = attitude;
    this.setState(data);
  },
  render: function() {
    return (
      <div>
        <BearPostForm updateBearName={this.updateBearName}
                      updateBearAge={this.updateBearAge}
                      updateBearWeight={this.updateBearWeight}
                      updateBearSpecies={this.updateBearSpecies}
                      updateBearLocation={this.updateBearLocation}
                      updateBearAttitude={this.updateBearAttitude} />
      </div>
    )
  }
});

export default PostBearsData;
