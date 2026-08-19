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
      <section className="section-padding pb-10">
        <div className="container-site max-w-3xl">
          <p className="text-sm font-medium tracking-wide text-brand">
            Partnerships
          </p>
          <h1 className="mt-3 text-balance font-display text-3xl tracking-tight text-ink sm:text-5xl md:text-6xl">
            Support the community. Meet the builders.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Brands partner with The Founders Experience to fund community
            programming and participate in real founder experiences, not to buy
            a mailing list.
          </p>
        </div>
      </section>

      <Partners />
      <PartnershipTiers />

      <section className="section-stack">
        <div className="container-site max-w-4xl">
          <PartnerApplicationForm />
        </div>
      </section>
    </>
  );
}
