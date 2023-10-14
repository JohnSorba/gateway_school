import Header from "../components/Header";
import About_Section from "../components/About_Section";
import Services from "../components/Services";
import AccApp from "../Accordion/AccApp";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

import StaffSlide from "../components/StaffSlide";
import ContactUs from "../components/ContactUs";
import News from "../components/News";
import SliderTest from "../components/SliderTest";

function HomePage({ isOpen, isDropdownOpen, toggleDropdown, toggleNavbar }) {
  return (
    <div>
      <Header
        isOpen={isOpen}
        toggleNavbar={toggleNavbar}
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
      />
      <News />
      <About_Section />
      <Services />
      <StaffSlide />
      {/* <AccApp /> */}
      <Gallery />

      <SliderTest />
      <ContactUs />
      <Footer
        isOpen={isOpen}
        toggleNavbar={toggleNavbar}
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
      />
    </div>
  );
}

export default HomePage;
