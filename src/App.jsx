import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const getResult = async () => {
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchText}`
    );
    console.log(result);
    setResults(result.data.items);
  };

  useEffect(() => {
    getResult();
  }, [searchText]);

  return (
    <div className="App">
      <h1>Find a Book</h1>
      <label>
        <input
          id="search-text"
          name="search-text"
          type="text"
          placeholder="search here"
          value={searchText}
          onChange={handleSearch}
        />
      </label>
      <div className="results">
        {results.map((book) => (
          <div className="book" key={book.id}>
            <h2>{book.volumeInfo.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
