import React, { useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function List() {
  const [Data, setData] = useState([
    { key: 1, name: 'Pizza' },
    { key: 2, name: 'Burger' },
    { key: 3, name: 'Sandwich'},
    { key: 4, name: 'Popcorn'},
    { key: 5, name: 'Fries'},
    { key: 6, name: 'Sea-Food'},
    { key: 7, name: 'Pasta'},
    { key: 8, name: 'Cakes'},
  ]);

  return (
    <Container> 
      <h1>List Of Food Items</h1>
      <ListGroup>
        {Data.map((item) => (
          <ListGroup.Item variant="dark" key={item.key}>{item.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default List;
