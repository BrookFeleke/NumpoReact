import React,{useState} from 'react';


function InputBlock(props) {


// console.log(props.index)
  return (
    <div className='input-c'>
        <div className='cell'>{props.number[0]}</div>
        <div className='cell'>{props.number[1]}</div>
        <div className='cell'>{props.number[2]}</div>
        <div className='cell'>{props.number[3]}</div>
    </div>
  )
}

export default InputBlock