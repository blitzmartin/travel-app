import React from "react";
import Tour from "./components/Tour.js";

export default function Tours({ tours }) {
  return (
    <div>
      <h1>Tour</h1>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} />;
      })}
    </div>
  );
}
