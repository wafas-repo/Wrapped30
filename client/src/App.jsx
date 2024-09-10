import { useEffect, useState } from 'react'
import { accessToken, logout, getCurrentUserProfile } from './spotify';
import { catchErrors } from './utils';
import { Route, Routes } from 'react-router-dom';
import styled  from 'styled-components'
import { GlobalStyle } from './styles';

function App() {
  const [token, setToken] = useState(null)
  const [profile, setProfile] = useState(null)

  const StyledLoginButton = styled.a`
    background-color: var(--green);
    color: var(--white);
    padding: 10px 20px;
    margin: 20px auto;
    border-radius: 30px;
    display: inline-block;
  `;

  useEffect(() => {
    setToken(accessToken)

    const fetchData = async () => {
      
        const { data } = await getCurrentUserProfile();
        setProfile(data)
    }
    catchErrors(fetchData());
  }, [])
  return (
    <>
      <GlobalStyle />
      {!token ? (
      <StyledLoginButton href="http://localhost:888/login"> log in to Spotify</StyledLoginButton>
      ) : (
        <>

          <Routes>
           <Route 
              path="/" 
              element={
                <>
                  <button onClick={logout}>Log Out</button>

                  {profile && (
                    <div>
                      <h1>{profile.display_name}</h1>
                      <p>{profile.followers.total} Followers</p>
                      {profile.images.length > 0 && profile.images[0].url && (
                        <img src={profile.images[0].url} alt="Avatar" />
                      )}
                    </div>
                  )}
                </>
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
