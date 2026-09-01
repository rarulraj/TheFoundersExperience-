import type { Metadata } from "next";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Partners } from "@/components/Partners";
import { PartnershipTiers } from "@/components/PartnershipTiers";
import { PartnerApplicationForm } from "@/components/PartnerApplicationForm";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with The Founders Experience to support founders and build authentic relationships with startup leaders.",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Support the community. Meet the builders."
      >
        <p className="mt-7 max-w-2xl text-lead text-white/70">
          Brands partner with The Founders Experience to fund community
          programming and participate in real founder experiences, not to buy a
          mailing list.
        </p>
        <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
          <Button
            render={
              <Link
                href={siteConfig.calendly}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            className="btn-glow h-12 w-full rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90 sm:w-auto"
          >
            Book a meeting with us
            <Calendar data-icon="inline-end" className="size-4" />
          </Button>
          <Link
            href="#partner-form"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-base font-semibold text-white/90 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:w-auto"
          >
            Send an inquiry
          </Link>
        </div>
      </PageHero>

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
