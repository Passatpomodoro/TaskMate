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
import CreateNotes from "./Components/CreateNotes.jsx";
import MyNotes from "./Components/MyNotes.jsx";



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
            </Routes>
        </Router>
    )
}

export default App;