import Navigation from "./components/Navigation/Navigation";
import { Switch, Route } from "react-router";

import "./App.css";

function App() {
  return (
    <Switch>
      <div className="App">
        <header className="App-header">
          <Route exact path="/">
            <h1>Hello World!</h1>
          </Route>
          <Route path="/hola">
            <h1>Hola Mundo!</h1>
          </Route>
          <Route path="/hei">
            <h1>Hei Maailma!</h1>
          </Route>
          <Navigation />
        </header>
      </div>
    </Switch>
  );
}

export default App;
