import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Grid } from "semantic-ui-react";
import Character from "./Character";
import Navbar from "./Navbar";
import Modal from "./Modal";

const CharactersList = ({ people }) => {
  // const [characters, setCharacters] = useState(null);
  // setCharacters(people.results);
  let characters = [];
  characters = people.results;

  console.log(characters);
  return (
    <div>
      <Navbar />
      <h1>Star wars Characters</h1>
      <div className="row">
        {characters.map((character) => {
          return (
            <div className="col-lg-4  shadow  p-1">
              <h2>
                <Link to={`${character.url}`}>{character.name}</Link>
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharactersList;
