import Navbar from "../Components/landingpage/Navbar";
import Hero from "../Components/landingpage/hero";
import AboutUs from "../Components/landingpage/about";
import Programs from "../Components/landingpage/programs";

function LandingPage(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <AboutUs/>
        <Programs/>
        </>
    )
}

export default LandingPage;