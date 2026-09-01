import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className="hero-navy relative overflow-hidden">
      <div className="container-site relative py-section pb-10">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 text-balance font-display text-h1 text-white">
            {title}
          </h1>
          {children}
        </div>
      </div>
    </section>
  );
}
