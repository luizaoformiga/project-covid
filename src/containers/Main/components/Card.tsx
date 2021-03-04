import React, { memo } from 'react';
import { Card as CardUI } from '../../../components'
import { LabelStyled, ValueStyled, CardContentStyled } from './style';

interface PropsList {
  value: any;
  label: any;
  color: any;
}

function Card({ value, label, color }:PropsList) {
  return (
    <CardUI>
      <CardContentStyled color={color}>
        <ValueStyled>{value}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </CardUI>
  )
}

export default memo(Card);