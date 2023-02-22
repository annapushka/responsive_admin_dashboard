import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    biApple,
    biHouseFill,
    biPeopleFill,
    biChatDotsFill,
    biGearFill,
    biLockFill,
    biBoxArrowRight,
    biCheckCircleFill
} from "fontawesome-bootstrap-icons";

import dashboardStore from '../../store/dashboardStore';

import './Navigation.scss';

import classNames from 'classnames';

const Navigation: React.FC = observer(() => {

    const { t } = useTranslation();

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
                            <h2>{t('navigation.pageTitle.brandName')}</h2>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/dashboard'>
                        <span className='navigation__icon'><FontAwesomeIcon icon={biHouseFill} /></span>
                        <span className='navigation__title'>
                        {t('navigation.pageTitle.dashboard')}
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/toDoList'>
                        <span className='navigation__icon'><FontAwesomeIcon icon={biCheckCircleFill} /></span>
                        <span className='navigation__title'>
                        {t('navigation.pageTitle.toDoList')}
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/customers'>
                        <span className='navigation__icon'><FontAwesomeIcon icon={biPeopleFill} /></span>
                        <span className='navigation__title'>
                        {t('navigation.pageTitle.customers')}
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/messages'>
                        <span className='navigation__icon'><FontAwesomeIcon icon={biChatDotsFill} /></span>
                        <span className='navigation__title'>
                        {t('navigation.pageTitle.messages')}
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/settings'>
                        <span className='navigation__icon'><FontAwesomeIcon icon={biGearFill} /></span>
                        <span className='navigation__title'>
                        {t('navigation.pageTitle.settings')}
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/password'>
                        <span className='navigation__icon'><FontAwesomeIcon icon={biLockFill} /></span>
                        <span className='navigation__title'>
                        {t('navigation.pageTitle.password')}
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/signout'>
                        <span className='navigation__icon'><FontAwesomeIcon icon={biBoxArrowRight} /></span>
                        <span className='navigation__title'>
                        {t('navigation.pageTitle.signOut')}
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    );
});

export default Navigation;
