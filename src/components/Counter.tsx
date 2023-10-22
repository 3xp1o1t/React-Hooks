import { useCounter } from '../hooks/useCounter';

const Counter = () => {
  const context = useCounter();
  return (
    <div>
      <p>Counter: {context?.state.count}</p>
      <button
        type="button"
        onClick={() => context?.dispatch({ type: 'INCREMENT' })}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => context?.dispatch({ type: 'DECREMENT' })}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
