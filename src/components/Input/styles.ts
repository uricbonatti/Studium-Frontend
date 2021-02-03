import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--color-background);
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  color: var(--color-text-placeholder);
  border: 2px solid var(--color-border);

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--color-border);
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
  input {
    color: var(--color-text-hover);
    flex: 1;
    border: 0;
    background: transparent;
    &::placeholder {
      color: var(--color-text-placeholder);
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: var(--color-tertiary);
    color: var(--color-text);

    &::before {
      border-color: var(--color-border) transparent;
    }
  }
`;
