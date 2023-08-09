import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const clickHandler = () => {
    const tempData = data;
    tempData.push(input);
    setData(data);
    setInput("");
    console.log(data);
  };



  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={clickHandler}>Add</button>

      {data.length ? (
        <ul>
          {data.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>
      ):none}
    </div>
  );
}


export default App;
