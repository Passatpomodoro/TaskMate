import supabase from "../Utils/supabase.js";
import { useNavigate } from "react-router-dom";

export default function MainHeader() {
    const navigation = useNavigate();

    async function handleSignOut() {
        const { error } = await supabase.auth.signOut();

        if (!error) {
            navigation('/signin');
            return;
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
    );
}
