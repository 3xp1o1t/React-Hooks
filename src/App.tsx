import Counter from './components/Counter';
import CounterLock from './components/CounterLock';
import Posts from './components/Posts';
import { CounterProvider } from './context/CounterContext';

function App() {
  return (
    <>
      <div>
        <h2>Counter Context Example</h2>
        <CounterProvider>
          <Counter />
          <CounterLock />
        </CounterProvider>
      </div>
      <hr />
      <div>
        <h2>Custom Api Hook</h2>
        <Posts />
      </div>
    </>
  );
}

export default App;
