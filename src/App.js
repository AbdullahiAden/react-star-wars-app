import axios from "axios";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  const [charDetails, setCharDetails] = useState([]);
  const [searchedChar, setSearchedChar] = useState([]);
  const [nextPage, setNextPage] = useState([]);
  const [previousPage, setPreviousPage] = useState([]);

  const all = [];
  const [allNames, setAllNames] = useState([]);
  const onlyNames = [];
  const allUrl = [];

  async function fetchPageCharacters(url) {
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
        })
      )
      .catch((error) => {
        return error;
      });
  }
  function handleOnClick(clickedCharIndex) {
    // get the clicked index url,
    // fetch with fetchSingleCharacter
    return fetchSingleCharacter(allNames[clickedCharIndex].url);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <a class="navbar-brand text-light mx-2 " href="/">
          <h2>Star Wars</h2>
        </a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01"></div>
        <form
          class="form-inline my-2  my-lg-0 mx-2 "
          action="javascript:void(0)"
        >
          <input
            class="form-control mr-sm-2"
            type="search"
            onChange={(e) => setSearchedChar(e.target.value)}
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </nav>
      {/* Rendering characters */}

      {searchedChar.length <= 0 ? (
        <div className="container ">
          {characters.length < 1 ? (
            <h1>Loading Characters</h1>
          ) : (
            <div className="row">
              {characters.map((character, index) => {
                return (
                  <div
                    key={index}
                    className=" col-lg-4 shadow  p-1"
                    type="submit"
                    onClick={() => {
                      fetchSingleCharacter(characters[index].url);
                    }}
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    {/* if there is no searched character, display all */}

                    <h3>
                      {/* *Make module pop up here, when link is clicked, which shows more details  */}
                      <div
                      // className="btn btn-primary"
                      >
                        {characters[index].name}
                      </div>
                    </h3>
                    <button className="btn btn-sm btn-outline-primary">
                      View More
                    </button>
                  </div>
                );
              })}

              <div className="container">
                {previousPage && (
                  <button
                    type="submit"
                    onClick={() => {
                      fetchPageCharacters(previousPage);
                    }}
                    className="btn btn-primary"
                  >
                    Previous
                  </button>
                )}

                {nextPage && (
                  <button
                    type="submit"
                    onClick={() => {
                      fetchPageCharacters(nextPage);
                    }}
                    className="btn btn-primary m-2"
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

        <div className="container shadow p-3 ">
          {allNames.map((names, index) => {
            onlyNames.push(names.name);
            allUrl.push(names.url);
          })}

          <div
            className="container "
            onClick={() => {
              // send the index of the character to handleOnClick func, which triggers fetchSingleCharacter with the correct url
              handleOnClick(
                onlyNames.indexOf(
                  onlyNames.find((x) => x.includes(searchedChar))
                )
              );
            }}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <h3>{onlyNames.find((x) => x.includes(searchedChar))}</h3>

            <button className="btn btn-sm btn-outline-primary">
              View More
            </button>
          </div>
        </div>
      )}

      <Modal charDetails={charDetails} />
    </>
  );
}

export default App;
