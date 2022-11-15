import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    biApple,
    biHouseFill,
    biPeopleFill,
    biChatDotsFill,
    biQuestionCircleFill,
    biGearFill,
    biLockFill,
    biBoxArrowRight
} from "fontawesome-bootstrap-icons";

import dashboardStore from '../../store/dashboardStore';

import './Navigation.scss';

import classNames from 'classnames';

const Navigation: React.FC = observer(() => {

    const { navigationActive, changeNavigationStatus } = dashboardStore;

    const [active, setActive] = useState(navigationActive);

    useEffect(() => { setActive(navigationActive) }, [navigationActive]);

    const handlerClick = () => {
        setActive(!active);
        changeNavigationStatus(!active)
    }

    const activeClass = classNames({
        'navigation active': active,
        'navigation': !active,
    });

    return (
        <div className={activeClass} onClick={handlerClick}>
            <ul>
                <li>
                    <Link to='/'>
                        <span className='navigation__icon'><FontAwesomeIcon icon={biApple} /></span>
                        <span className='navigation__title'>
                            <h2>Brand name</h2>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/dashboard'>
                        <span className='navigation__icon'><FontAwesomeIcon icon={biHouseFill} /></span>
                        <span className='navigation__title'>
                            Dashboard
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/customers'>
                        <span className='navigation__icon'><FontAwesomeIcon icon={biPeopleFill} /></span>
                        <span className='navigation__title'>
                            Customers
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/messages'>
                        <span className='navigation__icon'><FontAwesomeIcon icon={biChatDotsFill} /></span>
                        <span className='navigation__title'>
                            Messages
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/help'>
                        <span className='navigation__icon'><FontAwesomeIcon icon={biQuestionCircleFill} /></span>
                        <span className='navigation__title'>
                            Help
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/settings'>
                        <span className='navigation__icon'><FontAwesomeIcon icon={biGearFill} /></span>
                        <span className='navigation__title'>
                            Settings
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/password'>
                        <span className='navigation__icon'><FontAwesomeIcon icon={biLockFill} /></span>
                        <span className='navigation__title'>
                            Password
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/signout'>
                        <span className='navigation__icon'><FontAwesomeIcon icon={biBoxArrowRight} /></span>
                        <span className='navigation__title'>
                            Sign Out
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    );
});

export default Navigation;
