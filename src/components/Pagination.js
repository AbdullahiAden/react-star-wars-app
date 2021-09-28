import React, { useEffect, useState } from "react";

const Pagination = (people) => {
  // setCharacters(people.results);
  console.log(people);
  let characters = [];
  characters = people.results;

  // const next = people.next;

  // fetch characters
  async function fetchNextPage(url) {
    const response = await fetch(url);
    const data = await response.json();
    // setChar(data);
    // console.log(data.results);
    // characters = [];
    characters = data.results;
    console.log(characters);
  }
  return <h1>Pagination</h1>;
};

export default Pagination;
