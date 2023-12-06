import supabase from "../Utils/supabase.js";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
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

                const isHighPriorityAndOneDayEarlier =
                    note.priority === 'High' &&
                    noteDate <= new Date(currentDate.setDate(currentDate.getDate() - 1));

                return isTodayOrEarlier || isHighPriorityAndOneDayEarlier;
            });

            setNotes(filteredNotes);
            return;
        }
        console.error(error);
    }

    const getPriorityClass = priority => {
        switch (priority) {
            case 'High':
                return 'high-priority';
            case 'Medium':
                return 'medium-priority';
            case 'Low':
                return 'low-priority';
            default:
                return '';
        }
    };

    async function handleEditNote(noteId, currentNote, currentDate) {

        const editedNote = prompt("Edytuj notatkę:", currentNote);
        let editedDate = new Date(prompt("Edytuj datę:", currentDate));
        editedDate = editedDate.toISOString().split('T')[0];

        if (editedNote !== null && editedDate !== null) {
            const { error } = await supabase
                .from('Notes')
                .update({ note: editedNote, date: editedDate })
                .eq('id', noteId);

            if (!error) {
                setNotes(prevNotes => {
                    return prevNotes.map(note => {
                        if (note.id === noteId) {
                            return { ...note, note: editedNote, date: editedDate };
                        }
                        return note;
                    });
                });
                return;
            }
            console.error(error);
        }
    }


    async function handleDeleteNote(noteId) {
        const { error } = await supabase
            .from('Notes')
            .delete()
            .eq('id', noteId);

        if (!error) {
            setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId));
        } else {
            console.error(error);
        }
    }

    async function handleNoteDone(noteId) {
        const noteToMove = notes.find(note => note.id === noteId);

        if (noteToMove) {
            const {error } = await supabase
                .from('Done')
                .insert([
                    { user_id: session.user.id, ...noteToMove },
                ])
                .select();

            if (!error) {
                const updatedNotes = notes.filter(note => note.id !== noteId);
                setNotes(updatedNotes);
            } else {
                console.error(error);
            }
        }
    }


    return (
        <div className="main-today-tasks">
            <div className="main-today-tasks-table">
                <ul>
                    {notes &&
                        notes.map(note => (
                            <li className={`list-styling ${getPriorityClass(note.priority)}`} key={note.id}>
                                <div>
                                    {note.note} {note.date}
                                </div>
                                <div>
                                    <button onClick={() => handleEditNote(note.id, note.note, note.date)}>
                                        Edytuj
                                    </button>
                                    <button onClick={() => handleDeleteNote(note.id)}>
                                        Usuń
                                    </button>
                                    <button onClick={() => handleNoteDone(note.id, note.note, note.date)}>
                                        Wykonane
                                    </button>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}
