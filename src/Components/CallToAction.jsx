import React, { useState } from 'react';

function CallToAction() {
    const [isVisible, setIsVisible] = useState(true);

    const handleButtonClick = () => {
        setIsVisible(false);
    };

    return (
        <section className="container">
            {isVisible && (
                <div className="call-to-action row component-at-bottom">
                    <div className="content col-10">
                        <h3>Nasza strona korzysta z plików cookie</h3>
                        <p>
                            (tzw. ciasteczka) w celu świadczenia usług na najwyższym poziomie. Korzystanie z witryny oznacza zgodę na ich zapis lub odczyt wg ustawień przeglądarki.

                            Pliki cookie są małymi plikami tekstowymi przechowywanymi na Twoim urządzeniu, które pomagają nam zrozumieć, w jaki sposób korzystasz z naszej strony, co pozwala nam dostosować naszą witrynę do Twoich preferencji. Pliki cookie nie przechowują żadnych danych osobowych.

                            Jeśli nie zgadzasz się na korzystanie z plików cookie, możesz je wyłączyć w ustawieniach przeglądarki internetowej. Jednakże, wyłączenie plików cookie może wpłynąć na funkcjonalność niektórych elementów naszej witryny.

                            Dowiedz się więcej o plikach cookie, polityce prywatności i warunkach korzystania z naszej strony na naszej stronie internetowej.

                        </p>
                    </div>
                    <button onClick={handleButtonClick} className="col-2">Zgadzam się</button>
                </div>
            )}
        </section>
    );
}

export default CallToAction;
