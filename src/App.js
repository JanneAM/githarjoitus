import Navigation from "./components/Navigation/Navigation";
import { Switch, Route } from "react-router";

import "./App.css";

function App() {
  return (
    <div className="App">
        <header className="App-header">
        <Switch>
          <Route exact path="/">
            <h1>Hello World!</h1>
          </Route>
          <Route path="/hola">
            <h1>Hola Mundo!</h1>
          </Route>
          <Route path="/hei">
            <h1>Hei Maailma!</h1>
          </Route>
    </Switch>
          <Navigation />
        </header>
      </div>
  );
}

export default App;
