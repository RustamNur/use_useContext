import React from "react";
import "./card.css";


const Card = ({movies}) => {
  return (
    <div className="card_all">
      <div className="card_image">
        <img src={movies.img} alt="" />
      </div>
      <div className="card_description">
        <div className="size">
          <h5 className="title_style">
            {movies.id}&nbsp;&#8226;&nbsp;
            {movies.title}
          </h5>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
