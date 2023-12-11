import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function WelcomeCarusel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="welcome-carousel">
            <Slider {...settings}>
                <div className="carousel-item">
                    <h1>Opanuj chaos codzienności i zorganizuj swój dzień!</h1>
                    <p>Spróbuj teraz i doświadcz efektywnego zarządzania czasem, korzystając z intuicyjnej aplikacji do planowania zadań. !</p>
                </div>
                <div className="carousel-item">
                    <h1>Niech Twoje zadania będą pod kontrolą!</h1>
                    <p>Nasza aplikacja do planowania zadań umożliwia łatwe zarządzanie obowiązkami, dzięki czemu możesz skupić się na tym, co naprawdę ważne. Wypróbuj już dziś!"</p>
                </div>
                <div className="carousel-item">
                    <h1>Zapomnij o zapominalstwie!</h1>
                    <p>Przywitaj się z aplikacją do planowania zadań, która nie tylko ułatwia organizację obowiązków, ale także pomaga w skutecznym osiąganiu celów. Dołącz do naszej społeczności efektywności już teraz!"</p>
                </div>
            </Slider>
        </section>
    );
}

export default WelcomeCarusel;
