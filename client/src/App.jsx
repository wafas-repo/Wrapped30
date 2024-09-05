import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const accessToken = urlParams.get('access_token');
    const refreshToken = urlParams.get('refresh_token');

    console.log(accessToken)
    console.log(refreshToken)

    fetch(`/refresh_token?refresh_token=${refreshToken}`)
    .then(res => res.text())  
    .then(data => {
      console.log('Response:', data);  
      try {
        const jsonData = JSON.parse(data);  
        console.log(jsonData);
      } catch (error) {
        console.error('Failed to parse JSON:', error);
      }
    })
    .catch(err => console.error('Fetch error:', err));

  }, [])
  return (
    <>
      
      <a href="http://localhost:888/login"> log in to Spotify</a>
        
    </>
  )
}

export default App
