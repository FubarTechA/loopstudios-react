import React from 'react'

import './Main.css'
import MainDetails from './MainDetails';
import MainGridContainer from './MainGridContainer';
import MainGrid from './MainGrid';

const Main = () => {
    return <main>
        <MainDetails />
        <MainGridContainer />
        <MainGrid />
        {/* <button></button> */}
    </main>
};

export default Main