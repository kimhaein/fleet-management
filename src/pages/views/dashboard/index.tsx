import React from 'react';
import { NextPage, NextPageContext } from 'next';
import { Layout } from 'antd';
const { Content } = Layout;

interface PropTypes {
    title: string;
    posts: string;
}
const Dashboard: NextPage<PropTypes> = (props:PropTypes) => {
    const { posts } = props;
    return <div>{posts}</div>
}

export async function getServerSideProps(ctx: NextPageContext) {
    console.log(ctx.query)
    const props: PropTypes = {
        title: 'server',
        posts: ctx.query.title as any,
    };

    return { props };
}

export default Dashboard