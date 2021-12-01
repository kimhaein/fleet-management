import React, { FC } from 'react';
import { BankOutlined, CarOutlined, EllipsisOutlined, NodeIndexOutlined } from '@ant-design/icons';
import Card from '../../../atoms/card/Card';
import { Tag } from 'antd';
import BaseContents from '../../baseTemplate/BaseContents';
import styled from 'styled-components';

interface PropTypes {
  setOpenSidePopup: (flag: boolean) => void;
  setSelectedId: (id: number) => void;
  selectedId: number;
}

const tagColor: { [key: string]: string } = {
  status01: 'geekblue',
  status02: 'orange',
  status03: 'red',
};

const MapCardList: FC<PropTypes> = ({ setOpenSidePopup, selectedId, setSelectedId }: PropTypes) => {
  return (
    <BaseContents style={{ width: 260 }}>
      <CardWrap>
        {dummy.map((item) => {
          const style: any = selectedId === item.id ? { background: '#f4f0ff' } : {};
          if (item.statusCode === 'status03') {
            style.background = '#E64949';
            style.color = '#fff';
          }
          const color = tagColor[item.statusCode];
          return (
            <Card
              key={item.id}
              size="small"
              title={
                <span style={style}>
                  <Tag color={color}>{item.status}</Tag> {item.driverName}
                </span>
              }
              extra={
                <EllipsisOutlined
                  style={style}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenSidePopup(true);
                  }}
                />
              }
              style={{ marginBottom: 7, ...style }}
              onClick={() => {
                setSelectedId(selectedId === item.id ? null : item.id);
              }}
            >
              <div style={{ marginBottom: 7 }}>
                <BankOutlined /> {item.companyName} | <CarOutlined /> {item.vehicleRegisteredNumber}
              </div>
              <div>
                <NodeIndexOutlined /> 상암 테스트 노선
              </div>
            </Card>
          );
        })}
      </CardWrap>
    </BaseContents>
  );
};

export default MapCardList;

const CardWrap = styled.div`
  position: absolute;
  overflow: auto;
  z-index: 10000;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 14px;
`;

const dummy = [
  {
    id: 1,
    driverName: '홍길동',
    statusCode: 'status01',
    status: '운행중',
    companyName: '서울 모빌리티',
    routeName: '서울 강남 노선',
    vehicleRegisteredNumber: '40허1234',
  },
  {
    id: 2,
    driverName: '김기린',
    statusCode: 'status02',
    status: '배차대기',
    companyName: '서울 모빌리티',
    routeName: '서울 강남 노선',
    vehicleRegisteredNumber: '40허1234',
  },
  {
    id: 3,
    driverName: '김철수',
    statusCode: 'status02',
    status: '배차대기',
    companyName: '세종 모빌리티',
    routeName: '서울 강남 노선',
    vehicleRegisteredNumber: '40허1234',
  },
  {
    id: 4,
    driverName: '박영희',
    statusCode: 'status03',
    status: '긴급',
    companyName: '세종 모빌리티',
    routeName: '서울 상암 노선',
    vehicleRegisteredNumber: '40허1234',
  },
  {
    id: 5,
    driverName: '홍길동',
    statusCode: 'status02',
    status: '배차대기',
    companyName: '서울 모빌리티',
    routeName: '서울 상암 노선',
    vehicleRegisteredNumber: '40허1234',
  },
  {
    id: 6,
    driverName: '김기린',
    statusCode: 'status01',
    status: '운행중',
    companyName: '세종 모빌리티',
    routeName: '서울 상암 노선',
    vehicleRegisteredNumber: '40허1234',
  },
  {
    id: 7,
    driverName: '김철수',
    statusCode: 'status01',
    status: '운행중',
    companyName: '세종 모빌리티',
    routeName: '서울 상암 노선',
    vehicleRegisteredNumber: '40허1234',
  },
];
