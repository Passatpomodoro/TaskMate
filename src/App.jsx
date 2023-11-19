import './App.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import LoginScreen from "./Views/LoginScreen.jsx";
import WelcomeScreen from "./Views/WelcomeScreen.jsx";
import RegisterScreen from "./Views/RegisterScreen.jsx";
import MainScreen from "./Views/MainScreen.jsx";



function App () {
    return (
        <Router>
            <Routes>
                 <Route path="/" element={<WelcomeScreen/>}/>
                <Route path="/signin" element={<LoginScreen/>}/>
                <Route path="/signup" element={<RegisterScreen/>}/>
                <Route path="/mainscreen" element={<MainScreen/>}/>
            </Routes>
        </Router>
    )
}

export default App;