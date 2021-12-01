import React, { FC } from 'react';
import { Card as AntCard, CardProps } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

interface PropTypes extends CardProps {}

const Card: FC<PropTypes> = ({ children, ...props }: PropTypes) => {
  return <AntCard {...props}>{children}</AntCard>;
};
export default Card;
