import { Switch, Route } from "react-router-dom";
import CharactersList from "./components/CharactersList";
// import "bootstrap/dist/css/bootstrap.min.css";
import CharacterDetails from "./components/CharacterDetails";
import { Pagination } from "semantic-ui-react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  const [people, setPeople] = useState([]);

  // fetch characters
  async function fetchCharacters(url) {
    const response = await fetch(url);
    const data = await response.json();
    // setPeople(data);
    // console.log(data);
  }

  useEffect(() => {
    fetchCharacters("https://swapi.dev/api/people");
    // fetchPage2("2");
  }, []);

  // async function fetchNextPage(pageNumber) {
  //   const response = await fetch(
  //     `https://swapi.dev/api/people/?page=${pageNumber}`
  //   );
  //   const data = await response.json();
  //   setNextCharacters(data.results);
  //   // console.log(data);
  // }
  return (
    <>
      <div className="container ">
        <Switch>
          <Route exact path="/">
            <CharactersList people={people} />
          </Route>

          <Route path="/:nextUrl" component={CharacterDetails}></Route>
          <Route path="/:url" component={Pagination}></Route>
          <Route path="/modal" component={Modal}></Route>
        </Switch>

        {/* <Pagination /> */}
      </div>
    </>
  );
}

export default App;
