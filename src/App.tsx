import Counter from './components/Counter';
import CounterLock from './components/CounterLock';
import { CounterProvider } from './context/CounterContext';

function App() {
  return (
    <>
      <div>
        <CounterProvider>
          <Counter />
          <CounterLock />
        </CounterProvider>
      </div>
    </>
  );
}

export default App;
