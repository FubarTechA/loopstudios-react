import React from 'react';

import './Nav.css';
import hamburger from '../../images/icon-hamburger.svg';
import close from '../../images/icon-close.svg';


const Nav = () => {

    const mouseOverHandler = (event) => {
        console.log(event.target)
        event.target.classList.add('hover')
    }

    const mouseOutHandler = (event) => {
        event.target.classList.remove('hover')

    }

    const openClickHandler = (event) => {
        console.log('clicked')
        const NavMenu = document.querySelector('.nav-container')
        NavMenu.classList.add('show')
    }

    const closeCLickHandler = () => {
        const NavMenu = document.querySelector('.nav-container')
        NavMenu.classList.remove('show')
    }
    
    return <nav>
        <div className='logo-div'>loopstudios</div>
        <div className ='nav-container'>
            <div className='close-div' onClick={closeCLickHandler}>
                <img src={close} alt='' />
            </div>
            <p className='burger-menu-logo'>loopstudios</p>
            <ul className='nav-list'>
                <li className='nav-list__link' onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>About</li>
                <li className='nav-list__link'  onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>Careers</li>
                <li className='nav-list__link'  onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>Event</li>
                <li className='nav-list__link'  onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>Products</li>
                <li className='nav-list__link'  onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>Support</li>
            </ul>
        </div>
        <div className='hamburger-div' onClick={openClickHandler}>
            <img src={hamburger} alt=''/>
        </div>


    </nav>
}

export default Nav