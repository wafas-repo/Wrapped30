/* eslint-disable react/prop-types */

import { ArtistsWrapper, ArtistCard, ArtistName, ArtistInfo, ArtistImage, ArtistRank, NoArtists } from "./Artists.styles";

const Artists = ({ artists }) => {
  return (
     <ArtistsWrapper>
      {artists && artists.length > 0 ? (
        artists.map((artist, index) => (
          <ArtistCard key={artist.id}>
            <ArtistImage src={artist.images[0].url} alt={artist.name} />
            <ArtistInfo>
              <ArtistName>{artist.name}</ArtistName>
              <ArtistRank>{`Rank #${index + 1}`}</ArtistRank>
            </ArtistInfo>
          </ArtistCard>
        ))
      ) : (
        <NoArtists>No artists available</NoArtists>
      )}
    </ArtistsWrapper>
  );
};

export default Artists;
