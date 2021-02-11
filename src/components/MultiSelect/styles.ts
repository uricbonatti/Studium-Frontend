import { OptionTypeBase, StylesConfig } from 'react-select';
import styled, { css } from 'styled-components';

import Tooltip from './../Tooltip/index';

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

  color: #666360;
  border: 2px solid #232129;

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

  svg {
    margin-right: 16px;
  }
  & .Select__indicator Select__dropdown-indicator {
    color: var(--color-text-hover);
    flex: 1;
    border: 0;
    width: 100%;
    background: transparent;
    &::placeholder {
      color: var(--color-text-placeholder);
    }
  }
`;
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: var(--color-background-tootip);
    color: var(--color-text-description);

    &::before {
      border-color: var(--color-background-tootip) transparent;
    }
  }
`;

export const selectStyle: StylesConfig<OptionTypeBase, false> = {
  container: (provided: object, state: any) => ({
    ...provided,
    width: '100%',
  }),
  dropdownIndicator: (provided: object, state: any) => ({ ...provided }),
  placeholder: (provided: object, state: any) => ({ ...provided }),
  menu: (provided: object, state: any) => ({
    ...provided,
    width: '100%',
    backgroundColor: 'var(--color-text-placeholder)',
  }),
  option: (provided: object, state: any) => ({
    ...provided,
    color: state.isFocused ? 'var(--color-text)' : state.isSelected ? 'var(--color-text-title)' : 'var(--color-text-decorator)',
    backgroundColor: state.isFocused
      ? '#232129'
      : state.isSelected
      ? '#ff9000'
      : '#666360',
  }),
  control: () => ({
    display: 'flex',
    border: 0,
    // none of react-select's styles are passed to <Control />
  }),
  multiValue: (provided: object, state: any) => ({
    ...provided,
    opacity: state.isDisabled ? 0.5 : 1,
    transition: 'opacity 300ms',
    backgroundColor: '#ff9000',
    font: 'bold',
    borderRadius: 8,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  singleValue: (provided: object, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};
