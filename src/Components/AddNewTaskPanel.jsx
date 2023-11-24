import React from 'react';
import '../Sass/AddNewTaskPanel.scss';

export default function AddNewTaskPanel({ onButtonClick }) {
    return (
        <div className="main-add-task">
            <div className="link-container">
                <button onClick={() => onButtonClick('createNotes')}>Nowe zadanie</button>
            </div>
        </div>
    );
}
