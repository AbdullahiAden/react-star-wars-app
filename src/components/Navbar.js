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
        <a class="navbar-brand text-light mx-2 " href="/">
          <h2>Star Wars</h2>
        </a>
        {/* <button
          class="navbar-toggler navbar-dark"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon  "></span>
        </button> */}

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
    </>
  );
};

export default Navbar;
