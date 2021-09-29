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
  const [searchedChar, setSearchedChar] = useState([]);

  // fetch characters
  async function fetchCharacters(url) {
    const response = await fetch(url);
    const data = await response.json();
    setPeople(data);
    setCharacters(data.results);
    console.log(data);
  }

  useEffect(() => {
    fetchCharacters("https://swapi.dev/api/people");
  }, []);

  async function fetchSingleCharacter(singleUrl) {
    const response = await fetch(singleUrl);
    const data = await response.json();
    setCharDetails(data);
    console.log(charDetails);
  }

  return (
    <>
      {/* <Navbar data={people} /> */}

      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <button
          class="navbar-toggler navbar-dark"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon  "></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand text-light " href="/">
            <h2>Star Wars</h2>
          </a>

          <form class="form-inline my-2 my-lg-0 " action="/searchedChar">
            <input
              class="form-control mr-sm-2"
              type="search"
              onChange={(e) => setSearchedChar(e.target.value)}
              placeholder="Search"
              aria-label="Search"
            />

            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      {/* Rendering characters */}
      <div className="row">
        {!people.results ? (
          <p>Loading</p>
        ) : (
          characters.map((character, index) => {
            return (
              <div className="col-lg-4  shadow  p-1">
                {/* if there is no searched character, display all */}
                {!searchedChar ? (
                  <h2>
                    {/* *Make module pop up here, when link is clicked, which shows more  */}
                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={() => {
                        fetchSingleCharacter(characters[index].url);
                      }}
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      {characters[index].name}
                    </button>

                    <p>{character.url}</p>
                  </h2>
                ) : (
                  <div>
                    {searchedChar === character.name ? (
                      <div>
                        <button
                          className="btn btn-primary"
                          type="submit"
                          onClick={() => {
                            fetchSingleCharacter(characters[index].url);
                          }}
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          {characters[index].name}
                        </button>
                      </div>
                    ) : (
                      <p>{searchedChar + "Not Found"}</p>
                    )}
                  </div>
                )}

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
                          // value={character}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div>
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
        {/* // get the searched word, */}
        {/* {console.log(searchedChar)} */}

        {/* // loop through data.results, if searched word is found, get its url,*/}
        {/* {characters.map((s) => {
          // console.log(s);
          if (searchedChar === s.name) {
            console.log(s.url);
            <h2>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={() => {
                  fetchSingleCharacter(s.url);
                }}
              >
                {s.name}
              </button>
            </h2>;
          }
        })} */}

        {/* if not fetch next page, search, if found render */}
      </div>

      {/* <Switch>
        <Route path="/searchedchar" component={}></Route>
      </Switch> */}
    </>
  );
}

export default App;
