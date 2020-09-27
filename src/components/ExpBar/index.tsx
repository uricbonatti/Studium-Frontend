import React from 'react';
import { Container } from './styles';

interface ExpBarProps {
  expPercent?: number;
  expColor?: string;
  barColor?: string;
}
const ExpBar: React.FC<ExpBarProps> = ({ expPercent, barColor, expColor }) => (
  <Container expPercent={expPercent} expColor={expColor} barColor={barColor}>
    <div />
    <div />
  </Container>
);
export default ExpBar;
