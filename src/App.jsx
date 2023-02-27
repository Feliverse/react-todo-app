import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello from React application</h1>
      <img src={reactLogo} className="logo react" alt="React logo" />
    </div>
  )
}

export default App
