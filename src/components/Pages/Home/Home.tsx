import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react";
import dashboardStore from '../../../store/dashboardStore';

import { CardBox } from '../../CardBox/CardBox';

import './Home.scss';

import classNames from 'classnames';
import { Details } from '../../Details/Details';
import { TopBar } from '../../TopBar/TopBar';


export const Home: React.FC = observer(() => {
    const { navigationActive, changeNavigationStatus } = dashboardStore;

    const [active, setActive] = useState(navigationActive);

    useEffect(() => { setActive(navigationActive) }, [navigationActive]);


    const handlerClick = () => {
        setActive(!active);
        changeNavigationStatus(!active)
    }

    const activeClassHome = classNames({
        'home home__active': active,
        'home': !active,
    });

    return (
        <div className={activeClassHome}>
            <TopBar active={active} handlerClick={handlerClick} />
            <CardBox />
            <Details />
        </div>
    );
});