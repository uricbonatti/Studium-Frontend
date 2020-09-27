import styled from 'styled-components';

interface ExpBarProps {
  expPercent?: number;
  expColor?: string;
  barColor?: string;
}

export const Container = styled.div<ExpBarProps>`
  margin-bottom: 16px;
  height: 8px;
  display: flex;
  > div {
    width: ${(props) => (!!props.expPercent ? props.expPercent : 0)}%;
    background: ${(props) => (!!props.expColor ? props.expColor : '#000')};
  }
  div + div {
    width: ${(props) => (!!props.expPercent ? 100 - props.expPercent : 100)}%;
    background: ${(props) => (!!props.barColor ? props.barColor : '#a4a4a4')};
  }
`;
