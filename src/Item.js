import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Item extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>{this.props.item.name}</ListGroupItem>
      </ListGroup>
    );
  }
}

export default Item;
