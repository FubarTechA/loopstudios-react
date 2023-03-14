import React from 'react';

import './MainGrid.css';

const MainGrid = (props) => {
    return <div className='grid-container'>
        {props.pictures.map((picture, i) => {
            return <div className='grid-item' style={{'backgroundImage': `url(${picture})`}}>
                <h3>{props.titles[i]}</h3>
            </div>
        })}
    </div>
}

export default MainGrid;