
import { Link } from 'react-router-dom';
import "../../Sass/SideBar.scss"

export default function Sidebar () {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/mainscreen">Zadania na dziś</Link>
                    </li>
                    <li>
                        <Link to="/mynotes">Moje zadania</Link>
                    </li>
                    <li>
                        <Link to="/mydonenotes">Wykonane zadania</Link>
                    </li>
                    <li>
                        <Link to="/">Pracownicy</Link>
                    </li>
                </ul>
                <p> NAZWA FIRMY </p>
            </div>
        </>
    );
}
