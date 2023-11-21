import {Link} from "react-router-dom";
import "../Sass/AddNewTaskPanel.scss"
export default function AddNewTaskPanel () {

    return (
        <div className="main-add-task">
            <div className="link-container">
                <button>
                    <Link to="/">Nowe zadanie</Link>
                </button>
            </div>
        </div>
    );
}

