import React from 'react';
import './App.css';
import {DisplaySet} from "./components/DisplaySet";
import {DisplayCounter} from "./components/DisplayCounter";


function App() {

  return (
      <div className="App">
        <DisplaySet/>
        <DisplayCounter/>
      </div>
  );
}

export default App;
