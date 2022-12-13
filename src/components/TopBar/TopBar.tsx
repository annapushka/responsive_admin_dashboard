// @flow 
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { biSearch } from "fontawesome-bootstrap-icons";

import userAvatar from '../../img/user_icon.jpg'

import './TopBar.scss';

import classNames from 'classnames';

type Props = {
    active: boolean;
    handlerClick: React.MouseEventHandler<HTMLElement>;
};
export const TopBar = (props: Props) => {

    const activeClass = classNames({
        'topbar__toggle active': props.active,
        'topbar__toggle': !props.active,
    });

    return (
        <div className="topbar">
            <div className={activeClass} onClick={props.handlerClick}>
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
    );
};