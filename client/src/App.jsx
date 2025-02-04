import { useEffect, useState } from 'react'
import { accessToken } from './spotify';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/Globalstyle'
import Login from './pages/login'
import Profile from './pages/Profile';
import './App.css'

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(accessToken)

  }, [])
  return (
    <>
      <GlobalStyle />
      {!token ? (
      <Login />
      ) : (
        <>
          
          <Routes>
           <Route 
              path="/" 
              element={
                <Profile />
              }
            />
            <Route
              path="/playlists"
              element={<h1>Playlists</h1>}
             />
            <Route 
              path="/playlists/:id"
              element={<h1>Playlist</h1>}
            />
            <Route
              path="/top-artists"
              element={<h1>Top Artists</h1>}  
             />
             <Route
              path="/top-tracks"
              element={<h1>Top Tracks</h1>}  
             />
             <Route path='*' element={<h1>Not Found</h1>} />
          </Routes>
          
        </>
      )}
        
    </>
  )
}

export default App
