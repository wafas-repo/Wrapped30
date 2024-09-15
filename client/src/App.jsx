import { useEffect, useState } from 'react'
import { accessToken, logout } from './spotify';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles';
import {Login, Profile} from './pages';
import styled from 'styled-components';

const StyledLogoutButton = styled.button`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(0,0,0,.7);
  color: var(--white);
  font-size: var(--fz-sm);
  font-weight: 700;
  border-radius: var(--border-radius-pill);
  z-index: 10;
  @media (min-width: 768px) {
    right: var(--spacing-lg);
  }
`;

function App() {
  const [token, setToken] = useState(null)

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
          <StyledLogoutButton onClick={logout}>Log Out</StyledLogoutButton>
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
