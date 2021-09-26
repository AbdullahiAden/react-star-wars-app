import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Grid } from "semantic-ui-react";
import Character from "./Character";
import Navbar from "./Navbar";
import Modal from "./Modal";

const CharactersList = ({ people }) => {
  const [char, setChar] = useState(null);
  // setCharacters(people.results);
  let characters = [];
  characters = people.results;

  const next = people.next;

  // fetch characters
  async function fetchNextPage(url) {
    const response = await fetch(url);
    const data = await response.json();
    setChar(data);
    // console.log(data);
  }

  console.log(people);
  console.log(next);
  return (
    <div>
      <Navbar />
      <h1>Star wars Characters</h1>
      <div className="row">
        {!characters ? (
          <p>Loading</p>
        ) : (
          characters.map((character) => {
            return (
              <div className="col-lg-4  shadow  p-1">
                <h2>
                  <Link to={`${character.url}`}>{character.name}</Link>
                </h2>
              </div>
            );
          })
        )}
      </div>

      <button className="btn btn-outline-primary">{next}</button>
      <Link to={""} className="btn btn-outline-primary">
        2
      </Link>
    </div>
  );
};

export default CharactersList;
