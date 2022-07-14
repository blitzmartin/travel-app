import React from "react";

export default function Tour({ id, name, info, image, price }) {
  return (
    <div className="single-tour">
      <h3>{name}</h3>
      <h5>{price}</h5>
      <p>{info}</p>
      <img src={image} alt={name} />
    </div>
  );
}
