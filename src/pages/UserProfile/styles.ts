import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  height: auto;
  width: 100%;
  grid-template-columns: 33% 33% 34%;
  grid-template-rows: 50% 50%;
  grid-template-areas:
    'profile profile badges'
    'papers activity interactions';
  div {
  }
  .profile {
    grid-area: profile;
  }
  .papers {
    grid-area: papers;
  }
  .activity {
    grid-area: activity;
  }
  .interactions {
    grid-area: interactions;
  }
  .badges {
    height: 100%;
    grid-area: badges;
  }
`;

export const Box = styled.div`
  margin: 10px;
  padding: 16px;
  border: 2px;
  background: #f4ede8;
  > p {
    position: absolute;

    color: #555;
    font-size: 24px;
    margin-bottom: 24px;
  }
  overflow: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Title = styled.div``;

export const ProfileSummary = styled.div`
  margin: 10px;
  padding: 16px;
  border: 2px;
  background: #f4ede8;
  display: flex;
  align-items: center;
  justify-content: left;
  border-radius: 25px;
  img {
    margin-left: 32px;
    height: 50%;
    border-radius: 50%;
  }
  > div {
    margin-left: 32px;
    display: flex;
    flex-direction: column;

    > div {
      margin-bottom: 16px;
      display: flex;
      place-content: center;
      > h1 {
        font-size: 32px;
        color: #090909;

        strong {
          margin-left: 8px;
          font-size: 24px;
          text-align: center;
        }
      }
    }

    strong {
      color: #a4a4a4;
      font-size: 16px;
    }
    p {
      color: #a4a4a4;
      font-size: 20px;
    }
  }
`;

export const SocialNetwork = styled.div`
  margin-top: 16px;
  a {
    text-decoration: none;
    font-size: 16px;
    text-align: center;
    svg {
      height: 24px;
      width: 24px;
      margin-right: 4px;
    }
  }
  a + a {
    margin-left: 16px;
  }
  .github {
    svg {
      color: #000;
    }
  }
  .linkedin {
    svg {
      color: blue;
    }
  }
`;

export const Activity = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 32px;
  margin-top: 24px;
  color: #555;
  font-size: 20px;
  svg {
    height: 20px;
    width: 20px;
    margin-right: 8px;
  }
`;

export const PostPublished = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 32px;
  margin-top: 24px;
  span {
    color: #555;
    font-size: 16px;
  }
  p {
    color: #000;
    font-size: 20px;
    margin-right: 8px;
  }
`;
