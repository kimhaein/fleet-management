import React, { FC } from 'react';
import { Descriptions, Tabs, Tag } from 'antd';
const { TabPane } = Tabs;
import MapContainer from '../map/MapContainer';
import styled from 'styled-components';
import TimeLine from '../../../atoms/timeLine/TimeLine';

interface PropTypes {}

const MapTabContents: FC<PropTypes> = (props: PropTypes) => {
  return (
    <Tabs
      onChange={() => {
        console.log(1);
      }}
    >
      <TabPane tab="운행 정보" key="1">
        <TabContentsWrap>
          <Descriptions bordered size="small" column={1}>
            <Descriptions.Item label="서비스명">서비스 이름</Descriptions.Item>
            <Descriptions.Item label="노선명"> 노선 이름</Descriptions.Item>
            <Descriptions.Item label="차량운행 ID">6002</Descriptions.Item>
            <Descriptions.Item label="운행건수">4건</Descriptions.Item>
            <Descriptions.Item label="매출">0원</Descriptions.Item>
          </Descriptions>
        </TabContentsWrap>
      </TabPane>
      <TabPane tab="경로 이력" key="2">
        <TabContentsWrap>
          <div style={{ position: 'relative', width: '100%', height: 200, marginBottom: 14 }}>
            <MapContainer />
          </div>
          <h1>경로 이력</h1>
          <div>
            {dummy.map((item) => {
              return (
                <TimeLine
                  key={item.id}
                  id={item.id}
                  title={
                    <p>
                      <Tag color="geekblue">운행중</Tag> 3423
                    </p>
                  }
                  data={item}
                  dataKey={[
                    { time: 'arrivalDateTime', location: 'arrivalStationName' },
                    { time: 'boardingDateTime', location: 'boardingStationName' },
                  ]}
                />
              );
            })}
          </div>
        </TabContentsWrap>
      </TabPane>
    </Tabs>
  );
};

export default MapTabContents;

const TabContentsWrap = styled.div`
  flex-direction: column;
`;

const dummy = [
  { id: 1, arrivalDateTime: '10:45:27', arrivalStationName: '한샘사옥 앞', boardingDateTime: '10:45:27', boardingStationName: '첨단산업센터' },
  { id: 2, arrivalDateTime: '10:30:27', arrivalStationName: '첨단산업센터', boardingDateTime: '10:30:27', boardingStationName: '한샘사옥 앞' },
];
