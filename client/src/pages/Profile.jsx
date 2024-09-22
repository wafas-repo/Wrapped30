import { useState, useEffect } from 'react';
import { catchErrors } from '../utils';
import { getCurrentUserProfile, getTopArtists } from '../spotify';
import { HeaderStyles } from '../styles';
import Artists from '../components/Artists';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [topArtists, setTopArtists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await getCurrentUserProfile();
      setProfile(userProfile.data);

      const userTopArtists = await getTopArtists();
      setTopArtists(userTopArtists.data)

      console.log(userTopArtists.data)
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

      { topArtists && (
        <main>
          <Artists artists={topArtists.items.slice(0, 10) } />
        </main>
      )}
    </>
    
  )
};

export default Profile;