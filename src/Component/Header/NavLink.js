import React, {useState} from 'react'

import './NavLink.css';

const NavLink = (props) => {
    const [isValid, setIsValid] = useState(false)

    const mouseOverHandler = (event) => {
        // event.target.classList.add('hover')
        setIsValid(true);
        console.log(isValid);
    }

    const mouseOutHandler = (event) => {
        // event.target.classList.remove('hover')
        setIsValid(false);
        console.log(isValid);

    }

    return <li className={`nav-list__link ${isValid && 'hover'}`} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>{props.children}</li>
};

export default NavLink;