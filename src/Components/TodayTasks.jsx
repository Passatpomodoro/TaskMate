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

    // async function handleEditNote(noteId, updatedNote) {
    //     const { data, error } = await supabase
    //         .from('Notes')
    //         .update({ note: updatedNote })
    //         .eq('id', noteId)
    //         .select();
    //
    //     if (!error) {
    //         setNotes(prevNotes => {
    //             const updatedNotes = prevNotes.map(note => {
    //                 if (note.id === noteId) {
    //                     return { ...note, note: updatedNote };
    //                 }
    //                 return note;
    //             });
    //             return updatedNotes;
    //         });
    //         return;
    //     }
    //     console.error(error);
    // }

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
                                    {/*<button onClick={handleEditNote}>Edytuj</button>*/}
                                    <button>Przełóż</button>
                                    <button>Usuń</button>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}
