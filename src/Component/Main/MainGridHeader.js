import React, {useState} from 'react';

import './MainGridHeader.css';

const MainGridHeader = () => {
    const [isValid, setIsValid] = useState(false);

    const mouseOverHandler = () => {
        setIsValid(true)
    };

    const mouseOutHandler = () => {
        setIsValid(false)
    }


    return <div className='main-grid__header'>
        <h2>OUR CREATIONS</h2>
        <button className={`${isValid && 'hover'}`} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>SEE ALL</button>
    </div>
}

export default MainGridHeader;