// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
let CountContext = React.createContext();

// 🐨 create a CountProvider component here that does this:
//   🐨 get the count state and setCount updater with React.useState
//   🐨 create a `value` array with count and setCount
//   🐨 return your context provider with the value assigned to that array and forward all the other props
//   💰 more specifically, we need the children prop forwarded to the context provider
function CountProvider(props) {
  const value = React.useState(0);
  return (
    <CountContext.Provider value={value} {...props} />
  );
}

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const [count] = React.useContext(CountContext);
  return (
    <div>{`The current count is ${count}`}</div>
  );
}

function Counter() {
  const [, setCount] = React.useContext(CountContext);
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  )
}

export default App
