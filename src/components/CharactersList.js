import React, { useEffect, useState } from "react";
import { Card, Grid } from "semantic-ui-react";
import Character from "./Character";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  // fetch characters
  async function fetchCharacters() {
    const response = await fetch("https://swapi.dev/api/people");
    const data = await response.json();
    setCharacters(data.results);
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  //   console.log(characters);
  return (
    <div>
      <h1>Characters</h1>
      <div className="row">
        {/* loop through characters */}

        {characters.map((character, index) => {
          // console.log(character);
          // pass prop to character component
          return <Character characterData={character} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CharactersList;
