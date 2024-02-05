import React from "react";
import { useState, useReducer} from "react";
import reducer, { initialState } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [show,setShow]=useState(false);
  const calculateBmi = (e) => {
    e.preventDefault();
    dispatch({
      type: "CALCULATE_BMI",
    });
    setShow(true);
  };
  const changeFunc1 = (e) => {
    dispatch({
      type: "SET_WEIGHT",
      payload: e.target.value,
    });
  };
  const changeFunc2 = (e) => {
    dispatch({
      type: "SET_HEIGHT",
      payload:e.target.value,
    });
  };
  const reload = () => {
    dispatch({ type: "RELOAD" });
  };

  return (
    <div className="App">
      <form onSubmit={calculateBmi}>
        <label htmlFor="SET_WEIGHT">Weight kg</label>
        <input type="number" name="SET_WEIGHT" onChange={changeFunc1}></input>

        <label htmlFor="SET_HEIGHT">Height cm</label>
        <input type="number" name="SET_HEIGHT" onChange={changeFunc2}></input>

        <button type="submit">Submit</button>
      </form>

      <p>BMI: {state.bmi}</p>
      <p>Message: {state.message}</p>
      {
        show ? <img src={state.image} alt="BMI"/> :""
      }

      <button type="submit" onClick={reload}>
        Delete Infos
      </button>
    </div>
  );
}

export default App;


