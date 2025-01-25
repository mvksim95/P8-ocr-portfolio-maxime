import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.sass";
import { FaGithub } from "react-icons/fa";

const Card = ({ id, image, title, location }) => {
  return (
    <Link to={`/project/${id}`} className="card">
      <div className="card__image-container">
        <img src={image} alt={title} className="card__image" />
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__location">{location}</p>
        <div className="card__icons">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
    </Link>
  );
};

export default Card;