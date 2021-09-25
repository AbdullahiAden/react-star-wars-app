import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Grid } from "semantic-ui-react";
import Character from "./Character";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const [nextPage, setNextPage] = useState([]);

  let nextPageUrl;

  // fetch characters
  async function fetchCharacters(url) {
    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data.results);
    nextPageUrl = data.next;
    // console.log(data);
  }
  useEffect(() => {
    fetchCharacters("https://swapi.dev/api/people");
    // fetchNextCharacters(nextPage);
  }, []);

  //  fetch nextpage
  async function fetchNextCharacters() {
    const res = await fetch(nextPageUrl);
    const data = await res.json();
    setNextPage(data);
    console.log(data);
  }

  // console.log(characters);
  return (
    <div>
      <h1>Characters</h1>
      <div className="row">
        {/* loop through characters */}

        {!characters && <h1>Loading</h1>}

        {characters.map((character, index) => {
          // console.log(character);
          // pass prop to character component
          return <Character characterData={character} key={index} />;
        })}
      </div>

      {/* * PAGINATION */}
      <div className="container">
        <button onClick={fetchNextCharacters}>Next</button>
      </div>
    </div>
  );
};

export default CharactersList;
