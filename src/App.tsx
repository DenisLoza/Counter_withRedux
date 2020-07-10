import React from 'react';
import './App.css';
import {DisplaySet} from "./components/DisplaySet";
import {DisplayCounter} from "./components/DisplayCounter";
import r from "./store/reducers"
import a from "./store/actions"

let qq = r
let qqq = a


function App() {
  return (
      <div className="App">
        <DisplaySet/>
        <DisplayCounter/>
      </div>
  );
}

export default App;
