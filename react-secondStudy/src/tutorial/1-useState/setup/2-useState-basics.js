import React, { useState } from 'react';

//use
//component name must be uppercase
//must be in the function/component
//cannot call conditionally

const UseStateBasics = () => {
  /*
  console.log(useState('Hello world'))
  const value = useState(1)[0]
  const handler = useState(1)[1]
  console.log(value,handler 
  */
  const [text,setText] = useState('Random title')
  const handleClick = () =>{
    if(text === 'Random title'){
      setText('hello world')
    }else{
      setText('Random title')
    }
  }
  return (<React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>Change title</button> 
  </React.Fragment>)
};

export default UseStateBasics;
