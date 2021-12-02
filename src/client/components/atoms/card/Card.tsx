import React, { FC } from 'react';
import { Card as AntCard, CardProps } from 'antd';

interface PropTypes extends CardProps {}

const Card: FC<PropTypes> = ({ children, ...props }: PropTypes) => {
  return <AntCard {...props}>{children}</AntCard>;
};
export default Card;
