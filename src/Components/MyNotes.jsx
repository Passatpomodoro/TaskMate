import supabase from "../Utils/supabase.js";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import "../Sass/TodayTasks.scss"
import MainHeader from "./MainHeader.jsx";
import Sidebar from "./SiderBar.jsx";
import AddNewTaskPanel from "./AddNewTaskPanel.jsx";
export default function MyNotes(){

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
            <>
                <MainHeader/>
                <Sidebar/>
                <AddNewTaskPanel/>
                <div className="main-today-tasks">
                    <div className="main-today-tasks-table">
                        <ul>
                            {
                                notes && notes.map(note => (
                                    <li key={note.id}>{note.note} {note.date}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </>
        );
    }
