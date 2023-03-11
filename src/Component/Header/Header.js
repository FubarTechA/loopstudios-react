import React from 'react';

import './Header.css'
import Nav from './Nav'
import HeaderBanner from './HeaderBanner'

const Header = () => {
    return <header className='loop-header'>
        <Nav />
        <HeaderBanner />
    </header>
}

export default Header
