import React,{useState} from 'react';

function ResultBlock({resultArray, n, p}) {




console.log( "whatt")

  return (
    <div className="result-c">
         <div className='cell'>{resultArray[0]}</div>
        <div className='cell '>{resultArray[1]}</div>
        <div className='cell '>{resultArray[2]}</div>
        <div className='cell '>{resultArray[3]}</div>
        <div className='cell result-cell'>{n}</div>
        <div className='cell result-cell'>{p}</div>
    </div>
  );
}

export default ResultBlock;
