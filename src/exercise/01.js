// 2. 💯 simulate setState with an object

import * as React from 'react'

const countReducer = (state, newState) => {
  return newState;
}

function Counter({ initialCount = 0, step = 1 }) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const { count } = state
  const increment = () => setState({ count: count + step })
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
