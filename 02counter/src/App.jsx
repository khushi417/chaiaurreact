import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // deafult value first paramater
  // it give array of first value and second function
  const[counter,setCounter]=useState(15)
  
  const addValue=()=>{
    console.log(counter)
    setCounter(counter+1);
    // counter=counter+1;
    // mna chai baar incerase kiya too nhi houya beacuse In React, state updates using the same value of counter inside one render cycle are batched together. (batches state updates ) hr call same baat bol ryi hh too ik baar increase hogya 
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // but assa krna sa too increase hoo gya  beacuse mna previous ko uthaa kar usma change krdiya every update sequentially 
    // setCounter(prevCounter=>prevCounter+1);
    // setCounter(prevCounter=>prevCounter+1);
    // setCounter(prevCounter=>prevCounter+1);
    // setCounter(prevCounter=>prevCounter+1);
  }
  const removeValue=()=>{
    setCounter(counter-1);
  }
  return (
    <>
      <h1>chai aur code</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button  onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
