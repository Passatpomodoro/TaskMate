import {
    useNavigate
} from "react-router-dom";
import supabase from "../Utils/supabase.js";

export  default function RegisterScreen() {

    const navigation = useNavigate()
    async function handleSignUp (e) {
        e.preventDefault();

        const { data, error } = await supabase.auth.signUp({
            email: e.target.elements[0].value,
            password: e.target.elements[1].value
        })
        if (!error) {
             console.log(data);
            navigation('/signin')
            return
        }
        console.error(error)
    }

    return (
        <>
        <h1>Rejestracja</h1>
        <form onSubmit={handleSignUp}>
            <input placeholder="email"/>
            <input placeholder="hasło" type="password"/>
            <button>Zarejestruj się</button>
        </form>
        </>
    );
}

