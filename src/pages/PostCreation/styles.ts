import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-content: center;
  width: 100%;
  form {
    margin: 20px 0;
    width: 700px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
