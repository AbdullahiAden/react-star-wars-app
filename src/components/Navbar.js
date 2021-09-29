import React, { useState } from "react";
import { Search } from "semantic-ui-react";

const Navbar = (people) => {
  const [searchedChar, setSearchedChar] = useState([]);
  const [currentPageChar, setCurrentPageChar] = useState([]);
  // const [q, setQ] = useState([]);
  setCurrentPageChar(people.data);

  // get the searched word,
  {
    // console.log(people.data);
    console.log(searchedChar);
  }

  // loop through data.results, if searched word is found, get its url,

  // if not fetch next page, search, if found render

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand text-light " href="/">
            <h2>Star Wars</h2>
          </a>

          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              // value={searchedChar}
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
    </div>
  );
};

export default Navbar;
