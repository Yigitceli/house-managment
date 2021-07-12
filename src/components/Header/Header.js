import React, { Component } from 'react';
import { useState } from 'react';
import './Header.css';

function Header() {

    const [active, setActive] = useState(false);
    const navBar = active ? 'nav-bar active' : 'nav-bar disactive';
    const navBarChanger = () => {
        setActive(!active);
    }


    return (
        <div>
            <header className="App-header">
                <div className="nav-icon"><i class="fas fa-bars" onClick={navBarChanger}></i></div>
                <div className={navBar}></div>
                <h1>Konut Yönetim Sistemi</h1>
            </header>
        </div>
    )

}

export default Header
