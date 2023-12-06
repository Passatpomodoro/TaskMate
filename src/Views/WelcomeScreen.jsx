import WelcomeHeader from "../Components/WelcomePage/WelcomeHeader.jsx";
import WelcomeCarusel from "../Components/WelcomePage/WelcomeCarusel.jsx";
import CallToAction from "../Components/WelcomePage/CallToAction.jsx";
import WelcomeColumns from "../Components/WelcomePage/WelcomeColumns.jsx";
import WelcomeFooter from "../Components/WelcomePage/WelcomeFooter.jsx";

function WelcomeScreen() {
    return (
        <>
            <WelcomeHeader/>
            <WelcomeCarusel/>
            <CallToAction/>
            <WelcomeColumns/>
            <WelcomeFooter/>
        </>
    );
}

export default WelcomeScreen;
