import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Courses from "@/components/Courses";
import Reviews from "@/components/Reviews";
import Branches from "@/components/Branches";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <main>
        <Navbar />
        <Hero />
        <AboutUs />
        <Services />
        <Courses />
        <Reviews />
        <Branches />
        <Footer />
      </main>
    </>
  );
}
