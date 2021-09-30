import React, { useState } from "react";
import { Search } from "semantic-ui-react";

const Navbar = ({ characters }) => {
  const [searchedChar, setSearchedChar] = useState([]);
  const [charDetails, setCharDetails] = useState([]);

  console.log(characters);
  // console.log(searchedChar);
  async function fetchSingleCharacter(singleUrl) {
    const response = await fetch(singleUrl);
    const data = await response.json();
    setCharDetails(data);
    console.log(charDetails);
  }
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
      {/* 
      {currentPageChar.map((s) => {
        console.log(s);
      })} */}

      {/* 
         {!searchedChar && (
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
                )}   */}
    </>
  );
};

export default Navbar;
