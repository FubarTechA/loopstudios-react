import REACT from 'react';

import './FooterSocials.css'

import Facebook from '../../images/icon-facebook.svg';
import Twitter from '../../images/icon-twitter.svg';
import Pinterest from '../../images/icon-pinterest.svg';
import Instagram from '../../images/icon-instagram.svg';




const FooterSocials = () => {
    return <div className='footer-socials'>
        <div className='footer-socials__container'>
            <div className='footer-socials__imgdiv'>
                <img src={Facebook} alt='' />
            </div>

            <div className='footer-socials__imgdiv'>
                <img src={Twitter} alt='' />
            </div>

            <div className='footer-socials__imgdiv'>
                <img src={Pinterest} alt='' />
            </div>

            <div className='footer-socials__imgdiv'>
                <img src={Instagram} alt='' />
            </div>
        </div>
        <p>&#169; 2021 Loopstudios. All rights reserved</p>
    </div>
};

export default FooterSocials;