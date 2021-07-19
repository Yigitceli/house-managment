import React, { Component } from 'react';
import { useState } from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header() {

    const [active, setActive] = useState(false);
    const navBar = active ? 'nav-bar active' : 'nav-bar disactive';
    const navBarChanger = () => {
        setActive(!active);
    }


    return (
        <div>
            <header className="App-header">
                <div className="nav-icon">{active ? <i class="fas fa-times" onClick={navBarChanger}></i> : <i class="fas fa-bars" onClick={navBarChanger}></i>}</div>
                <div className={navBar}>
                    <ul>
                        <div className="link-div"><Link className="link"><li><i class="fas fa-angle-double-right"></i>Daire ve Müşteri Ekle</li></Link></div>
                        <div className="link-div"><Link className="link"><li><i class="fas fa-angle-double-right"></i>Daire Kiralama/Satın Alım</li></Link></div>
                        <div className="link-div"><Link className="link" to='/'><li><i class="fas fa-angle-double-right"></i>Müşteri ve Daire Listele</li></Link></div>
                        <div className="link-div"><Link className="link"><li><i class="fas fa-angle-double-right"></i>Daire Bilgileri Görüntüle</li></Link></div>
                        
                        
                        
                    
                    
                    
                    </ul>
                </div>
                <h1>Konut Yönetim Sistemi</h1>
            </header>
        </div>
    )

}

export default Header
