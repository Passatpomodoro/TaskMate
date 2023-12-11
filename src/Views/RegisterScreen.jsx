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

        const { data, error } = await supabase.auth.signUp(
            {
                email: email,
                password: password,
                options: {
                    data: {
                        name: name,
                        surname: surname,
                        company: company,
                        userType: userType
                    }
                }
            }
        )

        if (!error) {
            navigation('/signin');
            console.log(data);

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
                            <input name="name" placeholder="Imię" />
                            <input name="surname" placeholder="Nazwisko" />
                            <input name="email" placeholder="Email" />
                            <input name="password" placeholder="Hasło" type="password" />
                            <input name="company" placeholder="Nazwa Firmy" />
                            <select name="userType" value={selectedOption} onChange={handleOptionChange}>
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
