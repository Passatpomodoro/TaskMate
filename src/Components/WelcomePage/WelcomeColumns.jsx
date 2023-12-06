import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTimeline, faBook } from '@fortawesome/free-solid-svg-icons';

library.add(faClock, faTimeline, faBook);

    function WelcomeColumns(){
    return (
        <>
        <section className="container">
            <div className ="row welcomeColumn">
                <div className="col-4">
                    <div className="icon-center">
                        <FontAwesomeIcon className="welcomeColumn-icon" icon="fa-solid fa-clock" />
                    </div>
                    <h3>Oszczędzaj Cenny Czas i Zwiększ Produktywność:</h3>
                    <p>
                        Nasza zaawansowana aplikacja do planowania zadań oferuje skuteczne narzędzia, dzięki którym możesz zapanować nad chaosem codzienności. Oszczędzaj cenny czas, eliminując zbędne zadania i skupiając się na najważniejszych priorytetach. Dzięki precyzyjnemu planowaniu i inteligentnym przypomnieniom zwiększysz swoją produktywność, mając więcej czasu na to, co naprawdę kochasz robić.
                    </p>
                </div>

                <div className="col-4">
                    <div className="icon-center">
                        <FontAwesomeIcon className="welcomeColumn-icon" icon="fa-solid fa-timeline" />
                    </div>
                    <h3>Planuj na Linii Czasu, Śledź Dynamiczny Postęp:</h3>
                    <p>
                        Unikalna funkcja planowania na linii czasu w naszej aplikacji pozwala ci nie tylko organizować zadania, ale także śledzić dynamiczny postęp. Widzisz, co zostało zrobione, co aktualnie realizujesz, i co czeka przed tobą. Ta wizualna reprezentacja czasu umożliwia lepsze zrozumienie swojego tempa pracy i efektywniejsze planowanie długoterminowe. Jesteś na fali postępu, zawsze gotowy na kolejne wyzwania.
                    </p>
                </div>

                <div className="col-4">
                    <div className="icon-center">
                        <FontAwesomeIcon className="welcomeColumn-icon" icon="fa-solid fa-book" />
                    </div>
                    <h3>Twoja Spersonalizowana Książka Codzienności:</h3>
                    <p>Stwórz swoją własną, pełną inspiracji książkę codziennych sukcesów przy użyciu naszej aplikacji do planowania zadań. Nie tylko organizujesz swoje zadania, ale także dokumentujesz swoje przeżycia, cele i refleksje. To jak prowadzenie dziennika, ale bardziej interaktywne i skoncentrowane na planowaniu przyszłości. Twoje codzienne zadania stają się kluczowymi rozdziałami w tej spersonalizowanej historii, a ty masz kontrolę nad kształtowaniem swojego życia.</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default WelcomeColumns;