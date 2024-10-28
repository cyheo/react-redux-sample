import React, { useState } from 'react';

interface CounterProps {
    initialCount?: number;
}

const Counter: React.FC<CounterProps> = ( { initialCount = 0 } ) => {

    const [count, setCount] = useState<number>(initialCount);

    const increment = () => setCount( count + 1 );
    const decrement = () => setCount( count - 1 );

    return (
        <div>
            <h1>Counter: { count }</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;