import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {

  const [showCounter, setShowCounter] = useState(true)

  return (
    <div className="App">
      <h1>Hello world</h1>
      {showCounter && <Counter />}
      <button onClick={() => setShowCounter(prev => !prev)}>{showCounter ? "Hide" : "Show Counter"}</button>
    </div>
  );
}

export default App;
