import React, { useState } from "react";
import { Link } from "react-router-dom";

// recieve object from characterList
// object destsructure
const Character = ({ characterData }) => {
  const [charData, setCharData] = useState([]);
  console.log(characterData);

  return (
    //   single character stylings
    <div className="col-lg-4  shadow  p-1">
      <h2></h2>
      <h2>
        <Link to={`/characterDetails/${characterData.name}`}>
          {characterData.name}
        </Link>
      </h2>
      <div>
        <strong>height</strong>
        <p>{characterData.height}</p>
      </div>
      <div>
        <strong>mass</strong>
        <p>{characterData.mass}</p>
      </div>
    </div>
  );
};

export default Character;
