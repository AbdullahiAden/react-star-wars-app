import React, { useState } from "react";
import { Link } from "react-router-dom";

// recieve object from characterList
// object destsructure
const Character = ({ characterData }) => {
  const [charData, setCharData] = useState([]);
  console.log("----");
  console.log(characterData);

  return (
    //   single character stylings
    <div className="col-lg-4  shadow  p-1">
      <h2></h2>
      <h2>
        <Link to={`${characterData.url}`}>{characterData.name}</Link>
      </h2>
    </div>
  );
};

export default Character;
