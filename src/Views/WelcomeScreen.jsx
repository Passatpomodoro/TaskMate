import WelcomeHeader from "../Components/WelcomeHeader.jsx";
import WelcomeCarusel from "../Components/WelcomeCarusel.jsx";
import CallToAction from "../Components/CallToAction.jsx";
import WelcomeColumns from "../Components/WelcomeColumns.jsx";
import WelcomeFooter from "../Components/WelcomeFooter.jsx";

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
