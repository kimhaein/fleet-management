import React, { FC, useEffect, useState } from 'react';
import MapContainer from '../../templates/mapTemplate/map/MapContainer';
import MapSidePopup from '../../templates/mapTemplate/popup/MapSidePopup';
import MapCardList from '../../templates/mapTemplate/contents/MapCardList';
import BaseContents from '../../templates/baseTemplate/BaseContents';
import BaseSection from '../../templates/baseTemplate/BaseSection';
import MapPopup from '../../templates/mapTemplate/popup/MapPopup';
import { DescriptionsContents } from '../../atoms/descriptions/Descriptions';
import { Alert, List, Tag } from 'antd';
import Marquee from 'react-fast-marquee';
import styled from 'styled-components';
import { SwapOutlined } from '@ant-design/icons';

interface PropTypes {}

const DashBoardPage: FC<PropTypes> = () => {
  const [openSidePopup, setOpenSidePopup] = useState<boolean>(false);
  const [openMonitorPopup, setOpenMonitorPopup] = useState<boolean>(false);
  const [openStationPopup, setOpenStationPopup] = useState<boolean>(false);
  const [selectedVehicleId, setSelectedVehicleId] = useState<number>(null);
  const [selectedStationId, setSelectedStationId] = useState<number>(null);

  useEffect(() => {
    setOpenMonitorPopup(!!selectedVehicleId);
    if (selectedVehicleId) {
      setSelectedStationId(null);
    }
  }, [selectedVehicleId]);

  useEffect(() => {
    setOpenStationPopup(!!selectedStationId);
    if (selectedStationId) {
      setSelectedVehicleId(null);
    }
  }, [selectedStationId]);

  return (
    <>
      <div>관제</div>
      <div onClick={() => setSelectedStationId((prev) => (prev === 3 ? null : 3))}>정류장</div>
      <BaseSection style={{ marginTop: 14 }}>
        <MapCardList setOpenSidePopup={setOpenSidePopup} selectedId={selectedVehicleId} setSelectedId={setSelectedVehicleId} />
        <BaseContents className={'full'}>
          <MapContainer />
        </BaseContents>
        <MapSidePopup openSidePopup={openSidePopup} setOpenSidePopup={setOpenSidePopup} />
        <MapPopup
          title={
            <>
              <Tag color="geekblue">운행중</Tag> | 기사명 (40허1234)
            </>
          }
          tagTitle="실시간 정보"
          openPopup={openMonitorPopup}
          setSelectedId={setSelectedVehicleId}
        >
          <DescriptionsContents data={dummyDescriptions} />
        </MapPopup>
        <MapPopup
          title={
            <>
              서초문화예정보학교 (22005)
              <div style={{ fontSize: 12 }}>양재역엘타워빌딩 방면</div>
            </>
          }
          tagTitle="정류장 정보"
          openPopup={openStationPopup}
          setSelectedId={setSelectedStationId}
        >
          <Alert
            style={{ margin: '12px 0' }}
            type="warning"
            message={
              <Marquee pauseOnHover gradient={false}>
                <Tag>3012</Tag> <Tag>123</Tag> <Tag>421</Tag>
              </Marquee>
            }
          />
          <div style={{ height: 400, overflow: 'auto' }}>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <VehicleListItem>
                  <div>
                    <Tag>3012</Tag>
                    <span className="subText">양재역,양재1동 민원분소 방면</span>
                  </div>
                  <div>
                    서울 | 송파차고지 <SwapOutlined /> 이촌2동
                  </div>
                </VehicleListItem>
              )}
            />
          </div>
        </MapPopup>
      </BaseSection>
    </>
  );
};
export default DashBoardPage;

const VehicleListItem = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid #ddd;
  > div {
    margin-bottom: 5px;
  }
  .subText {
    font-size: 11px;
    color: #aaa;
  }
`;

const dummyDescriptions = [
  {
    data: {
      status: '운행중',
      station: '상암중학교',
    },
    label: {
      status: '운행 상태',
      station: '이동중인 정류장',
    },
  },
];

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
