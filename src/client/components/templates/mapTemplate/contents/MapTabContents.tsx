import React, { FC } from 'react';
import { Tabs, Tag } from 'antd';
const { TabPane } = Tabs;
import MapContainer from '../map/MapContainer';
import styled from 'styled-components';
import TimeLine from '../../../atoms/timeLine/TimeLine';
import { DescriptionsContents } from '../../../atoms/descriptions/Descriptions';

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
          <DescriptionsContents data={dummyDescriptions} />
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

const dummyDescriptions = [
  {
    data: {
      serviceName: '운송 서비스',
      routeName: '상암 테스트 노선',
      vehicleId: '00001',
      totalOrder: '0건',
      revenue: '0원',
    },
    label: {
      serviceName: '서비스명',
      routeName: '노선명',
      vehicleId: '차량운행 ID',
      totalOrder: '총 운행 건수',
      revenue: '총 매출',
    },
  },
];
