import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 4px 20px var(--color-box-shadow);
  border-radius: 10px;
  padding: 16px;
  cursor: pointer;
  background-color:var(--color-background-card);
  color: var(--color-text-contrast);
  height: 300px;
`;

export const PostCardContainer = styled.div `

`

export const PostCardHeader = styled.header `
  background:var(--color-background-header)
  font-weight: bold;
  font-size: var(--size-font-text);
  line-height: 25px;
  letter-spacing: -0.015em;
  text-align: center;
  width: 100%;
  display: flex;
`


export const PostCardHeaderAvatar = styled.img `
  width: 50px;
  height: 50px;
  border-radius: 80%;

`
export const PostCardHeaderAuthor = styled.h3 `

`

export const PostCardHeaderTitle = styled.h1 `

`

export const PostCardDescription = styled.p `

`

export const PostCardFooter = styled.footer `
  background:var(--color-background-header)
  border-top: 1px solid var(--color-border);
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.015em;
  border: 2px;
  border-color: var(--color-border-focus);
  display: flex;
  bottom:0;
`

export const Button = styled.button `

  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`
