import React from 'react';

var Home = function(props) {
  return (
    <div>
      <h1>Bears</h1>
      <button onClick={props.updateActiveComponent.bind(this, 'viewAll')}>View All Bears</button>
      <button onClick={props.updateActiveComponent.bind(this, 'postNew')}>Post New Bear</button>
    </div>
  )
}

export default Home;
