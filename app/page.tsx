import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoCar from "@/components/InfoCar";
import EmotionalPhrase from "@/components/EmotionalPhrase";
import VideoSection from "@/components/VideoSection";
import WhyUs from "@/components/WhyUs";
import Details from "@/components/Details";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <Header />
      <div className="md:mb-16 2xl:mb-24">
        <Hero />
      </div>
      <div className="md:mb-16 2xl:mb-24">
        <InfoCar />
      </div>
      <div className="md:mb-16 2xl:mb-24">
        <EmotionalPhrase />
      </div>
      <div className="md:mb-16 2xl:mb-24">
        <VideoSection />
      </div>
      <div className="md:mb-16 2xl:mb-24">
        <WhyUs />
      </div>
      <div className="2xl:mb-24">
        <Details />
      </div>
      <FAQ />
    </div>
  );
}
