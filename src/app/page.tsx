import { Hero } from "@/components/Hero";
import { CommunityBenefits } from "@/components/CommunityBenefits";
import { MemberBenefits } from "@/components/MemberBenefits";
import { Events } from "@/components/Events";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CommunityBenefits />
      <MemberBenefits />
      <Events compact />
      <CTASection />
    </>
  );
}
