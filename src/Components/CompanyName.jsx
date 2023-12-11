import { useEffect, useState } from 'react';
import supabase from '../Utils/supabase';

function CompanyName() {
    const [company, setCompany] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();

                const userCompany = session?.user?.user_metadata?.company;

                setCompany(userCompany);
                console.log(userCompany);

            } catch (error) {
                console.error('Błąd podczas pobierania danych:', error.message);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            {company &&  (
                <>
                    <p>{company}</p>
                </>
            )}
        </>
    );
}

export default CompanyName;
