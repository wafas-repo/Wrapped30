import styled from 'styled-components';

export const ArtistsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ArtistCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  width: 300px;
`;

export const ArtistImage = styled.img`
  /* border-radius: 50%; */
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

export const ArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ArtistName = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

export const ArtistRank = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
  color: #666;
`;

export const NoArtists = styled.p`
  font-size: 16px;
  color: red;
`;