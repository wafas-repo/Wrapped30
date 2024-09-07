import { useEffect, useState } from 'react'
import { access_token } from './spotify';
import './App.css'

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(access_token)
  }, [])
  return (
    <>
      {!token ? (
      <a href="http://localhost:888/login"> log in to Spotify</a>
      ) : (
        <h1>Logged In!</h1>
      )}
        
    </>
  )
}

export default App
