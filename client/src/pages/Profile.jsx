import { useState, useEffect } from 'react';
import { catchErrors } from '../utils';
import { getCurrentUserProfile, getTopArtists, getTopTracks } from '../spotify';
import { HeaderStyles } from '../styles';
import Artists from '../components/Artists';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [topTracks, setTopTracks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await getCurrentUserProfile();
      setProfile(userProfile.data);

      const userTopArtists = await getTopArtists();
      setTopArtists(userTopArtists.data)

      console.log('top artists', topArtists)

      const userTopTracks = await getTopTracks();
      setTopTracks(userTopTracks.data)

      console.log('top tracks', topTracks)
    };

    catchErrors(fetchData());
  }, []);

  return (
  
      <>
      {profile && (
        <>
          <HeaderStyles type="user">
            <div className="header__inner">
              <div>
                <div className="header__overline">Welcome</div>
                <h1 className="header__name"> {profile.display_name}</h1>
                <p className="header__meta">
                  <span>
                    {profile.followers.total} Follower{profile.followers.total !== 1 ? 's' : ''}
                  </span>
                </p>
              </div>
            </div>
          </HeaderStyles>
        </>
      )}

      
      <h1>Top Artists</h1>
      { topArtists && (
        <div>
          <Artists artists={topArtists.items.slice(0, 10) } />
        </div>
      )}
      <h1>Top Tracks</h1>

      { topTracks && (
        <div>
          {topTracks.items.slice(0, 10).map((track, index) => (
            <div key={track.id} style={{ marginBottom: '20px' }}>
              <h3>{index + 1}. {track.name}</h3>
              <p>
                Artist: {track.artists.map((artist) => artist.name).join(', ')}<br />
                Album: {track.album.name}
              </p>
              <img 
                src={track.album.images[0].url} 
                alt={track.album.name} 
                style={{ width: '150px', borderRadius: '8px' }} 
              />
            </div>
          ))}
        </div>
      )}

    </>
    
  )
};

export default Profile;