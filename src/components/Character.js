import React, { useState } from "react";

// recieve object from characterList
// object destsructure
const Character = ({ characterData }) => {
  const [charData, setCharData] = useState([]);
  console.log(characterData);

  return (
    //   single character stylings
    <div className="col-lg-4  shadow  p-1">
      <h2>{characterData.name}</h2>
      <button className="btn  btn-primary">View</button>
    </div>
  );
};

export default Character;
