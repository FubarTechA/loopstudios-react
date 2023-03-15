import React from 'react';

import './MainGrid.css';

const MainGrid = (props) => {
    const hoverCommand = (event) => {
        const targetOverlay = event.target.closest('.grid-item').querySelector('.overlay')
        const targetH3 =  event.target.closest('.grid-item').querySelector('h3')

        targetOverlay.classList.add('hover')
        targetH3.classList.add('hover')
        
    };

    const hoverOutCommand = (event) => {
        const targetOverlay = event.target.closest('.grid-item').querySelector('.overlay')
        const targetH3 =  event.target.closest('.grid-item').querySelector('h3')

        targetOverlay.classList.remove('hover')
        targetH3.classList.remove('hover')
        
    };

    return <div className='grid-container'>
        {props.pictures.map((picture, i) => {
            return <div className='grid-item' onMouseOver={hoverCommand} onMouseOut={hoverOutCommand} style={{'backgroundImage': `url(${picture})`}}>
                <div className='overlay'></div>
                <h3>{props.titles[i]}</h3>
            </div>
        })}
    </div>
}

export default MainGrid;