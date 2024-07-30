import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incNumber,
  decNumber,
  resetNumber,
  addHistory,
  resetHistory,
  setNumber,
} from "./actions";

import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.changeTheNumber);
  const history = useSelector((state) => state.changeTheHistory);
  const [customValue, setCustomValue] = useState("");

  React.useEffect(() => {
    dispatch(addHistory(quantity));
  }, [quantity, dispatch]);

  const handleCustomInputChange = (e) => {
    setCustomValue(e.target.value);
  };

  const handleSetCustomValue = () => {
    const number = parseInt(customValue, 10);
    if (!isNaN(number)) {
      dispatch(setNumber(number));
    }
  };

  return (
    <>
      <div className="container">
        <h1>Increment / Decrement Counter</h1>
        <h4>Using React and Redux</h4>
        <div className="quantity">
          <a
            className="quantity_minus"
            title="Decrement by 1"
            onClick={() => dispatch(decNumber())}
          >
            <span>-1</span>
          </a>
          <a
            className="quantity_minus"
            title="Decrement by 5"
            onClick={() => dispatch(decNumber(5))}
          >
            <span>-5</span>
          </a>
          <a
            className="quantity_minus"
            title="Decrement by 10"
            onClick={() => dispatch(decNumber(10))}
          >
            <span>-10</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity_input"
            value={quantity}
            readOnly
          />
          <a
            className="quantity_plus"
            title="Increment by 1"
            onClick={() => dispatch(incNumber())}
          >
            <span>+1</span>
          </a>
          <a
            className="quantity_plus"
            title="Increment by 5"
            onClick={() => dispatch(incNumber(5))}
          >
            <span>+5</span>
          </a>
          <a
            className="quantity_plus"
            title="Increment by 10"
            onClick={() => dispatch(incNumber(10))}
          >
            <span>+10</span>
          </a>
          <button
            className="reset_button"
            title="Reset Counter"
            onClick={() => {
              dispatch(resetNumber());
              dispatch(resetHistory());
            }}
          >
            Reset
          </button>
          <div className="custom_input">
            <input
              type="number"
              placeholder="Enter a number"
              value={customValue}
              onChange={handleCustomInputChange}
            />
            <button onClick={handleSetCustomValue}>Set</button>
          </div>
        </div>
        <div className="history">
          <h4>History</h4>
          <ul>
            {history.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
