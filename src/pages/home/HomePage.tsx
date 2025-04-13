import HowItWorksSection from "./components/HowItWorksSection";
import OngoingProjects from "./components/OngoingProjects";
import VolunteerTestimonials from "./components/VolunteerTestimonials";
import NgoCallToAction from "./components/NgoCallToAction";
import Footer from "../../components/common/home-components/Footer";
import Navbar from "../../components/common/home-components/Navbar";
import HeroSection from "./components/HeroSection";
import PlatformsSection from "./components/PlatformsSection";
import ScrollToHash from "./components/ScrollToHash";

export default function HomePage() {
    return (
        <div className="space-y-16">
            <ScrollToHash />

            <Navbar />
            <HeroSection />
            <PlatformsSection />
            <HowItWorksSection />
            <OngoingProjects />
            <VolunteerTestimonials />
            <NgoCallToAction />
            <Footer />
        </div>
    );
}
