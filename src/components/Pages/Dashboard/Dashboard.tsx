// @flow 
import * as React from 'react';

import { CardBox } from '../../CardBox/CardBox';
import { Details } from '../../Details/Details';

type Props = {

};
export const Dashboard = (props: Props) => {
    return (
        <div>
            <CardBox />
            <Details />
        </div>
    );
};