import supabase from "../Utils/supabase.js";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export default function TodayTasks () {

    const navigation = useNavigate();

    const [session,setSession] = useState(null);
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        getSession();
    }, []);

    useEffect(() =>{
        if(session){
            getNotes();
        }
    }, [session])

    async function getSession(){
        const { data, error } = await supabase.auth.getSession();

        if (error) {
            console.error(error);
        }

        setSession(data.session);

        if (!data.session) {
            navigation('/signin');
            return
        }
    }

    async function getNotes (){
        let { data: Notes, error } = await supabase
            .from('Notes')
            .select("*")
            .eq('user_id', session.user.id);
        if (!error){
            setNotes(Notes);
            return;
        }
        console.error(error);
    }

    return (
        <div className="main-add-task">
            <div className="">
                <ul>
                    {
                        notes && notes.map(note => (
                            <li key={note.id}>{note.note} {note.date}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}