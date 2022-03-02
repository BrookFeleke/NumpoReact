import React,{useState} from 'react';
import './App.css';

import Game, {number} from "./components/game"
import History from './components/history';
function App() {
  const [raray, setRaray] = useState([])
  const [number, setNumber] = useState([])
  const [position, setPosition] = useState([])
  const [histArray, setHistArray] = useState([]);

const [flag, setFlag] = useState(false)
  function onEnt(word, rar, n, p){
    console.log(word);
    if(rar.length === 4){
      setFlag(true)
    console.log(rar);
    setRaray(rar)
    console.log(raray+"hello")
    setHistArray(()=>[...histArray,raray])
    console.log("Number" + n);
    setNumber(n)
    console.log("Position" + p);
    setPosition(p)
    }
  }

 
  return (
    <div className='container'>
     <Game onEnt={onEnt}/>
     <History raray={histArray} n={number} p={position} f={flag}/>
    
    </div>
  );
}

export default App;
