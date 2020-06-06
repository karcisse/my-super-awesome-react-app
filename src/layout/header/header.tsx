import React from 'react';
import { faSmileWink, faIgloo, faDoorClosed } from '@fortawesome/free-solid-svg-icons';

import logo from 'assets/images/logo.svg';
import { INavItem } from 'shared/nav-item.model';
import { NavBar } from 'shared/nav-bar';

export function Header() {
    const items: ReadonlyArray<INavItem> = [
        {
            path: '/',
            title: 'Home',
            icon: faIgloo
        },
        {
            path: '/dad-jokes',
            title: 'Dad jokes',
            icon: faSmileWink
        },
        {
            path: 'asdf',
            title: 'Under construction - DO NOT CLICK',
            icon: faDoorClosed
        }
    ]
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <NavBar items={items} />
        </header>
    );
};
