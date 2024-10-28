import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { increment, decrement, incrementByAmount } from './store';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>Redux Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      <Counter></Counter>
    </div>
  );
}

export default App;
