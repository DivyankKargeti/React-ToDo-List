import "./App.css";

function App() {
  return (
    <div>
      <h1>TODO APP</h1>
      <div className="container">
        Add an Item...
        <br />
        <input
          type="text"
          className="input-text"
          placeholder="write a todo..."
        />
        <button className="add-btn">Add ToDo</button>
        <div className="list">
          <ul>
            <li>
              <input type="checkbox" />
              study react js more and more
              <button className="btn">Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
