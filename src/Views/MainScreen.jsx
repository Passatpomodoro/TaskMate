
import Sidebar from "../Components/SiderBar.jsx";
import GetNotes from "../Components/GetNotes.jsx";
import "../Sass/MainScreen.scss"
import MainHeader from "../Components/MainHeader.jsx";
import AddNewTaskPanel from "../Components/AddNewTaskPanel.jsx";


function MainScreen() {

    return (
        <>
            <MainHeader/>
            <Sidebar/>
            <AddNewTaskPanel/>
            <GetNotes/>
        </>
    );
}

export default MainScreen;
