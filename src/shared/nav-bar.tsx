import React from 'react';
import { INavItem } from './nav-item.model';
import { NavItem } from './nav-item';

interface Props {
    items: ReadonlyArray<INavItem>;
}

export function NavBar(props: Props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {props.items.map((item: INavItem, idx: number) => (
                        <NavItem key={`nav_${idx}`} item={item} />
                    ))}
                </ul>
            </div>
        </nav>
    );
}
