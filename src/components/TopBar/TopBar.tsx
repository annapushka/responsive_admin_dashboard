// @flow 
import * as React from 'react';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { biSearch } from "fontawesome-bootstrap-icons";

import userAvatar from '../../img/user_icon.jpg'

import './TopBar.scss';

import classNames from 'classnames';
import { LanguageToggle } from '../LanguageToggle/LanguageToggle';

type Props = {
    active: boolean;
    handlerClick: React.MouseEventHandler<HTMLElement>;
};
export const TopBar = (props: Props) => {

    const { t } = useTranslation();

    const activeClass = classNames({
        'topbar__toggle active': props.active,
        'topbar__toggle': !props.active,
    });

    const placeholder = `${t('topBar.search')}...`

    return (
        <div className="topbar">
            <div className={activeClass} onClick={props.handlerClick}>
            </div>
            <div className="topbar__search">
                <label htmlFor="">
                    <input type="text" placeholder={placeholder} />
                    <FontAwesomeIcon icon={biSearch} className="topbar__search-icon" />
                </label>
            </div>
            <div className='topbar__user-wrapper'>
                <LanguageToggle />
                <div className="topbar__user">
                    <img src={userAvatar} alt="user avatar" />
                </div>
            </div>
        </div>
    );
};