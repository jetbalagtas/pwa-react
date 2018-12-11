import React, { useState } from 'react';
import './App.css';

export default function Greeting(props) {
  const [name, setName] = useState('Mary');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <p>Name</p>
          <input
            className="App-input"
            value={name}
            onChange={handleNameChange}
          />
        </section>
      </header>
    </div>
  );
}
