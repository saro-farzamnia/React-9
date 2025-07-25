import { useEffect, useReducer, useState,  } from 'react'

const reducer = (state,action)=>{

  console.log({state,action})
  switch (action){
    case "INCEAS":
      return state + 1;
      case "DSCREAS":
        return state -1;
      case "RESET":
        return 0;

    default:
        throw new Error ("Click button")
  }

}

const Reducer = () => {
    const [number,dispatch]=useReducer(reducer,0);
    const [error,setError]=useState(null);

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
    <div>
        <h1>Reducer</h1>
        <h4>{number}</h4>
        <button onClick={increasHandler}>Increas</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={descreasHandler}>Descreas</button>
        {
            error && <h3>{error}</h3>
        }
        
    </div>
  )
}

export default Reducer