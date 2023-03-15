import React from 'react'

import './Main.css'
import MainDetails from './MainDetails';
import MainGridContainer from './MainGridContainer';
import MainGrid from './MainGrid';
import Mobileimg1 from '../../images/mobile/image-deep-earth.jpg';
import Mobileimg2 from '../../images/mobile/image-night-arcade.jpg';
import Mobileimg3 from '../../images/mobile/image-soccer-team.jpg';
import Mobileimg4 from '../../images/mobile/image-grid.jpg';
import Mobileimg5 from '../../images/mobile/image-from-above.jpg';
import Mobileimg6 from '../../images/mobile/image-pocket-borealis.jpg';
import Mobileimg7 from '../../images/mobile/image-curiosity.jpg'
import Mobileimg8 from '../../images/mobile/image-fisheye.jpg'

import Desktopimg1 from '../../images/desktop/image-deep-earth.jpg';
import Desktopimg2 from '../../images/desktop/image-night-arcade.jpg';
import Desktopimg3 from '../../images/desktop/image-soccer-team.jpg';
import Desktopimg4 from '../../images/desktop/image-grid.jpg';
import Desktopimg5 from '../../images/desktop/image-from-above.jpg';
import Desktopimg6 from '../../images/desktop/image-pocket-borealis.jpg';
import Desktopimg7 from '../../images/desktop/image-curiosity.jpg'
import Desktopimg8 from '../../images/desktop/image-fisheye.jpg'

const MOBILE_IMAGES = [Mobileimg1, Mobileimg2, Mobileimg3, Mobileimg4, Mobileimg5, Mobileimg6, Mobileimg7, Mobileimg8]

const DESKTOP_IMAGES = [Desktopimg1, Desktopimg2, Desktopimg3, Desktopimg4, Desktopimg5, Desktopimg6, Desktopimg7, Desktopimg8]

const GRIDWRITEUP_ARRAY = ['DEEP EARTH', 'NIGHT ARCADE', 'SOCCER TEAM VR', 'THE GRID', 'FROM UP ABOVE VR', 'POCKET BOREALIS', 'THE CURIOSITY', 'MAKE IT FISHEYE']



const Main = () => {
    let images; 
    if(window.innerWidth <= 480){
        images = MOBILE_IMAGES;
    }else images = DESKTOP_IMAGES
    // console.log(images)
    return <main>
        <MainDetails />
        <MainGridContainer />
        <MainGrid pictures={images} titles={GRIDWRITEUP_ARRAY}/>
        <button className='see-btn'>SEE ALL</button>
    </main>
};

export default Main