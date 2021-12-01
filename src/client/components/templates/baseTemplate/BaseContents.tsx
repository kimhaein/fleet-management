import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface PropTypes extends HTMLAttributes<any> {}

const BaseContents: FC<PropTypes> = ({ children, ...props }: PropTypes) => {
  return <BaseContentsWrap {...props}>{children}</BaseContentsWrap>;
};
export default BaseContents;

const BaseContentsWrap = styled.div`
  position: relative;
  background: #fff;

  &.full {
    flex: 1;
  }
`;
