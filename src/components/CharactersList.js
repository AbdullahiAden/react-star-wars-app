import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Grid } from "semantic-ui-react";
import Character from "./Character";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);

  let count;
  let previous;
  let nextPageUrl;

  // fetch characters
  async function fetchCharacters(url) {
    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data.results);
    nextPageUrl = data.next;
    console.log(data);
  }

  //   useEffect(() => {
  //     // fetch characters
  //     async function fetchCharacters() {
  //       const response = await fetch(nextPageUrl);
  //       const data = await response.json();
  //       setCharacters(data.results);
  //       console.log(data.next);
  //     }
  //   }, []);
  //   const nextPage = () => {
  //     // fetch characters
  //     async function fetchCharacters() {
  //       const url = `https://swapi.dev/api/people/?{}`;
  //       const response = await fetch(
  //         `https://swapi.dev/api/people/:page=${nextPage}`
  //       );
  //       const data = await response.json();
  //       setCharacters(data.results);
  //       console.log(data.next);
  //     }
  //   };

  useEffect(() => {
    fetchCharacters("https://swapi.dev/api/people/?page=2");
    // fetchCharacters(nextPageUrl);
  }, []);

  console.log(characters);
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

      <div className="container">
        <div className="row">
          <ul className="pagination">
            <Link
              className="border mr-2 p-2  font-weight-bold"
              onClick={fetchCharacters(nextPageUrl)}
            >
              1
            </Link>
            <Link className="border mr-2 p-2  font-weight-bold">2</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharactersList;
