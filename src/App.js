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
      <Navbar characters={characters} />

      {/* Rendering characters */}
      <div className="row">
        {!people.results ? (
          <p>Loading</p>
        ) : (
          characters.map((character, index) => {
            return (
              <div className="col-lg-4  shadow  p-1">
                {/* if there is no searched character, display all */}

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
                {searchedChar && (
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

                <Modal charDetails={charDetails} />
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
