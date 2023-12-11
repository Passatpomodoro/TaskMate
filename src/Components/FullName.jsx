import { useEffect, useState } from 'react';
import supabase from '../Utils/supabase';

function FullName() {
    const [name, setName] = useState(null);
    const [surname, setSurname] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();

                const userName = session?.user?.user_metadata?.name;
                const userSurname = session?.user?.user_metadata?.surname;

                setName(userName);
                setSurname(userSurname);

            } catch (error) {
                console.error('Błąd podczas pobierania danych:', error.message);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            {name && surname && (
                <>
                    <p>{name}</p>
                    <p>{surname}</p>
                </>
            )}
        </>
    );
}

export default FullName;
