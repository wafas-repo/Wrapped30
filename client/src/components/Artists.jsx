/* eslint-disable react/prop-types */

const Artists = ({ artists }) => {
  return (
    <div>
      {artists && artists.length > 0 ? (
        artists.map((artist, index) => (
          <div className="artist" key={index}>
            <img src={artist.images[0].url} alt={artist.name} />
            <div className="artist-info">
              <h3>{artist.name}</h3>
              <p>{`Rank #${index + 1}`}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No artists available</p>
      )}
    </div>
  );
};

export default Artists;
