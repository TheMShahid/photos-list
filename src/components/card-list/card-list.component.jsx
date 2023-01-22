import React from "react";
import Card from "../card/card.component";

import "./card-list.styles.css";

const CardList = (props) => (
  <div className="card-list">
    {props.albums.map((album) => (
      <Card key={album.id} album={album} />
    ))}
  </div>
);

export default CardList;
