import styled from 'styled-components';

export const Container = styled.header`
  padding: 8px;
  background: var(--color-background-header);
`;
export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  > img {
    height: 80px;
  }
  button {
    margin-left: auto;
    background: transparent;
    border: 0;
  }
  svg {
    color: var(--color-background-svg);
    height: 20px;
    width: 20px;
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: var(--color-text-hover);
    }
    a {
      text-decoration: none;
      color: var(--color-text-decorator);
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
