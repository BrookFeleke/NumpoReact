import React, { useState } from "react";

import InputBlock from "./InputBlock";
import ResultBlock from "./ResultBlock";
import KeyBoard from "./KeyBoard";
function Game({onEnt}) {
  function getRan() {
    return Math.floor(Math.random() * 10);
  }
  //generated random number
  function generateRandom() {
    const randomNumber = [];

    for (var i = 0; i < 4; i++) {
      if (i === 0) {
        var random = getRan();
        while (random === 0) random = getRan();
        randomNumber[i] = random;
      } else {
        var random = getRan();
        while (randomNumber.includes(random)) random = getRan();
        randomNumber[i] = random;
      }
    }
    return randomNumber;
  }
  const [random, setRandom] = useState(() => generateRandom());

  const [finalNum, setFinalNum] = useState([]);
  const [number, setNumber] = useState([]);
  const [index, setIndex] = useState(0);

  function onDel(e) {
    var numbs = [...number];
    console.log(numbs.length)
     numbs.splice(numbs.length - 1, 1);
    console.log(numbs);
    setNumber(numbs);
    setIndex((prev) => prev - 1)
    console.log(number);
  }


const [n, setN] = useState(null)
const [p, setP] = useState(null)

  function onclick(e) {
    const n = e.target.innerHTML;
    const numbs = [...number, n];
    if (index === 3) {
        const resultArray = [...numbs]
        var n1 = 0
        var p = 0
        resultArray.forEach((digit, index) => {
            if (random.includes(parseInt(digit))) {
                n1++;
                if (index === random.indexOf(parseInt(digit))) p++;
            }
        })
        console.log("Num"+n1)
        setN(n1)
        console.log( "here")
        setP(p)
        setFinalNum(numbs);
        setNumber([]);
        setIndex(0)
    } else {
    setIndex((prev) => prev + 1);
    setNumber(numbs);}
  }
  return (
    <div className="game">
      <ResultBlock resultArray={finalNum} randomNumber={random}  p={p} n={n} />
      <InputBlock number={number} index={index} />
      <button className="h-button">History</button>
      <KeyBoard onPress={onclick} delClick={onDel} onEnt={onEnt} resultArray={finalNum}  p={p} n={n}/>
    </div>
  );
}

export default Game;
