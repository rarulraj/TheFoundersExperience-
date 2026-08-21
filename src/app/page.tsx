import { Hero } from "@/components/Hero";
import { CommunityBenefits } from "@/components/CommunityBenefits";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { MemberBenefits } from "@/components/MemberBenefits";
import { WhoShouldJoin } from "@/components/WhoShouldJoin";
import { Sponsors } from "@/components/Sponsors";
import { Events } from "@/components/Events";
import { Manifesto } from "@/components/Manifesto";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CommunityBenefits />
      <FeatureShowcase />
      <HowItWorks />
      <MemberBenefits />
      <WhoShouldJoin />
      <Sponsors />
      <Events compact />
      <Manifesto />
      <FAQ />
      <CTASection />
    </>
  );
}
