import React from 'react';
import { Card} from 'react-bootstrap';
import './Cards.css';

function Cards(props) {

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={props.myCards.img} />
        <Card.Body>
          <Card.Title className="card-title">{props.myCards.title}</Card.Title>
          <Card.Text>{props.myCards.text}</Card.Text>
          {/*<Button variant='primary'>Go somewhere</Button>*/}
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
