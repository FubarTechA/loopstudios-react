import React from 'react';

import './Nav.css';

const Nav = () => {
    return <nav>
        <div className='logo-div'>Loopstudios</div>
        <ul className='nav-list'>
            <li className='nav-list__link'>About</li>
            <li className='nav-list__link'>Careers</li>
            <li className='nav-list__link'>Event</li>
            <li className='nav-list__link'>Products</li>
            <li className='nav-list__link'>Support</li>
        </ul>
    </nav>
}

export default Nav