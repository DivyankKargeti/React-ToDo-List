import React, { useState } from "react";
import "./App.css";

function App() {
  // State
  const [inputData, setInputData] = useState("");
  // State for Storing Input Data
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    if (!inputData) {
      alert("Add Something to the Input and then Add a Todo...");
    } else {
      setItems([...items, inputData]);
      //clearing input fields
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    // to check
    // console.log(idx);
    const updatedItems = items.filter((item, ind) => {
      return ind !== id;
    });
    setItems([...updatedItems]);
  };

  const deleteAll = () => {
    if(items.length === 0){
      alert("There is nothing to delete...")
    }
    setItems([]);
  };

  return (
    <div>
      <h1 className="app-title">TODO APP</h1>
      <div className="container">
        Add an Item...
        <br />
        <input
          type="text"
          className="input-text"
          placeholder="write a todo..."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button className="add-btn" onClick={addItem}>
          Add ToDo
        </button>
        <button className="btn-rmv" onClick={deleteAll}>
          Remove All
        </button>
        <div className="list">
          <ul>
            {items.map((item, idx) => {
              return (
                <li key={idx}>
                  {item}
                  <button className="btn" onClick={() => deleteItem(idx)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
