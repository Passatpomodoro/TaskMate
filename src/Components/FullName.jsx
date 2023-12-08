import { useEffect, useState } from 'react';
import supabase from '../Utils/supabase';

function FullName() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('bananas')
                .select('name, surname');

            if (!error && data) {
                // Zakładając, że chcesz pierwszy element z tablicy
                setUserData(data[0]);
            } else {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {userData && (
                <>
                    <p>{userData.name}</p>
                    <p>{userData.surname}</p>
                </>
            )}
        </>
    );
}

export default FullName;