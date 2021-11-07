// 2. 💯 simulate setState with an object

import * as React from 'react'

const countReducer = (state, action) => {
  if (typeof action === 'function') {
    return { ...state, ...action(state) }
  }
  return { ...state, ...action }
}

function Counter({ initialCount = 0, step = 1 }) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const { count } = state
  const increment = () =>
    setState(currentState => ({ count: currentState.count + step }))
  const increment2 = () => setState({ count: count + step })
  return (
    <>
      <button onClick={increment}>{count}</button>
      <button onClick={increment2}>{count}</button>
    </>

  )
}

function App() {
  return <Counter />
}

export default App
