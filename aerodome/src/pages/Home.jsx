import AboutUs from "../components/HomePageComponents/AboutUs";
import HeroSection from "../components/HomePageComponents/Hero";
import Services from "../components/HomePageComponents/Services";
// import Technology from "../components/HomePageComponents/Technology";
// import WhyChooseUs from "../components/HomePageComponents/WhyChooseUs";

function Home() {
  return (
    <div className="mb-10">
      <div id="hero-section" className="w-full z-[300] mt-[-13vh]">
        <HeroSection />
      </div>
      <div className="px-8 md:px-14 lg:px-20 flex flex-col gap-12 md:gap-16">
        <Services />
        <AboutUs />
      </div>
    </div>
  );
}

export default Home;
