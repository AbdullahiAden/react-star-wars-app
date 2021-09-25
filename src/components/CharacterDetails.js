import React, { useEffect, useState } from "react";

const CharacterDetails = (props) => {
  const [charDetails, setCharDetails] = useState([]);
  // const url = `https://swapi.dev/api/people/?page=2`

  // fetch characters
  async function fetchCharacters(url) {
    const response = await fetch(url);
    const data = await response.json();
    setCharDetails(data.results);
    console.log(data);
  }

  useEffect(() => {
    // * fetch all  characters
  }, []);

  return (
    <div>
      <h2>Character details</h2>

      <h2>{charDetails}</h2>
    </div>
  );
};

export default CharacterDetails;
