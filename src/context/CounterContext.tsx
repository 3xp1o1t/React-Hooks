import { ReactNode, createContext, useContext, useReducer } from 'react';

interface State {
  count: number;
}

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'INCREMENTBY10' };

const CounterContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'INCREMENTBY10':
      return { count: state.count + 10 };
    default:
      return state;
  }
};

interface CounterProviderProps {
  children: ReactNode;
}

const CounterProvider = ({ children }: CounterProviderProps) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => {
  const context = useContext(CounterContext);
  return context;
};

export { CounterProvider, useCounter };
