import React from 'react';

import logo from 'assets/images/logo.svg';

export function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              This is <code>my-super-awesome-react-app</code> to show my react skills and pass the <code>Advanced mobile applications programing</code>.
            </p>
        </header>
    );
};
