import React, { useState } from 'react';
import MailIcon from '../icons/MailIcon.js';
import LinkedInIcon from '../icons/LinkedInIcon.js';
import GitHubIcon from '../icons/GitHubIcon.js';

function Header() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="headerBar">
                <div className="headerContainer">
                    {/* <div className="headerName">CIERRA HIGGINS</div> */}
                </div>
                <div className="headerLinks">
                    <a href="#about" className="headerLink">About</a>
                    <a href="#experience" className="headerLink">Experience</a>
                    <a href="#contact" className="headerLink">Contact</a>
                </div>
                <div className={open ? 'burgerOpen' : 'burgerClosed'} onClick={() => setOpen(!open)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={open ? 'menuOpen' : 'menuClosed'}>
                    <a href="#about" onClick={() => setOpen(!open)}>About</a>
                    <a href="#experience" onClick={() => setOpen(!open)}>Experience</a>
                    <a href="#contact" onClick={() => setOpen(!open)}>Contact</a>
                </div>
            </div>
            <div className="headerBackground"/>
        </div>
    );
}

export default Header;