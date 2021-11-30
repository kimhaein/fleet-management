import React, { FC, useState } from 'react';
import { Tabs, Card, Tag, Timeline, Descriptions, Space } from 'antd';
const { TabPane } = Tabs;
import MapTemplates from '../../templates/mapTemplates/MapTemplates';
import { ArrowsAltOutlined, ShrinkOutlined, CloseOutlined, EllipsisOutlined } from '@ant-design/icons';
import styled from 'styled-components';

interface PropTypes {}

const DashBoardPage: FC<PropTypes> = () => {
  const [isDetailModal, setIsDetailModal] = useState<boolean>(false);
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(true);

  return (
    <>
      <BaseContents style={{ background: '#fff', margin: 14, height: 80 }}>검색</BaseContents>
      <BaseSection>
        <BaseContents style={{ width: 230, padding: '0 14px 14px' }}>
          <div>
            {[1, 2, 3, 4, 5].map((index: number) => (
              <Card
                key={index}
                style={{ marginBottom: 14 }}
                size="small"
                title={
                  <>
                    <Tag color="geekblue">운행중</Tag> 기사명
                  </>
                }
                extra={<EllipsisOutlined onClick={() => setIsDetailModal((prev) => !prev)} />}
              >
                <div>소속 : 법인명</div>
                <div>차량 번호 : 40허1234</div>
              </Card>
            ))}
          </div>
        </BaseContents>
        <BaseContents className={'full'} style={{ marginRight: 14 }}>
          <DetailPopup className={'right open'}>
            <DetailPopupTitle>
              <div>실시간 정보 | 기사명 (40허1234)</div>
              <Space>
                <div
                  onClick={() => {
                    setIsDetailOpen((prev: boolean) => !prev);
                  }}
                >
                  {isDetailOpen ? <ShrinkOutlined /> : <ArrowsAltOutlined />}
                </div>
                <div onClick={() => setIsDetailModal(false)}>
                  <CloseOutlined />
                </div>
              </Space>
            </DetailPopupTitle>
            <DetailPopupContents>123123123123123 123123123</DetailPopupContents>
          </DetailPopup>
          <MapTemplates />
          {isDetailModal && (
            <DetailPopup className={isDetailOpen ? 'open left' : 'left'}>
              <DetailPopupTitle>
                <div>상세 정보 | 기사명 (40허1234)</div>
                <Space>
                  <div
                    onClick={() => {
                      setIsDetailOpen((prev: boolean) => !prev);
                    }}
                  >
                    {isDetailOpen ? <ShrinkOutlined /> : <ArrowsAltOutlined />}
                  </div>
                  <div onClick={() => setIsDetailModal(false)}>
                    <CloseOutlined />
                  </div>
                </Space>
              </DetailPopupTitle>
              {isDetailOpen && (
                <DetailPopupContents>
                  <Tabs
                    onChange={() => {
                      console.log(1);
                    }}
                  >
                    <TabPane tab="운행 정보" key="1">
                      <TabContents>
                        <Descriptions bordered size="small" column={1}>
                          <Descriptions.Item label="서비스명">서비스 이름</Descriptions.Item>
                          <Descriptions.Item label="노선명"> 노선 이름</Descriptions.Item>
                          <Descriptions.Item label="차량운행 ID">6002</Descriptions.Item>
                          <Descriptions.Item label="운행건수">4건</Descriptions.Item>
                          <Descriptions.Item label="매출">0원</Descriptions.Item>
                        </Descriptions>
                      </TabContents>
                    </TabPane>
                    <TabPane tab="경로 이력" key="2">
                      <TabContents>
                        <div style={{ position: 'relative', width: '100%', height: 250, marginBottom: 14 }}>
                          <MapTemplates />
                        </div>
                        <h1>경로 이력</h1>
                        <div>
                          <div>
                            <p>
                              {' '}
                              <Tag color="geekblue">운행중</Tag> 3423
                            </p>
                            <Timeline>
                              <Timeline.Item>10:45:27 한샘사옥 앞</Timeline.Item>
                              <Timeline.Item>10:46:51 상암중학교</Timeline.Item>
                            </Timeline>
                          </div>
                          <div>
                            <p>
                              {' '}
                              <Tag color="geekblue">운행중</Tag> 3423
                            </p>
                            <Timeline>
                              <Timeline.Item>10:45:27 한샘사옥 앞</Timeline.Item>
                              <Timeline.Item>10:46:51 상암중학교</Timeline.Item>
                            </Timeline>
                          </div>
                          <div>
                            <p>
                              {' '}
                              <Tag color="geekblue">운행중</Tag> 3423
                            </p>
                            <Timeline>
                              <Timeline.Item>10:45:27 한샘사옥 앞</Timeline.Item>
                              <Timeline.Item>10:46:51 상암중학교</Timeline.Item>
                            </Timeline>
                          </div>
                        </div>
                      </TabContents>
                    </TabPane>
                  </Tabs>
                </DetailPopupContents>
              )}
            </DetailPopup>
          )}
        </BaseContents>
      </BaseSection>
    </>
  );
};
export default DashBoardPage;

const BaseSection = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const BaseContents = styled.div`
  position: relative;
  background: #f0f2f5;

  &.full {
    flex: 1;
  }
`;

const DetailPopup = styled.div`
  position: absolute;
  top: 10px;
  width: 350px;
  z-index: 9999;
  background: #fff;
  box-shadow: 3px 3px 5px rgba(136, 136, 136, 0.6);
  padding: 14px;

  &.open {
    height: calc(100% - 20px);
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
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

const TabContents = styled.div`
  flex-direction: column;
`;
