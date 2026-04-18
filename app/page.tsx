import Contact from "@/components/Contact";
import FinancingBanner from "@/components/FinancingBanner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import WhyGoldStar from "@/components/WhyGoldStar";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyGoldStar />
        <Testimonials />
        <FinancingBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
