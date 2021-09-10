import React from "react";
import "./card-list.styles.scss";
import Card from "../card/card.component";

function CardList(props) {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

export default CardList;
