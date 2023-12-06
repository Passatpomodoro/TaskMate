import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../Utils/supabase.js';

export default function RegisterScreen() {
    const navigation = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault()
        // 2 wersja
        // const userElements = {
        //     name: e.target.elements[0].value,
        //     surname: e.target.elements[1].value,
        //     company: e.target.elements[4].value,
        //     userType: selectedOption,
        // }
        //
        // const userData = {
        //     email: e.target.elements[2].value,
        //     password: e.target.elements[3].value,
        //     data: {
        //         raw_user_meta_data: JSON.stringify(userElements)
        //     },
        // }
        // wersja 1
        // const userData = {
        //     email: e.target.elements[2].value,
        //     password: e.target.elements[3].value,
        //     data: {
        //         name: e.target.elements[0].value,
        //         surname: e.target.elements[1].value,
        //         company: e.target.elements[4].value,
        //         userType: selectedOption,
        //     },
        // }
        //
        // const { users, error } = await supabase.auth.signUp(userData)
        // if (!error) {
        //     console.log(users)
        //     navigation('/signin');
        // }
        //
        // else {
        //     console.error(error)
        // }
        // wersja 3
        const email = e.target.elements[2].value;
        const password = e.target.elements[3].value;

        const userData = { email, password };

        const { user, error } = await supabase.auth.signUp(userData);

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
