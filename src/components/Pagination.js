import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [characters, setCharacters] = useState([]);

  const [currentPage, setCurrentPage] = useState([]);

  let count;
  let previous;
  let nextPageUrl;

  // fetch next page characters

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
