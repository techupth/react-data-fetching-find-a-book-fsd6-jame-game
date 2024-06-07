import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [serch, setSerch] = useState("");
  const [title, setTitle] = useState([]);
  const handleInput = (event) => {
    setSerch(event.target.value);
  };

  const data = async () => {
    const result =
      await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${serch}
`);
    setTitle(result.data.items);
  };

  useEffect(() => {
    data();
  }, [serch]);

  return (
    <div className="App">
      <h1>Find a book</h1>
      <input type="text" value={serch} onChange={handleInput} />
      <ul>
        {title.map((item, index) => {
          return <li key={index}>{item.volumeInfo.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
