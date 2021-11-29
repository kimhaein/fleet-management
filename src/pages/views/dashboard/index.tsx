import React from 'react';
import { NextPage, NextPageContext } from 'next';
import DashBoadPage from '../../../client/components/pages/dashboard/DashBoradPage';
interface PropTypes {
  title: string;
  posts: string;
}
const Dashboard: NextPage<PropTypes> = (props: PropTypes) => {
  const { posts } = props;
  return <DashBoadPage />;
};

export async function getServerSideProps(ctx: NextPageContext) {
  console.log(ctx.query);
  const props: PropTypes = {
    title: 'server',
    posts: ctx.query.title as any,
  };

  return { props };
}

export default Dashboard;
