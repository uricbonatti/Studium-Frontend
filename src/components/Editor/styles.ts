import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  color: var(--color-text-title);
  border: 2px solid #232129;
  display: flex;
  align-items: center;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--color-border:#c53030;);
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: var(--color-border-focus);
      border-color: var(--color-border-focus);
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: var(--color-border-focus);
    `}
    //Validar isso
  textarea {
    color: var(--color-text-hover);
    flex: 1;
    border: 0;
    background: transparent;
  }
`;
