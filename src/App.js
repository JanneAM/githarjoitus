import Navigation from "./components/Navigation/Navigation";
import ColorMenu from "./components/ColorMenu/ColorMenu";

import { useState } from "react";

import { Switch, Route } from "react-router";

import "./App.css";

function App() {


  const [colorClass, setColorClass] = useState('text-white');

  const changeColor = (e) => {
    const colorClass = `text-${e.target.className.substring('color-item '.length)}`;
    setColorClass(()=>colorClass);
  }

  return (
    <header className="App-header">
      <div className={`App ${colorClass}`}>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <h1 className='header'>Hello World!</h1>
          </Route>
          <Route path="/hola">
            <h1>Hola Mundo!</h1>
          </Route>
          <Route path="/hei">
            <h1>Hei Maailma!</h1>
          </Route>
        </Switch>
        <ColorMenu onClick={changeColor}/>
      </div>
    </header>
  );
}

export default App;
