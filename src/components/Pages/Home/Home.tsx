// @flow 
import * as React from 'react';

import './Home.scss';

import userAvatar from '../../../img/user_icon.svg'

export const Home = () => {
    return (
        <div className='home'>
            <div className="topbar">
                <div className="topbar__toggle">
                </div>
                <div className="topbar__search">
                    <label htmlFor="">
                        <input type="text" placeholder='Search...' />
                    </label>
                </div>
                <div className="topbar__user">
                    <img src={userAvatar} alt="user avatar" />
                </div>
            </div>
        </div>
    );
};