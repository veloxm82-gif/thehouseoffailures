import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { ReservationSection } from "@/components/ReservationSection";
import { FoundersSection } from "@/components/FoundersSection";
import { StorySection } from "@/components/StorySection";
import { MenuSection } from "@/components/MenuSection";
import { GallerySection } from "@/components/GallerySection";
import { CafeSection } from "@/components/CafeSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { LocationsSection } from "@/components/LocationsSection";
import { ContactSection } from "@/components/ContactSection";
import { FranchiseSection } from "@/components/FranchiseSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <ReservationSection />
        <FoundersSection />
        <StorySection />
        <MenuSection />
        <GallerySection />
        <CafeSection />
        <DifferenceSection />
        <ReviewsSection />
        <LocationsSection />
        <ContactSection />
        <FranchiseSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
