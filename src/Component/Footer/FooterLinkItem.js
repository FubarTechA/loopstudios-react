import React, {useState} from 'react';

import './FooterLinkItem.css';

const FooterLInkItem = (props) => {
    const [isValid, setIsValid] = useState(false);

    const mouseOutHandler = () => {
        setIsValid(false)
    }

    const mouseOverHandler = () => {
        setIsValid(true)
    }

    return <li className={`footer-link ${isValid && 'hover'}`} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>{props.children}</li>
}


export default FooterLInkItem;