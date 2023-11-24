import React, { useState } from 'react';
import Sidebar from "../Components/SiderBar.jsx";
import GetNotes from "../Components/GetNotes.jsx";
import "../Sass/MainScreen.scss"
import MainHeader from "../Components/MainHeader.jsx";
import AddNewTaskPanel from "../Components/AddNewTaskPanel.jsx";
import TodayTasks from "../Components/TodayTasks.jsx";
import CreateNotes from '../Components/CreateNotes.jsx';


function MainScreen() {

    const [visibleComponent, setVisibleComponent] = useState('visible');

    const handleButtonClick = () => {
        setVisibleComponent('hidden');
    };

    return (
        <>
            <MainHeader/>
            <Sidebar/>
            {visibleComponent === 'visible' && <AddNewTaskPanel onButtonClick={handleButtonClick} />}
            {visibleComponent === 'visible' && <TodayTasks onButtonClick={handleButtonClick} />}
            {visibleComponent === 'hidden' && <CreateNotes />}
        </>
    );
}

export default MainScreen;
