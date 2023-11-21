import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../Utils/supabase.js';

export default function RegisterScreen() {
    const navigation = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');

    async function handleSignUp(e) {
        e.preventDefault();

        const { data, error } = await supabase.auth.signUp({
            name: e.target.elements[0].value,
            surname: e.target.elements[1].value,
            email: e.target.elements[2].value,
            password: e.target.elements[3].value,
            company: e.target.elements[4].value,
            userType: selectedOption,
        });

        if (!error) {
            console.log(data);
            navigation('/signin');
            return;
        }

        console.error(error);
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
                                <option value="option1">User</option>
                                <option value="option2">Admin</option>
                            </select>
                            <button>Zarejestruj się</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
