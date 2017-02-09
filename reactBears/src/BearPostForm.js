import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

function BearPostForm(props) {
  return (
    <div>
      <Form onSubmit={() => props.onSubmit()} />
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl type='text' placeholder='Name' onChange={(event) => props.updateBearName(event.target.value)} />
          <ControlLabel>Age</ControlLabel>
          <FormControl type='text' placeholder='Age' onChange={(event) => props.updateBearAge(event.target.value)} />
          <ControlLabel>Weight</ControlLabel>
          <FormControl type='text' placeholder='Weight' onChange={(event) => props.updateBearWeight(event.target.value)} />
          <ControlLabel>Species</ControlLabel>
          <FormControl type='text' placeholder='Species' onChange={(event) => props.updateBearSpecies(event.target.value)} />
          <ControlLabel>Location</ControlLabel>
          <FormControl type='text' placeholder='Location' onChange={(event) => props.updateBearLocation(event.target.value)} />
          <ControlLabel>Attitude</ControlLabel>
          <FormControl type='text' placeholder='Attitude' onChange={(event) => props.updateBearAttitude(event.target.value)} />
          <input type='submit' />
        </FormGroup>
    </div>
  );
}

export default BearPostForm;
