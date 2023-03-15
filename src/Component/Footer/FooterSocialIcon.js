import React, {useState} from 'react';

import './FooterSocialIcon.css'

const FooterSocialIcon = (props) => {

    const [isValid, setIsValid] = useState(false);

    const mouseOverHandler = () => {
        setIsValid(true);
    }

    const mouseOutHandler = () => {
        setIsValid(false)
    }

    return <div className={`footer-socials__imgdiv ${isValid && 'hover'}`} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
        <img src={props.src} alt='' />
</div>
}

export default FooterSocialIcon;