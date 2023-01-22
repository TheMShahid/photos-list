import React from "react";

import "./card.styles.css";

const Card = (props) => (
  <div className="card-container">
    <img alt="photos" src={`https://source.unsplash.com/user/c_v_r/100x100`} />
    <h3>{props.album.title}</h3>
  </div>
);

export default Card;
