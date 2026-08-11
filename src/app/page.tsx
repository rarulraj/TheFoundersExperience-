import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { CommunityBenefits } from "@/components/CommunityBenefits";
import { MemberBenefits } from "@/components/MemberBenefits";
import { Events } from "@/components/Events";
import { Speakers } from "@/components/Speakers";
import { Partners } from "@/components/Partners";
import { PartnershipTiers } from "@/components/PartnershipTiers";
import { WhoShouldJoin } from "@/components/WhoShouldJoin";
import { FounderApplicationForm } from "@/components/FounderApplicationForm";
import { PartnerApplicationForm } from "@/components/PartnerApplicationForm";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <CommunityBenefits />
      <MemberBenefits />
      <Events />
      <Speakers />
      <Partners />
      <PartnershipTiers />
      <WhoShouldJoin />

      <section id="apply" className="section-padding scroll-mt-24 bg-secondary/30">
        <div className="container-site max-w-4xl">
          <FounderApplicationForm />
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container-site max-w-4xl">
          <PartnerApplicationForm />
        </div>
      </section>

      <CTASection />
    </>
  );
}
