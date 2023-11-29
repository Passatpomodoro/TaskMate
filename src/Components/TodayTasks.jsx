import supabase from "../Utils/supabase.js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Sass/TodayTasks.scss";

export default function TodayTasks() {
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
            const filteredNotes = Notes.filter(note => {
                const noteDate = new Date(note.date);
                const currentDate = new Date();

                const isTodayOrEarlier = noteDate <= currentDate;

                // Sprawdzamy czy data zadania jest o 1 dzień wcześniejsza niż bieżąca dla zadań z priorytetem High
                const isHighPriorityAndOneDayEarlier = note.priority === 'High' && noteDate <= new Date(currentDate.setDate(currentDate.getDate() - 1));

                return isTodayOrEarlier || isHighPriorityAndOneDayEarlier;
            });

            setNotes(filteredNotes);
            return;
        }
        console.error(error);
    }

    return (
        <div className="main-today-tasks">
            <div className="main-today-tasks-table">
                <ul>
                    {notes &&
                        notes.map((note) => (
                            <li key={note.id}>
                                {note.note} {note.date}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}
