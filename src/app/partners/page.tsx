import type { Metadata } from "next";
import { Partners } from "@/components/Partners";
import { PartnershipTiers } from "@/components/PartnershipTiers";
import { PartnerApplicationForm } from "@/components/PartnerApplicationForm";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with The Founders Experience to support founders and build authentic relationships with startup leaders.",
};

export default function PartnersPage() {
  return (
    <>
      <section className="relative overflow-hidden py-section pb-10">
        <div className="mesh-light absolute inset-0" />
        <div className="container-site relative">
          <div className="max-w-3xl">
            <p className="eyebrow">Partnerships</p>
            <h1 className="mt-5 text-balance font-display text-h1 text-ink">
              Support the community. Meet the builders.
            </h1>
            <p className="mt-7 max-w-2xl text-lead text-muted-foreground">
              Brands partner with The Founders Experience to fund community
              programming and participate in real founder experiences, not to
              buy a mailing list.
            </p>
          </div>
        </div>
      </section>

      <Partners />
      <PartnershipTiers />

      <section className="py-section-sm">
        <div className="container-site">
          <div className="max-w-4xl">
            <PartnerApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
