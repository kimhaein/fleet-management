import { Descriptions as AntdDescriptions } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Descriptions = AntdDescriptions;

interface PropTypes {
  data: {
    title?: string;
    data: any;
    label: any;
    required?: string[];
    column?: number;
  }[];
}

const DescriptionsContents = ({ data = [] }: PropTypes) => {
  return (
    <>
      {(data || []).map((item, index) => {
        const column = item.column || 1;
        const descriptionsItem = (Object.keys(item.label) ?? []).map((key) => {
          const required = item.required?.includes(key) || false;
          return (
            <Descriptions.Item
              label={
                <>
                  {required && <RequiredMarker>*</RequiredMarker>}
                  {item.label[key]}
                </>
              }
              key={`item-${index}`}
            >
              {typeof item.data[key] !== 'function' ? item.data?.[key] : item.data?.[key]()}
            </Descriptions.Item>
          );
        });

        return (
          <DescriptionsWrap title={item.title} bordered key={index} size="middle" column={column}>
            {descriptionsItem}
          </DescriptionsWrap>
        );
      })}
    </>
  );
};
export { Descriptions, DescriptionsContents };

const DescriptionsWrap = styled(Descriptions)`
  .ant-form-item {
    margin: 0;
  }
`;

const RequiredMarker = styled.span`
  color: red;
  margin-right: 2px;
`;
