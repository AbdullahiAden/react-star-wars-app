import { Switch, Route } from "react-router-dom";
import CharactersList from "./components/CharactersList";
// import "bootstrap/dist/css/bootstrap.min.css";
import CharacterDetails from "./components/CharacterDetails";
import { Pagination } from "semantic-ui-react";

function App() {
  return (
    <>
      <div className="container ">
        {/* <CharactersList /> */}

        <Switch>
          <Route exact path="/">
            <CharactersList />
          </Route>

          <Route path="/:url" component={CharacterDetails}></Route>
        </Switch>

        {/* <Pagination /> */}
      </div>
    </>
  );
}

export default App;
