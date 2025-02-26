import Hero from "../Components/Hero"; // Ensure correct path
import TrustedBy from "../Components/TrustedBy";
import Services from "../Components/Services";
import About from "../Components/About";
import WhyChoose from "../Components/WhyChoose";
import VideoIntroduction from "../Components/VideoIntroduction";
import HappyClients from "../Components/HappyClients";
import ApplicationProcess from "../Components/ApplicationProcess";
import BlogSection from "../Components/BlogSection";
import TestimonialSlider from "../Components/TestimonialSlider";
import FAQAccordion from "../Components/FAQAccordion";
import MobileAppSection from "../Components/MobileAppSection";
import StateSection from "../Components/StateSection";
import Welcome from "../Components/Welcome";
import LogoSection from "../Components/LogoSection";



const Home = () => {
  return (
    <div>
      <Hero />
     <TrustedBy />
     <Services />
     <About />
     <WhyChoose/>
     <VideoIntroduction />
     <HappyClients />
     <ApplicationProcess />
     <BlogSection />
     <TestimonialSlider />
     <FAQAccordion />
     <MobileAppSection />
     <StateSection />
     <Welcome />
     <LogoSection />
    </div>
  );
};

export default Home;
