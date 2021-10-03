import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // const [people, setPeople] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [charDetails, setCharDetails] = useState([]);
  const [searchedChar, setSearchedChar] = useState([]);
  const [nextPage, setNextPage] = useState([]);
  const [previousPage, setPreviousPage] = useState([]);

  const all = [];
  const [allNames, setAllNames] = useState([]);
  const onlyNames = [];

  async function fetchCharacters(url) {
    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data.results);
    setNextPage(data.next);
    setPreviousPage(data.previous);
  }
  async function fetchSingleCharacter(singleUrl) {
    const response = await fetch(singleUrl);
    const data = await response.json();
    setCharDetails(data);
    console.log(charDetails);
  }
  async function fetchData() {
    const page1 = " https://swapi.dev/api/people/?page=1";
    const page2 = " https://swapi.dev/api/people/?page=2";
    const page3 = " https://swapi.dev/api/people/?page=3";
    const page4 = " https://swapi.dev/api/people/?page=4";
    const page5 = " https://swapi.dev/api/people/?page=5";
    const page6 = " https://swapi.dev/api/people/?page=6";
    const page7 = " https://swapi.dev/api/people/?page=7";
    const page8 = " https://swapi.dev/api/people/?page=8";
    const page9 = " https://swapi.dev/api/people/?page=9";

    const getPage1 = axios.get(page1);
    const getPage2 = axios.get(page2);
    const getPage3 = axios.get(page3);
    const getPage4 = axios.get(page4);
    const getPage5 = axios.get(page5);
    const getPage6 = axios.get(page6);
    const getPage7 = axios.get(page7);
    const getPage8 = axios.get(page8);
    const getPage9 = axios.get(page9);

    await axios
      .all([
        getPage1,
        getPage2,
        getPage3,
        getPage4,
        getPage5,
        getPage6,
        getPage7,
        getPage8,
        getPage9,
      ])
      .then(
        axios.spread((...allData) => {
          const allPage1 = allData[0];
          const allPage2 = allData[1];
          const allPage3 = allData[2];
          const allPage4 = allData[3];
          const allPage5 = allData[4];
          const allPage6 = allData[5];
          const allPage7 = allData[6];
          const allPage8 = allData[7];
          const allPage9 = allData[8];

          const combinedAllName = [
            ...allPage1.data.results,
            ...allPage2.data.results,
            ...allPage3.data.results,
            ...allPage4.data.results,
            ...allPage5.data.results,
            ...allPage6.data.results,
            ...allPage7.data.results,
            ...allPage8.data.results,
            ...allPage9.data.results,
          ];
          all.push(combinedAllName);

          setCharacters(allPage1.data.results);
          setNextPage(allPage1.data.next);
          setPreviousPage(allPage1.data.previous);

          all.map((a, index) => {
            setAllNames(a);
          });
          // console.log(allNames);
        })
      )
      .catch((error) => {
        console.log("FETCH FAILED____");
        return error;
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
          </form>
        </div>
      </nav>
      {/* Rendering characters */}

      {searchedChar.length <= 0 ? (
        <div className="row">
          {characters.length < 1 ? (
            <h1>Loading Characters</h1>
          ) : (
            <div>
              {characters.map((character, index) => {
                return (
                  <div key={index} className="col-lg-4  shadow  p-1">
                    {/* if there is no searched character, display all */}

                    <h2>
                      {/* *Make module pop up here, when link is clicked, which shows more details  */}
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
              })}

              <div>
                {previousPage && (
                  <button
                    type="submit"
                    onClick={() => {
                      fetchCharacters(previousPage);
                    }}
                    className="btn btn-outline-primary"
                  >
                    Previous
                  </button>
                )}

                {nextPage && (
                  <button
                    type="submit"
                    onClick={() => {
                      fetchCharacters(nextPage);
                    }}
                    className="btn btn-outline-primary m-2"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        //  search filter

        <div>
          {allNames.map((names, index) => {
            onlyNames.push(names.name);
          })}

          {/* {onlyNames.find((x) => x(searchedChar))<0 {}} */}
          <button
            type="submit"
            onClick={() => {
              fetchSingleCharacter(allNames.url);
            }}
            className="btn btn-primary"
            // data-toggle="modal"
            // data-target="#exampleModal"
          >
            {onlyNames.find((x) => x.includes(searchedChar))}
          </button>
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
    </>
  );
}

export default App;
