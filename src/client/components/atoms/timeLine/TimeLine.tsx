import React, { FC, ReactNode } from 'react';
import { Timeline as AntTimeline, TimelineProps, Tag, Space } from 'antd';
import styled from 'styled-components';

interface PropTypes extends TimelineProps {
  title?: ReactNode;
  data: any;
  onClick?: (id: string | number) => void;
  id: string | number;
  dataKey: { time: string; location: string }[];
}

const TimeLine: FC<PropTypes> = ({ title, data, onClick, id, dataKey, ...props }: PropTypes) => {
  return (
    <TimeLineWrap onClick={() => onClick?.(data['id'])}>
      {title && <div style={{ marginBottom: 20 }}>{title}</div>}
      <AntTimeline {...props}>
        <AntTimeline.Item>
          <ItemWrap>
            {data[dataKey[0].time]} <strong>{data[dataKey[0].location]}</strong>
          </ItemWrap>
        </AntTimeline.Item>
        <AntTimeline.Item>
          <ItemWrap>
            {data[dataKey[1].time]} <strong>{data[dataKey[1].location]}</strong>
          </ItemWrap>
        </AntTimeline.Item>
      </AntTimeline>
    </TimeLineWrap>
  );
};
export default TimeLine;

const TimeLineWrap = styled.div`
  height: 120px;
  margin-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
`;

const ItemWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
