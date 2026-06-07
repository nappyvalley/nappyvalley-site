import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyParentsLoveIt } from "@/components/WhyParentsLoveIt";
import { AppPreview } from "@/components/AppPreview";
import { Vision } from "@/components/Vision";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <HowItWorks />
      <WhyParentsLoveIt />
      <AppPreview />
      <Vision />
      <Waitlist />
      <Footer />
    </main>
  );
}
