import React, { useState, useEffect } from 'react';
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
import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";


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

    const lngs = {
        en: { nativeName: "English" },
        ru: { nativeName: "Russian" },
    };

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
                    <Link to='/toDoList'>
                        <span className='navigation__icon'><FontAwesomeIcon icon={biCheckCircleFill} /></span>
                        <span className='navigation__title'>
                            ToDoList
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
            <div>
                {Object.keys(lngs).map((lng) => (
                    <button
                        type="submit"
                        key={lng}
                        onClick={() => i18next.changeLanguage(lng)}
                        disabled={i18next.resolvedLanguage === lng}
                    >
                        {lngs[lng].nativeName}
                    </button>
                ))}
            </div>
        </div>
    );
});

export default Navigation;
