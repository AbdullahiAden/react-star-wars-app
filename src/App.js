import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import CharactersList from "./components/CharactersList";
// import "bootstrap/dist/css/bootstrap.min.css";
import CharacterDetails from "./components/CharacterDetails";
import { Pagination } from "semantic-ui-react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { objectExpression } from "@babel/types";

function App() {
  const [people, setPeople] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [charDetails, setCharDetails] = useState([]);
  const [searchedChar, setSearchedChar] = useState([]);
  const all = [];
  const names = [];
  // fetch characters
  async function fetchCharacters(url) {
    const response = await fetch(url);
    const data = await response.json();
    setPeople(data);
    setCharacters(data.results);
    console.log(data);
  }

  const fetchData = () => {
    const page1 = " https://swapi.dev/api/people/?page=1";
    const page2 = " https://swapi.dev/api/people/?page=2";

    const getPage1 = axios.get(page1);
    const getPage2 = axios.get(page2);

    axios.all([getPage1, getPage2]).then(
      axios.spread((...allData) => {
        const allPage1 = allData[0];
        const allPage2 = allData[1];

        // console.log(allPage1.data);
        // console.log(allPage2.data);

        all.push(allPage1.data.results, allPage2.data.results);
        // console.log(all);

        all.map((a, index) => {
          // console.log(a);
          a.map((e) => {
            console.log(e.name);

            names.push(e.name.toString().toLowerCase());
            // console.log(names);
            // if (names.includes(searchedChar)) {
          });
          // ** seach by last or firstname
          const el = names.find((z) => z.includes(searchedChar));
          console.log(el);
        });
      })
    );
  };
  useEffect(() => {
    fetchData();
    // fetchCharacters("https://swapi.dev/api/people");
    // fetchAllCharacters("https://swapi.dev/api/people");
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

          <form class="form-inline my-2 my-lg-0 " action="javascript:void(0)">
            <input
              class="form-control mr-sm-2"
              type="search"
              onChange={(e) => setSearchedChar(e.target.value)}
              placeholder="Search"
              aria-label="Search"
            />

            {/* <button class="btn btn-outline-success my-2 my-sm-0">Search</button> */}
          </form>
        </div>
      </nav>
      {/* Rendering characters */}

      {searchedChar == "" ? (
        <div className="row">
          {!characters ? (
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
                  </h2>
                  <p>{character.url}</p>
                </div>
              );
            })
          )}
        </div>
      ) : (
        all.map((a, index) => {
          console.log(a);
          a.map((e) => {
            return (
              <div>
                {searchedChar == e.name && (
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
                )}
              </div>
            );
          });
        })
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
      <div>
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
      </div>
    </>
  );
}

export default App;
