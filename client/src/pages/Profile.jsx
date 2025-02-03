import { useState, useEffect } from 'react';
import { catchErrors } from '../utils';
import { getCurrentUserProfile, getTopArtists, logout } from '../spotify';
import { HeaderStyles, NavStyles } from '../styles';
import Artists from '../components/Artists';
import { RiArrowDropDownLine } from "react-icons/ri";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
//   const [topTracks, setTopTracks] = useState(null);
    const [showSubMenu, setShowSubMenu] = useState(false)

    var onExpand = () => setShowSubMenu(!showSubMenu)

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await getCurrentUserProfile();
      setProfile(userProfile.data);

      console.log(profile)

      const userTopArtists = await getTopArtists();
      console.log(userTopArtists)
      setTopArtists(userTopArtists.data)

      console.log('top artists', topArtists)

    //   const userTopTracks = await getTopTracks();
    //   setTopTracks(userTopTracks.data)

    //   console.log('top tracks', topTracks)
    };

    catchErrors(fetchData());
  }, []);


  return (
  
      <>
        <NavStyles>
            <nav>
                {/* <StyledLogoutButton onClick={logout}>Log Out</StyledLogoutButton> */}
                {profile && profile.images && (
                    <>
                        <img src={profile.images[0].url} alt="profile-pic" className='profile-pic' />
                        <RiArrowDropDownLine size={30} onClick={onExpand} />
                    </>
                )}
                { showSubMenu && <div className='sub-menu-wrap'>
                    <div className='sub-menu'>
                        <a href="#" className='sub-menu-link'>
                            <p>Settings</p>
                        </a>
                        <hr />
                        <a href="#" className='sub-menu-link'>
                            <p onClick={logout} >logout</p>
                        </a>
                    </div>
                </div> }
                
                
            </nav>
        </NavStyles>


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
      {/* <h1>Top Tracks</h1> */}

      {/* { topTracks && (
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
      )} */}

    </>
    
  )
};

export default Profile;