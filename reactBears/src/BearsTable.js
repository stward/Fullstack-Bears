import React from 'react';
import {Table, Button} from 'react-bootstrap';

function DeleteBtn(props) {
  return (<Button bsStyle="primary" onClick={props.onClick}>Delete</Button>);
}

function BearsTable(props) {
  var bears = props.bears.map(function(item) {
    return <tr>
             <td>{item.name}</td>
             <td>{item.species}</td>
             <td>{item.age}</td>
             <td>{item.weight}</td>
             <td>{item.location}</td>
             <td>{item.attitude}</td>
             <td><Button bsStyle="primary">Delete</Button></td>
             <td><Button bsStyle="primary">Update</Button></td>
           </tr>;
  });
  return (
    <Table hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Species</th>
          <th>Age</th>
          <th>Weight</th>
          <th>Location</th>
          <th>Attitude</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {bears}
      </tbody>
    </Table>
  )
}

export default BearsTable;
