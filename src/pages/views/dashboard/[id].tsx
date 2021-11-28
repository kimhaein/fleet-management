import React from 'react';
import { NextPage, NextPageContext } from 'next';

interface PropTypes {
    id: string;
}
const Dashboard: NextPage<PropTypes> = (props:PropTypes) => {
    const { id } = props;
    return <div>{id}</div>
}

export async function getServerSideProps(ctx: NextPageContext) {
    const props: PropTypes = {
        id: ctx.query.id as any,
    };

    return { props };
}

export default Dashboard