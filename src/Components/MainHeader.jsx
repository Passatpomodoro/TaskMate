import supabase from "../Utils/supabase.js";
import {
    useNavigate
} from "react-router-dom";
import Sidebar from "../Components/SiderBar.jsx";
import GetNotes from "../Components/GetNotes.jsx";

export default function MainHeader (){
async function handleSignOut(){
    const { error } = await supabase.auth.signOut()

    if (!error){
        navigation('/signin');
        return
    }
    console.error(error);
}
    return (
        <>
            <header className="main-header">
                <h1 className="logo">Task<span className="logo-second-color">Mate</span></h1>
                <div className="main-logout">
                    <p>Imię</p>
                    <p>Nazwisko</p>
                    <button onClick={handleSignOut}>Wyloguj</button>
                </div>
            </header>
        </>
    )
}
