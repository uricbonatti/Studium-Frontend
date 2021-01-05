import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 85vh;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
`;

export const Box = styled.div`
  width: 32%;
  height: 48%;
  margin: 10px;
  padding: 16px;
  border: 2px;
  border-radius: 25px;
  background: #f4ede8;
  > p {
    text-align: center;
    color: #555;
    font-size: 24px;
    margin-bottom: 24px;
  }
`;
export const ScrollableContent = styled.div`
  height: 70%;
  background: #f4ede8;
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

export const ProfileSummary = styled.div`
  height: 48%;
  width: 65.25%;
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
    height: 150px;
    border-radius: 50%;
  }
  > div {
    max-width: 60%;
    margin-left: 32px;
    display: flex;
    flex-direction: column;

    > div {
      margin-bottom: 16px;
      display: flex;
      justify-content: flex-start;
      /* place-content: center; */
      > h1 {
        text-align: left;
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
  }
`;
export const Description = styled.p`
  text-align: center;
  color: #a4a4a4;
  font-size: 16px;
`;

export const SocialNetwork = styled.div`
  margin-top: 16px;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 16px;
    }
    svg {
      height: 24px;
      width: 24px;
      margin-right: 4px;
    }
  }
  a + a {
    margin-left: 16px;
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

export const Interaction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 32px;
  /* margin-top: 24px; */

  & + & {
    margin-top: 16px;
  }
  span {
    color: #555;
    font-size: 16px;
  }
  a {
    text-decoration: none;
    color: #000;
    font-size: 16px;
    margin-right: 8px;

    &:hover {
      color: #333;
    }
  }
`;
