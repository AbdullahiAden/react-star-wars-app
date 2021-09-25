import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Grid } from "semantic-ui-react";
import Character from "./Character";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  let next;

  // fetch characters
  async function fetchCharacters(url) {
    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data.results);

    console.log(data);
    next = data.next;
  }
  async function fetchPage1() {
    const response = await fetch("https://swapi.dev/api/people");
    const data = await response.json();
    setCharacters(data.results);
    // console.log(data);
  }
  async function fetchPage2() {
    const response = await fetch("https://swapi.dev/api/people/?page=2");
    const data = await response.json();
    setCharacters(data.results);
    // console.log(data);
  }
  async function fetchPage3() {
    const response = await fetch("https://swapi.dev/api/people/?page=3");
    const data = await response.json();
    setCharacters(data.results);
    // console.log(data);
  }

  async function fetchNextPage(pageNumber) {
    const response = await fetch(
      `https://swapi.dev/api/people/?page=${pageNumber}`
    );
    const data = await response.json();
    setCharacters(data.results);
    // console.log(data);
  }
  useEffect(() => {
    fetchCharacters("https://swapi.dev/api/people");
    // fetchNextCharacters(nextPage);
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      <div className="row">
        {/* loop through characters */}

        {!characters && <h1>Loading</h1>}

        {characters.map((character, index) => {
          // console.log(character);
          // pass prop to character component
          // return <Character characterData={character} key={index} />;
          return <Character characterData={character} key={index} />;
        })}
      </div>

      <div>
        <button onClick={fetchPage1}>1</button>
        <button onClick={fetchPage2}>2</button>
        <button onClick={fetchPage3}>3</button>
        {/* <button onClick={fetchNextPage(4)}>4</button> */}
      </div>
    </div>
  );
};

export default CharactersList;
