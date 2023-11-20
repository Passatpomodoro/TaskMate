
function WelcomeFooter () {
    return (
        <>
            <footer className="container welcomeFooter">
                <div className="row welcomeFooter-box">
                    <div className="col-4">
                        <h4>O nas</h4>
                        <p>TaskMate to innowacyjne narzędzie do efektywnego zarządzania czasem.</p>
                    </div>
                    <div className="col-4">
                        <h4>Nasze Usługi</h4>
                        <ul className="welcomeFooter-list">
                            <li>Zarządzanie Czasem i Priorytetami</li>
                            <li>Planowanie na Linii Czasu dla Projektów</li>
                            <li>Książka Codzienności i Śledzenie Rozwoju Osobistego</li>
                            <li>Integracja Zasobów Zewnętrznych i Kalendarza</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h4>Kontakt</h4>
                        <p>Zapraszamy do kontaktu poprzez adres email: kontakt@taskmate.com</p>
                    </div>
                </div>
                <div className="row welcomeFooter-span">
                    <div className="col-12">
                        <span>&copy; 2023 TaskMate. Wszelkie prawa zastrzeżone.</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default WelcomeFooter;