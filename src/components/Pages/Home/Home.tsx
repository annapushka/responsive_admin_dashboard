import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react";
import dashboardStore from '../../../store/dashboardStore';

import { biCartFill, biEyeFill, biSearch, biChatFill, biCurrencyDollar } from "fontawesome-bootstrap-icons";

import { Card } from '../../Card/Card';

import './Home.scss';

import userAvatar from '../../../img/user_icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const classNames = require('classnames');


export const Home: React.FC = observer(() => {
    const { navigationActive, changeNavigationStatus } = dashboardStore;

    const [active, setActive] = useState(navigationActive);

    useEffect(() => { setActive(navigationActive) }, [navigationActive]);


    const handlerClick = () => {
        setActive(!active);
        changeNavigationStatus(!active)
    }

    let activeClass = classNames({
        'topbar__toggle active': active,
        'topbar__toggle': !active,
    });

    let activeClassHome = classNames({
        'home home__active': active,
        'home': !active,
    });

    return (
        <div className={activeClassHome}>
            <div className="topbar">
                <div className={activeClass} onClick={handlerClick}>
                </div>
                <div className="topbar__search">
                    <label htmlFor="">
                        <input type="text" placeholder='Search...' />
                        <FontAwesomeIcon icon={biSearch} className="topbar__search-icon" />
                    </label>
                </div>
                <div className="topbar__user">
                    <img src={userAvatar} alt="user avatar" />
                </div>
            </div>
            <div className="cardBox">
                <Card name='Deily Viwes' number='1,402' icon={biEyeFill} />
                <Card name='Sales' number='80' icon={biCartFill} />
                <Card name='Comments' number='208' icon={biChatFill} />
                <Card name='Earning' number='$6,042' icon={biCurrencyDollar} />
            </div>
        </div>
    );
});