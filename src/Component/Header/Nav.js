import React from 'react';

import './Nav.css';
import hamburger from '../../images/icon-hamburger.svg';
import close from '../../images/icon-close.svg';


const Nav = () => {
    return <nav>
        <div className='logo-div'>loopstudios</div>
        <div className ='nav-container'>
            <div className='close-div'>
                <img src={close} alt='' />
            </div>
            <p className='burger-menu-logo'>loopstudios</p>
            <ul className='nav-list'>
                <li className='nav-list__link'>About</li>
                <li className='nav-list__link'>Careers</li>
                <li className='nav-list__link'>Event</li>
                <li className='nav-list__link'>Products</li>
                <li className='nav-list__link'>Support</li>
            </ul>
        </div>
        <div className='hamburger-div'>
            <img src={hamburger} alt='' />
        </div>


    </nav>
}

export default Nav