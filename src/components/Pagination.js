import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [characters, setCharacters] = useState([]);

  const [currentPage, setCurrentPage] = useState([]);

  let count;
  let previous;
  let nextPageUrl;

  // fetch characters
  async function fetchCharacters(url) {
    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data.results);
    nextPageUrl = data.next;
    console.log(data);
  }
  useEffect(() => {
    fetchCharacters("https://swapi.dev/api/people/?page=2");
    // fetchCharacters(nextPageUrl);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <ul className="pagination">
          <li>home</li>
          <li>2</li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
