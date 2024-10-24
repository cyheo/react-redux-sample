import React from 'react';
import Counter from './component/Counter';

function App() {
  return (
    <div className="App">
      <h1>React + TypeScript Counter</h1>
      <Counter initialCount={10} />
    </div>
  );
}

export default App;
