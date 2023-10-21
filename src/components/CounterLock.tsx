import { useCounter } from '../context/CounterContext';

const CounterLock = () => {
  const context = useCounter();
  return (
    <div>
      {context?.state.count && context?.state.count >= 0 ? (
        <p>I like any numbers gt 0</p>
      ) : (
        <div>
          <p>I don't like numbers lt 0.</p>
          <button
            type="button"
            onClick={() => context?.dispatch({ type: 'INCREMENTBY10' })}
          >
            Send 10 points yajuuu
          </button>
        </div>
      )}
    </div>
  );
};

export default CounterLock;
