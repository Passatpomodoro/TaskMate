import {
    useNavigate
} from "react-router-dom";
import supabase from "../Utils/supabase.js";

export  default function LoginScreen() {

    const navigation = useNavigate()

    async function handleSignIn (e) {
        e.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email: e.target.elements[0].value,
            password: e.target.elements[1].value
        })
        if (!error) {
            console.log(data);
            navigation('/mainscreen')
            return
        }
        console.error(error)
    }

    return (
        <>
            <div className="signIn-container">
                <div className="inner-container">
                    <div className="signIn-align">
                        <h1>Logowanie</h1>
                        <form onSubmit={handleSignIn}>
                            <input placeholder="email"/>
                            <input placeholder="hasło" type="password"/>
                            <button>Zaloguj się</button>
                        </form>
                        <h1>Nie masz konta? Zarejestruj sie!</h1>
                        <button>Zarejestruj się</button>
                    </div>
                </div>
            </div>
        </>
    );
}

