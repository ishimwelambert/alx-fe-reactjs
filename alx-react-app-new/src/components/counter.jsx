import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Current Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: '5px', padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: '5px', padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Decrement
      </button>
      <button
        onClick={() => setCount(0)}
        style={{ margin: '5px', padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Reset
      </button>
    </div>
  );
}
