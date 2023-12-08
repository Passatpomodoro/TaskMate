import { useEffect, useState } from 'react';
import supabase from '../Utils/supabase';

function CompanyName () {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const session = supabase.auth.session;
            const user = session ? session.user : null;

            const { data, error } = await supabase
                .from('bananas')
                .select('id, company')
                .eq('id', user ? user.id : null);
            console.log(data)
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
                    <p>{userData.company}</p>
                </>
            )}
        </>
    );
}

export default CompanyName;