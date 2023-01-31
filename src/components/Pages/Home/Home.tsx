import React, { } from 'react';
import Converter from '../../Converter/Converter';
import Avatar from '../../Avatar/Avatar';

import './Home.scss';

export const Home = () => {

    return (
        <div className='home'>
            <Avatar />
            <Converter />
        </div>
    );
};