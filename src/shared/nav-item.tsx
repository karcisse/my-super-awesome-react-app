import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { INavItem } from './nav-item.model';

interface Props {
    item: INavItem;
}

export function NavItem(props: Props) {
    const { path, title, icon } = props.item;
    const isActive = window.location.pathname === path;
    return (
        <li className={`nav-item ${isActive ? 'active' : ''}`}>
            <a className="nav-link" href={path}><span className="mr-1"><FontAwesomeIcon icon={icon} /></span>{title}</a>
        </li>
    );
}
