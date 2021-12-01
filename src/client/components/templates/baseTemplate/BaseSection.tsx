import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface PropTypes extends HTMLAttributes<any> {}

const BaseSection: FC<PropTypes> = ({ children, ...props }: PropTypes) => {
  return <BaseSectionWrap {...props}>{children}</BaseSectionWrap>;
};
export default BaseSection;

const BaseSectionWrap = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;
`;
