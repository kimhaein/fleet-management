import React from 'react';
import { NextPage, NextPageContext } from 'next';
import DashBoardPage from '../../../client/components/pages/dashboard/DashBoardPage';

interface PropTypes {
  title: string;
  posts: string;
}
const Dashboard: NextPage<PropTypes> = (props: PropTypes) => {
  const { posts } = props;
  return <DashBoardPage />;
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
