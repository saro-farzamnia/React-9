
import { useReducer, useState } from 'react'
import './App.css'

const reducer = (state,action)=>{
  console.log({state,action})
  switch (action){
    case "INCEAS":
      return state + 1;
      case "DESCREAS":
        return state -1;
      case "RESET":
        return 0;

    default:
      throw new Error ("Click button")
  }
}

function App() {
  const [number,dispatch]=useReducer(reducer,0);
  const [error,setError]=useState();

  const increasHandler = ()=>{
    dispatch("INCEAS")
  }
  const resetHandler = ()=>{
    dispatch("RESET")
  }
  const descreasHandler = ()=>{
    dispatch("DESCREAS")
  }
  return (
    <>
    <h1>Reducer</h1>
    <h4>{number}</h4>
    <button onClick={increasHandler}>Increas</button>
    <button onClick={resetHandler}>Reset</button>
    <button onClick={descreasHandler}>Descreas</button>
    {
      error && <h3>Click button</h3>
    }
    </>
  )
}

export default App
