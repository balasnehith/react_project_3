import React from "react";
import { useState, useContext} from "react";
import { notInterested } from "../App";

export default function Card({ CardData }) {
  const { id, name, info, image, price } = CardData;
  const [readMore, setReadMore] = useState(false);
  const handleNotInterested = useContext(notInterested);
  return (
    <div className="cardContainer">
      <img src={image} alt={name} />
      <footer>
        <div className="tourInfo">
          <h3>{name}</h3>
          <h3 id="price">${price}</h3>
        </div>
        <div className="textContainer">
          <p>
            {readMore ? `${info}  ` : `${info.substring(0, 200)}... `}
            <button onClick={() => setReadMore((p) => !p)}>{readMore ? `Show less` : "Read more"}</button>
          </p>
        </div>
        <div className="notInterested">
          <button onClick={() => handleNotInterested(id)}>Not Interested</button>
        </div>
      </footer>
    </div>
  );
}
