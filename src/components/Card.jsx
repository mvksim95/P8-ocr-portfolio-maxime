import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.sass";


const Card = ({ id, image, title, description }) => {
  return (
    <Link to={`/project/${id}`} className="card">
      <div className="card__image-container">
        <img src={image} alt={title} className="card__image" />
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
    </Link>
  );
};

export default Card;