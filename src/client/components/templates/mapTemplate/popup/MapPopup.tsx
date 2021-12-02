import React, { CSSProperties, FC, ReactNode, useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Space, Tag } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';

interface PropTypes {
  tagTitle?: string;
  openPopup: boolean;
  setSelectedId: (id: number) => void;
  title?: ReactNode;
  children: ReactNode;
  style?: CSSProperties;
}

const MapPopup: FC<PropTypes> = ({ tagTitle, openPopup, setSelectedId, title, children, style }: PropTypes) => {
  const [minimization, setMinimization] = useState<boolean>(false);
  const [styles, api] = useSpring({ x: 0, y: 0, config: { duration: 150, tension: 100 } }, []);

  useEffect(() => {
    api.start({ x: !minimization ? 0 : 300, y: 0 });
  }, [minimization]);

  return (
    <>
      {openPopup ? (
        <PopupWrap style={{ ...styles, ...style }}>
          <DetailPopupTitle>
            <div>{title}</div>
            <Space>
              <div onClick={() => setSelectedId(null)}>
                <CloseOutlined />
              </div>
            </Space>
          </DetailPopupTitle>
          <DetailPopupContents>{children}</DetailPopupContents>
          <TitleTag onClick={() => setMinimization((prev: boolean) => !prev)}>{tagTitle}</TitleTag>
        </PopupWrap>
      ) : null}
    </>
  );
};

export default MapPopup;

const PopupWrap = styled(animated.div)`
  position: absolute;
  top: 14px;
  width: 300px;
  min-height: 120px;
  z-index: 100;
  background: #fff;
  box-shadow: 3px 0px 10px rgba(136, 136, 136, 0.4);
  padding: 14px;
  right: 0;

  &.open {
    max-height: calc(100% - 824px);
  }
`;

const DetailPopupTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;

const DetailPopupContents = styled.div`
  margin-top: 10px;
  height: calc(100% - 30px);
  padding: 0px 4px;
`;

const TitleTag = styled.div`
  position: absolute;
  top: 0;
  left: -32px;
  min-width: 30px;
  background: #5a46fa;
  color: #fff;
  padding: 10px 5px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;
