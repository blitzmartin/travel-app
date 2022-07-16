import React from "react";
import Tour from "./components/Tour.js";
import Container from "react-bootstrap/esm/Container.js";
import Button from "react-bootstrap/esm/Button.js";

export default function Tours({ tours, removeTour }) {
  return (
    <Container>
      <h1>Our tours</h1>
      <hr />
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </Container>
  );
}
