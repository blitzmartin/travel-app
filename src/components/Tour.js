import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  const handleClick = () => {
    setReadMore(!readMore);
  }

  return (
    <Card className="card-style">
      <Card.Img className="card-img" variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">${price}</Card.Subtitle>
        <Card.Text>{readMore ? info : `${info.substring(0, 230)}...`}<Button variant="link" size="sm" onClick={handleClick} className="link-btn">
          {readMore
          ? "Show less"
          : "Read more"
          }
          </Button></Card.Text>
        <Button variant="danger" onClick={() => removeTour(id)}>Not Interested</Button>
      </Card.Body>
    </Card>
  );
}
