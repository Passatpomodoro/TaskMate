import './Sass/App.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import LoginScreen from "./Views/LoginScreen.jsx";
import WelcomeScreen from "./Views/WelcomeScreen.jsx";
import RegisterScreen from "./Views/RegisterScreen.jsx";
import MainScreen from "./Views/MainScreen.jsx";
import CreateNotesFor from "./Components/Admin/CreateNotesFor.jsx";
import MyNotes from "./Components/User/MyNotes.jsx";
import AdminMainScreen from "./Views/AdminMainScreen.jsx";
import MyDoneNotes from "./Components/User/MyDoneNotes.jsx";
import CreateNotes from "./Components/User/CreateNotes.jsx";
import CreateNotesAdmin from "./Components/Admin/CreateNotesAdmin.jsx";




function App () {
    return (
        <Router>
            <Routes>
                 <Route path="/" element={<WelcomeScreen/>}/>
                <Route path="/signin" element={<LoginScreen/>}/>
                <Route path="/signup" element={<RegisterScreen/>}/>
                <Route path="/mainscreen" element={<MainScreen/>}/>
                <Route path="/createnotes" element={<CreateNotes/>}/>
                <Route path="/mynotes" element={<MyNotes/>}/>
                <Route path="/mydonenotes" element={<MyDoneNotes/>}/>
                <Route path="/adminmainscreen" element={<AdminMainScreen/>}/>
                <Route path="/createnotesfor" element={<CreateNotesFor/>}/>
                <Route path="/createnotesadmin" element={<CreateNotesAdmin/>}/>
            </Routes>
        </Router>
    )
}

export default App;