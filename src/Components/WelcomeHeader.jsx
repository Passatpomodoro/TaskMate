import { Link } from "react-router-dom";

function WelcomeHeader() {
    return (
        <header className="container header">
            <div className="row welcomeHeader">
                <h1 className="col-1 logo">Task<span className="logo-second-color">Mate</span></h1>
                <nav className="col-11">
                    <ul className="welcomeMenu">
                        <li><Link to="/signin">Zacznij planowanie!</Link></li>
                        <li><Link to="/kontakt">Kontakt</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default WelcomeHeader;
