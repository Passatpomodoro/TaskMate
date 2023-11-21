
import { Link } from 'react-router-dom';
import "../Sass/SideBar.scss"

export default function Sidebar () {
    return (
        <>
            <div className="col-3 sidebar">
                <ul>
                    <li>
                        <Link to="/">Zadania na dziś</Link>
                    </li>
                    <li>
                        <Link to="/about">Moje zadania</Link>
                    </li>
                    <li>
                        <Link to="/contact">Wykonane zadania</Link>
                    </li>
                </ul>
                <p> NAZWA FIRMY </p>
            </div>
        </>
    );
}
