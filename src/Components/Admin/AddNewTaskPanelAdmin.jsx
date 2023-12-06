// import React from 'react';
// import '../Sass/AddNewTaskPanel.scss';
//
// export default function AddNewTaskPanel({ onButtonClick }) {
//     return (
//         <div className="main-add-task">
//             <div className="link-container">
//                 <button onClick={() => onButtonClick('createNotes')}>Nowe zadanie</button>
//             </div>
//         </div>
//     );
// }

import { Link } from 'react-router-dom';
import '../../Sass/AddNewTaskPanel.scss';

export default function AddNewTaskPanel({ onButtonClick }) {
    return (
        <div className="main-add-task">
            <div className="link-container">
                <Link to="/createnotesadmin">
                    <button>Nowe zadanie</button>
                </Link>
                <Link to="/createnotesfor">
                    <button>Nowe zadanie dla kogoś</button>
                </Link>
            </div>
        </div>
    );
}