import {useEffect, useState} from "react";
import supabase from "../Utils/supabase.js";
import {
    useNavigate
} from "react-router-dom";

function MainScreen() {

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

    async function handleSignOut(){
        const { error } = await supabase.auth.signOut()

        if (!error){
             navigation('/signin');
             return
        }
        console.error(error);
    }

    async function handleNoteSave (e) {
        e.preventDefault()
        const { data, error } = await supabase
            .from('Notes')
            .insert([
                { user_id: session.user.id, note: e.target.elements[0].value, date: e.target.elements[1].value},
            ])
            .select()
        if (!error){
            setNotes(prev => [...prev,data[0]]);
            return
        }
         console.error(error);
    }

    return (
        <>
            <h1>Main Screen</h1>
            <hr/>
            <form onSubmit={handleNoteSave}>
                <textarea/>
                <input type="date" placeholder="Select a date" />
                <button>Zapisz</button>
            </form>
            <hr/>
                <ul>
                    {
                        notes && notes.map(note => (
                            <li key={note.id}>{note.note} {note.date}</li>
                        ))
                    }
                </ul>
            <hr/>
            <button onClick={handleSignOut}>Wyloguj</button>
        </>
    );
}

export default MainScreen;
