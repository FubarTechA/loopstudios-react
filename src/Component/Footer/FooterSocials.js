import REACT from 'react';

import './FooterSocials.css'
import FooterSocialIcon from './FooterSocialIcon';

import Facebook from '../../images/icon-facebook.svg';
import Twitter from '../../images/icon-twitter.svg';
import Pinterest from '../../images/icon-pinterest.svg';
import Instagram from '../../images/icon-instagram.svg';


const FooterIcons = [Facebook, Twitter, Pinterest, Instagram]

const FooterSocials = () => {
    return <div className='footer-socials'>
        <div className='footer-socials__container'>
            {FooterIcons.map(icon =>      <FooterSocialIcon src={icon}>
                </FooterSocialIcon>)}

        </div>
        <p>&#169; 2021 Loopstudios. All rights reserved</p>
    </div>
};

export default FooterSocials;