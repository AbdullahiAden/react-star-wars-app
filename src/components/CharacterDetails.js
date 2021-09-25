import React, { useEffect, useState } from "react";

const CharacterDetails = (props) => {
  const [charDetails, setCharDetails] = useState([]);
  // const url = `https://swapi.dev/api/people/?page=2`

  useEffect(() => {
    // * fetch all  characters
    // * metch name with single character
    const characterName = props.match.params.name;

    console.log(charDetails);
    setCharDetails(characterName);
  }, []);

  return (
    <div>
      <h2>Character details</h2>

      <h2>{charDetails}</h2>
    </div>
  );
};

export default CharacterDetails;
