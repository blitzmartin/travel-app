import React from "react";
import Tour from "./components/Tour.js";
import Container from "react-bootstrap/esm/Container.js";
import Button from "react-bootstrap/esm/Button.js";

export default function Tours({ tours, removeTour }) {
  const handleClick = () => {
    console.log("click!")
  }

  return ( 
    <Container>
      {tours.length === 0 
      ? <div>
        <h1>No Tours Left</h1>
        <Button onClick={handleClick}>Refresh</Button>
        </div> 
      : <h1>Our tours</h1>}
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour}/>;
      })}
    </Container>
  );
}