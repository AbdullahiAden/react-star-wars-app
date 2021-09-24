import React, { useEffect, useState } from "react";

const CharacterDetails = (props) => {
  const [charDetails, setCharDetails] = useState([]);

  useEffect(() => {
    const characterName = props.match.params.name;
    console.log(characterName);
  }, []);

  return (
    <div>
      <h2>Character details</h2>

      <h2>{props.characterName}</h2>
    </div>
  );
};

export default CharacterDetails;
