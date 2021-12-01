import React, { FC, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import { Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import MapTabContents from '../contents/MapTabContents';

interface PropTypes {
  openSidePopup: boolean;
  setOpenSidePopup: (flag: boolean) => void;
}

const MapSidePopup: FC<PropTypes> = ({ openSidePopup, setOpenSidePopup }: PropTypes) => {
  const [styles, api] = useSpring({ x: -50, y: 0, config: { duration: 150, tension: 100 } }, []);

  useEffect(() => {
    api.start({ x: openSidePopup ? 250 : -150, y: 0 });
  }, [openSidePopup]);

  return (
    <DetailPopup style={styles} className={'open'}>
      <DetailPopupTitle>
        <div>상세 정보 | 기사명 (40허1234)</div>
        <Space>
          <div onClick={() => setOpenSidePopup(false)}>
            <CloseOutlined />
          </div>
        </Space>
      </DetailPopupTitle>
      <DetailPopupContents>
        <MapTabContents />
      </DetailPopupContents>
    </DetailPopup>
  );
};

export default MapSidePopup;

const DetailPopup = styled(animated.div)`
  position: absolute;
  top: 14px;
  width: 300px;
  z-index: 100;
  background: #fff;
  box-shadow: 3px 0px 10px rgba(136, 136, 136, 0.4);
  padding: 14px;

  &.open {
    height: calc(100% - 14px);
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
