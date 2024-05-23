import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Logo from './src/img/wu-tang-clan-logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://wallpapers.com/images/high/wu-tang-clan-logo-pgyycato4g8hkzlw.webp">
          <img src={Logo} className="logo" alt="wulogo" />
        </a>
        <a href="https://wallpapers.com/images/high/wu-tang-clan-logo-pgyycato4g8hkzlw.webp" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
