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
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

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
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
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
    backgroundColor: '#666360',
  }),
  option: (provided: object, state: any) => ({
    ...provided,
    color: state.isFocused ? '#fff' : state.isSelected ? '#232129' : '#ff9000',
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
  singleValue: (provided: object, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const color = '#fff';

    return { ...provided, opacity, transition, color };
  },
};
