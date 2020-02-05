import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a react app...</h1>
      <p>This is really working!</p>
      <Person />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a react app...'));
}

export default App;
