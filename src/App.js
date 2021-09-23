import { useEffect, useState } from "react";
import { Card, Grid } from "semantic-ui-react";
import CharactersList from "./components/CharactersList";

function App() {
  // const [characters, setCharacters] = useState([]);

  // // fetch characters
  // async function fetchCharacters() {
  //   const response = await fetch("https://swapi.dev/api/people");
  //   const data = await response.json();
  //   setCharacters(data.results);
  // }

  // useEffect(() => {
  //   fetchCharacters();
  // }, []);

  // console.log(characters);

  return (
    <>
      {/* ------------------------------------------- */}
      <h1>Characters</h1>
      <Grid columns={3}>
        {/* loop through characters */}

        {characters.map((character, index) => {
          return (
            <Grid.Column key={index}>
              <Card>
                <Card.Content>
                  <Card.Header>{character.name}</Card.Header>
                  <Card.Description>
                    <strong>Height</strong>
                    <p>{character.height}</p>
                    <strong>Mass</strong>
                    <p>{character.mass}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        })}
      </Grid>
    </>
  );
}

export default App;
