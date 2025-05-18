import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');

  const handleEmbed = async () => {
    try {
      const res = await fetch('http://localhost:8000/embed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      const data = await res.json();
      setMessage(`Stored with ID: ${data.id}`);
    } catch (err) {
      setMessage('Error embedding text.');
    }
  };

  const handleSearch = async () => {
    try {
      const res = await fetch('http://localhost:8000/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: query }),
      });
      const data = await res.json();
      setResults(data.results);
    } catch (err) {
      setMessage('Error searching text.');
    }
  };

  return (
    <div className="App">
      <h1>MindMap Embedding Tool</h1>
      <h1 style={{ color: "red" }}>This is mine!</h1>
      <h2>Embed Text</h2>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to store"
      />
      <br />
      <button onClick={handleEmbed}>Submit</button>
      <p>{message}</p>

      <h2>Search</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search text"
      />
      <button onClick={handleSearch}>Search</button>

      <h3>Results</h3>
      <ul>
        {results.map((item) => (
          <li key={item.id}>
            <strong>ID:</strong> {item.id} <br />
            <strong>Text:</strong> {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
