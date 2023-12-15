
import React from 'react';
import Sidebar from "../Components/User/SiderBar.jsx";
import "../Sass/MainScreen.scss";
import MainHeader from "../Components/MainHeader.jsx";
import AddNewTaskPanel from "../Components/User/AddNewTaskPanel.jsx";
import TodayTasks from "../Components/TodayTasks.jsx";

function MainScreen() {
    return (
        <>
            <Sidebar />
            <MainHeader />
            <AddNewTaskPanel />
            <TodayTasks />
        </>
    );
}

export default MainScreen;