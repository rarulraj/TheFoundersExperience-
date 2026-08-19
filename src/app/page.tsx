import { Hero } from "@/components/Hero";
import { CommunityBenefits } from "@/components/CommunityBenefits";
import { MemberBenefits } from "@/components/MemberBenefits";
import { Sponsors } from "@/components/Sponsors";
import { Events } from "@/components/Events";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CommunityBenefits />
      <MemberBenefits />
      <Sponsors />
      <Events compact />
      <CTASection />
    </>
  );
}
