import React, { useEffect, useState } from "react";

const CharacterDetails = (props) => {
  const [charDetails, setCharDetails] = useState([]);

  const characterName = props.location.pathname;
  const newCharacterUrl = characterName.substring(1);
  console.log(newCharacterUrl);

  // fetch characters
  async function fetchNextCharacters() {
    const response = await fetch(newCharacterUrl);
    const SingleChardata = await response.json();
    setCharDetails(SingleChardata);
    console.log(SingleChardata);
  }
  useEffect(() => {
    fetchNextCharacters();
  }, []);

  return (
    <div>
      <h3>Character details</h3>

      {/* *____________________ONLY SHOWING FIRST CHAR DETAILS___________________ */}
      <div className="shadow ">
        <h2>{charDetails.name}</h2>
        <strong>height</strong>
        <p>{charDetails.height}</p>
        <strong>mass</strong>
        <p>{charDetails.mass}</p>
        <strong>hair color</strong>
        <p>{charDetails.hair_color}</p>
        <strong>skin color</strong>
        <p>{charDetails.skin_color}</p>
        <p>{charDetails.url}</p>
      </div>
    </div>
  );
};

export default CharacterDetails;
