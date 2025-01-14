import styled from 'styled-components';

export const ArtistsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
`;

export const ArtistCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 60%;  /* Makes the card narrow */
  max-width: 600px;  /* Limits width to avoid stretching too much */

`;

export const ArtistImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const ArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArtistName = styled.h3`
  font-size: 1.1em;
  margin: 0;
  color: black;
`;

export const ArtistRank = styled.p`
  font-size: 0.9em;
  color: #666;
`;

export const NoArtists = styled.p`
  font-size: 16px;
  color: red;
`;