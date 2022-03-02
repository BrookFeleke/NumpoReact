import React,{useState} from 'react';


function KeyBoard({onPress, delClick, onEnt, resultArray, n, p}) {
  return (


    <div className="keyboard">
      
        <button className="key" data-key="1" onClick={onPress}>1</button>
          <button className="key" data-key="2" onClick={onPress}>2</button>
          <button className="key" data-key="3" onClick={onPress}>3</button>
          <button className="key" data-key="4" onClick={onPress}>4</button>
          <button className="key" data-key="5" onClick={onPress}>5</button>
          <button className="key" data-key="6" onClick={onPress}>6</button>
          <button className="key" data-key="7" onClick={onPress}>7</button>
          <button className="key" data-key="8" onClick={onPress}>8</button>
          <button className="key" data-key="9" onClick={onPress}>9</button>
          <button className="key" data-delete  onClick={delClick}>del</button>
          <button className="key" data-key="0" onClick={onPress}>0</button>
          <button className="key" data-enter onClick={()=>onEnt("Brook u slayy",resultArray, n , p)}>Ent</button>
    </div>
  );
}

export default KeyBoard;
