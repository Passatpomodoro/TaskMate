import React, { useState } from "react";
import AddNewTaskPanel from "./AddNewTaskPanel";
import TodayTasks from "./TodayTasks";
import CreateNotes from "./CreateNotes";

export default function MainComponent() {
    const [activeComponent, setActiveComponent] = useState("addNewTask");

    const handleButtonClick = () => {
        setActiveComponent("createNotes");
    };

    return (
        <div className="main-container">
            {activeComponent === "addNewTask" && <AddNewTaskPanel />}
            {activeComponent === "todayTasks" && <TodayTasks />}
            {activeComponent === "createNotes" && <CreateNotes />}
            <button onClick={handleButtonClick}>Nowe zadanie</button>
        </div>
    );
}
