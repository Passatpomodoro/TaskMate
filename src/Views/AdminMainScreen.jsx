import MainHeader from "../Components/MainHeader.jsx";
import SidebarAdmin from "../Components/Admin/SidebarAdmin.jsx";
import AddNewTaskPanelAdmin from "../Components/Admin/AddNewTaskPanelAdmin.jsx";
import TodayTasks from "../Components/TodayTasks.jsx";

export default function AdminMainScreen () {
    return (
        <>
            <MainHeader />
            <SidebarAdmin />
            <AddNewTaskPanelAdmin />
            <TodayTasks />
        </>
    );
}