
import { Link } from 'react-router-dom';
import "../../Sass/SideBar.scss"

export default function SidebarAdmin () {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/mainscreenadmin">Zadania na dziś</Link>
                    </li>
                    <li>
                        <Link to="/mynotesadmin">Moje zadania</Link>
                    </li>
                    <li>
                        <Link to="/mydonenotesadmin">Wykonane zadania</Link>
                    </li>
                    <li>
                        <Link to="userslist">Pracownicy</Link>
                    </li>
                </ul>
                <p> NAZWA FIRMY </p>
            </div>
        </>
    );
}
