import React, { useState, useReducer } from "react";
import reducer from "./reducer";
const App = () => {
  const [{ r, g, b }, dispatch] = useReducer(reducer, {
    r: 150,
    g: 100,
    b: 10,
  });
  return (
    <div className="App container text-center bg-dark w-50 p-3">
      <h3 style={{ color: `rgba(${r}, ${g}, ${b})` }}>
        Color of <q>rgb</q>
      </h3>
      <div>
        <span className="text-danger">R</span>
        <button
          onClick={() => dispatch({ type: "INCREMENT_R" })}
          className="btn btn-success"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT_R" })}
          className="btn btn-danger"
        >
          -
        </button>
      </div>
      <div className="clr"></div>
      <div>
        <span className="text-success">G</span>
        <button
          onClick={() => dispatch({ type: "INCREMENT_G" })}
          className="btn btn-success"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT_G" })}
          className="btn btn-danger"
        >
          -
        </button>
      </div>
      <div className="clr"></div>
      <div>
        <span className="text-primary">B</span>
        <button
          onClick={() => dispatch({ type: "INCREMENT_B" })}
          className="btn btn-success"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT_B" })}
          className="btn btn-danger"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default App;
