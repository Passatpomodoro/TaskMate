import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import supabase from "../Utils/supabase.js";
import "../Sass/CreateNotes.scss";
import MainHeader from "./MainHeader.jsx";
import Sidebar from "./SiderBar.jsx";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX} from '@fortawesome/free-solid-svg-icons';

library.add(faX);
export default function CreateNotes() {
    const navigation = useNavigate();

    const [session, setSession] = useState(null);
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        getSession();
    }, []);

    useEffect(() => {
        if (session) {
            getNotes();
        }
    }, [session]);

    async function getSession() {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
            console.error(error);
        }

        setSession(data.session);

        if (!data.session) {
            navigation('/signin');
            return;
        }
    }

    async function getNotes() {
        let { data: Notes, error } = await supabase
            .from('Notes')
            .select("*")
            .eq('user_id', session.user.id);
        if (!error) {
            setNotes(Notes);
            return;
        }
        console.error(error);
    }

    async function handleNoteSave(e) {
        e.preventDefault();
        const { data, error } = await supabase
            .from('Notes')
            .insert([
                { user_id: session.user.id, note: e.target.elements[0].value, date: e.target.elements[1].value, priority: e.target.elements[2].value },
            ])
            .select();

        if (!error) {
            setNotes(prev => [...prev, data[0]]);
            navigation('/mainscreen');
            return;
        }
        console.error(error);
    }
    const handleNavigateBack = () => {
        navigation('/mainscreen');
    };

    return (
        <>
            <MainHeader />
            <Sidebar />
            <div className="main-create-notes">
                <div onClick={handleNavigateBack}>
                    <FontAwesomeIcon className="close" icon="fa-solid fa-x" />
                </div>
                <div className="main-create-notes-form">
                    <div>
                        <h3>Napisz notatkę</h3>
                        <h3>Wybierz datę realizacji zadania</h3>
                        <h3>Ustaw Priorytet</h3>
                    </div>
                    <div className="main-create-notes-inputs">
                        <form onSubmit={handleNoteSave}>
                            <textarea />
                            <input type="date" placeholder="Select a date" />
                            <select>
                                <option value="">Wybierz opcję</option>
                                <option value="High">Wysoki Priorytet</option>
                                <option value="Medium">Średni Priorytet</option>
                                <option value="Low">Niski Priorytet</option>
                            </select>
                            <button type="submit">Zapisz</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
