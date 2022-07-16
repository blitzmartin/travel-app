import React from "react";
import Tour from "./components/Tour.js";
import Container from "react-bootstrap/esm/Container.js";

export default function Tours({ tours }) {
  return (
    <Container>
      <h1>Our tours</h1>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} />;
      })}
    </Container>
  );
}
