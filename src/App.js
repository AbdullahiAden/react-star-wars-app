import { Switch, Route, Link } from "react-router-dom";
import CharactersList from "./components/CharactersList";
// import "bootstrap/dist/css/bootstrap.min.css";
import CharacterDetails from "./components/CharacterDetails";
import { Pagination } from "semantic-ui-react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  const [people, setPeople] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [charDetails, setCharDetails] = useState([]);

  // fetch characters
  async function fetchCharacters(url) {
    const response = await fetch(url);
    const data = await response.json();
    setPeople(data);
    setCharacters(data.results);
    // console.log(people);
  }

  useEffect(() => {
    fetchCharacters("https://swapi.dev/api/people");
  }, []);

  // fetch characters
  // function fetchSingleCharacter(singleUrl) {
  //   const characterName = singleUrl.location.pathname;
  //   const newCharacterUrl = characterName.substring(1);

  //   // const response = await fetch(newCharacterUrl);
  //   // const SingleChardata = await response.json();
  //   console.log(singleUrl);
  // }
  async function fetchSingleCharacter(singleUrl) {
    const response = await fetch(singleUrl);
    const data = await response.json();
    setCharDetails(data);
    console.log(charDetails);
  }

  return (
    <>
      <div className="row">
        {!people.results ? (
          <p>Loading</p>
        ) : (
          characters.map((character) => {
            return (
              <div className="col-lg-4  shadow  p-1">
                <h2>
                  {/* *Make module pop up here, when link is clicked, which shows more  */}
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={() => {
                      fetchSingleCharacter(character.url);
                    }}
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    {character.name}
                  </button>
                </h2>
                <p>{character.url}</p>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Character Details
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                          value={character}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div>
                          <h2>{character.name}</h2>
                          <strong>height</strong>
                          <p>{character.height}</p>
                          <strong>mass</strong>
                          <p>{character.mass}</p>
                          <strong>hair color</strong>
                          <p>{character.hair_color}</p>
                          <strong>skin color</strong>
                          <p>{character.skin_color}</p>
                          <p>{character.url}</p>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {people.previous && (
        <button
          type="submit"
          onClick={() => {
            fetchCharacters(people.previous);
          }}
          className="btn btn-outline-primary"
        >
          Previous
        </button>
      )}

      {people.next && (
        <button
          type="submit"
          onClick={() => {
            fetchCharacters(people.next);
          }}
          className="btn btn-outline-primary m-2"
        >
          Next
        </button>
      )}
      <div className="container ">
        <Switch>
          {/* <Route exact path="/">
            <CharactersList people={people} />
          </Route> */}

          {/* <Route path="/:url" component={CharacterDetails}></Route> */}
          {/* <Route path="/:url" component={Pagination}></Route> */}
          <Route path="/modal" component={Modal}></Route>
        </Switch>

        {/* <Pagination /> */}
      </div>
    </>
  );
}

export default App;
