import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../Utils/supabase.js';

export default function RegisterScreen() {
    const navigation = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault()

        const email = e.target.elements[2].value;
        const password = e.target.elements[3].value;

        const name = e.target.elements[0].value
        const surname = e.target.elements[1].value
        const company = e.target.elements[4].value
        const userType = selectedOption

        const userData = {email, password };
        const userProfile = {name, surname, company, userType}
        console.log("Przed rejestracją:", userData);
        const { user, error } = await supabase.auth.signUp(userData, userProfile);
        console.log("Po rejestracji:", user, error);

        if (user) {
            await supabase
                .from('profiles')
                .insert([
                    { id: user.id, name: e.target.elements[0].value, surname: e.target.elements[1].value, company: e.target.elements[4].value, userType: selectedOption,}
                ]);
        }

        if (!error) {
            console.log(user)
            navigation('/signin');
            console.log(userProfile)
        } else {
            console.error(error)
        }
    }

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <>
            <div className="signIn-container">
                <div className="inner-container">
                    <div className="signIn-align">
                        <h1>Rejestracja</h1>
                        <form onSubmit={handleSignUp}>
                            <input placeholder="Imię" />
                            <input placeholder="Nazwisko" />
                            <input placeholder="Email" />
                            <input placeholder="Hasło" type="password" />
                            <input placeholder="Nazwa Firmy" />
                            <select value={selectedOption} onChange={handleOptionChange}>
                                <option value="">Wybierz opcję</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                            <button>Zarejestruj się</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
