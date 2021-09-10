import React from "react";
import "./card.styles.scss";

class Card extends React.Component {
  render() {
    return (
      <div className="card-container">
        <img
          alt="monster"
          src={`https://robohash.org/${this.props.monster.id}?set=set2&size=180x180`}
        />
        <h1> {this.props.monster.name} </h1>
        <p> {this.props.monster.email} </p>
      </div>
    );
  }
}

export default Card;
