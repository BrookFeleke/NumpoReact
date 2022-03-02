import React,{useState} from 'react';
import './App.css';

import Game, {number} from "./components/game"
import History from './components/history';
function App() {

  function onEnt(word, rar){
    console.log(word);
    console.log(rar);
  }

 
  return (
    <div className='container'>
     <Game onEnt={onEnt}/>
     <History/>
    
    </div>
  );
}

export default App;
