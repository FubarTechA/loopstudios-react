import React from 'react';

import './FooterLinks.css';
import FooterLinkItem from './FooterLinkItem';

const footerLinkList = ['About', 'Careers', 'Events', 'Products', 'Support']

const FooterLinks = () => {
    return <div className='footer-links'>
        <p className='footer-logo'>loopstudios</p>
        <ul className='footer-link__list'>
            {footerLinkList.map(link => <FooterLinkItem>{link}</FooterLinkItem>)}
        </ul>
    </div>
};

export default FooterLinks