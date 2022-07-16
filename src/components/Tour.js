import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function Tour({ id, name, info, image, price }) {
  return (
    <Card className="card-style">
       <Card.Img variant="top" src={image} alt={name} />
       <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">${price}</Card.Subtitle>
        <Card.Text>{info}</Card.Text>
        <Button variant="primary">Not Interested</Button>
      </Card.Body>
    </Card>
  );
}
