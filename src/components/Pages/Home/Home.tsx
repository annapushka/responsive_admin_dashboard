import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react";
import dashboardStore from '../../../store/dashboardStore';

import { biSearch } from "fontawesome-bootstrap-icons";

import { CardBox } from '../../CardBox/CardBox';

import './Home.scss';

import userAvatar from '../../../img/user_icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames';
import { Details } from '../../Details/Details';


export const Home: React.FC = observer(() => {
    const { navigationActive, changeNavigationStatus } = dashboardStore;

    const [active, setActive] = useState(navigationActive);

    useEffect(() => { setActive(navigationActive) }, [navigationActive]);


    const handlerClick = () => {
        setActive(!active);
        changeNavigationStatus(!active)
    }

    const activeClass = classNames({
        'topbar__toggle active': active,
        'topbar__toggle': !active,
    });

    const activeClassHome = classNames({
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
            <CardBox />
            <Details />
        </div>
    );
});