"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { budgetRanges, partnershipInterests } from "@/data/content";
import { submitPartnerApplication } from "@/lib/submissions";
import { FadeIn } from "@/components/FadeIn";
import { cn } from "@/lib/utils";

type FormState = {
  firstName: string;
  lastName: string;
  workEmail: string;
  phone: string;
  company: string;
  website: string;
  jobTitle: string;
  companyType: string;
  partnershipInterest: string;
  estimatedBudget: string;
  partnershipGoals: string;
  anythingElse: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  workEmail: "",
  phone: "",
  company: "",
  website: "",
  jobTitle: "",
  companyType: "",
  partnershipInterest: "",
  estimatedBudget: "",
  partnershipGoals: "",
  anythingElse: "",
};

const selectClassName = cn(
  "h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none transition-colors",
  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
);

function Field({
  label,
  htmlFor,
  children,
  required,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor} className="text-sm text-ink">
        {label}
        {required ? <span className="text-brand"> *</span> : null}
      </Label>
      {children}
    </div>
  );
}

export function PartnerApplicationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const result = await submitPartnerApplication(form);
      if (!result.ok) {
        setError(result.message || "Something went wrong. Please try again.");
        return;
      }
      setSuccess(true);
      setForm(initialState);
    } catch {
      setError("Unable to submit right now. Please try again shortly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <FadeIn>
        <div
          id="partner-form"
          className="scroll-mt-28 rounded-2xl border border-brand/25 bg-brand/10 p-6 sm:p-10"
        >
          <p className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
            Thanks for reaching out.
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
            We’ll be in touch to explore whether there’s a strong fit.
          </p>
          <Button
            type="button"
            variant="outline"
            className="mt-6 h-11 border-brand/25 text-brand hover:bg-accent"
            onClick={() => setSuccess(false)}
          >
            Send another inquiry
          </Button>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <form
        id="partner-form"
        onSubmit={onSubmit}
        className="scroll-mt-28 rounded-2xl border border-border bg-surface p-6 sm:p-8 md:p-10"
        noValidate
      >
        <div className="mb-8">
          <h2 className="font-display text-[1.65rem] tracking-tight text-ink sm:text-4xl">
            Partner With The Founders Experience
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Tell us how your company would like to support the founder community.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="First Name" htmlFor="partner-firstName" required>
            <Input
              id="partner-firstName"
              required
              value={form.firstName}
              onChange={(e) => update("firstName", e.target.value)}
              className="h-11"
              autoComplete="given-name"
            />
          </Field>
          <Field label="Last Name" htmlFor="partner-lastName" required>
            <Input
              id="partner-lastName"
              required
              value={form.lastName}
              onChange={(e) => update("lastName", e.target.value)}
              className="h-11"
              autoComplete="family-name"
            />
          </Field>
          <Field label="Work Email" htmlFor="partner-workEmail" required>
            <Input
              id="partner-workEmail"
              type="email"
              required
              value={form.workEmail}
              onChange={(e) => update("workEmail", e.target.value)}
              className="h-11"
              autoComplete="email"
            />
          </Field>
          <Field label="Phone Number" htmlFor="partner-phone" required>
            <Input
              id="partner-phone"
              type="tel"
              required
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="h-11"
              autoComplete="tel"
              inputMode="tel"
              placeholder="(555) 555-5555"
            />
          </Field>
          <Field label="Company" htmlFor="partner-company" required>
            <Input
              id="partner-company"
              required
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
              className="h-11"
            />
          </Field>
          <Field label="Website" htmlFor="partner-website" required>
            <Input
              id="partner-website"
              type="url"
              required
              placeholder="https://"
              value={form.website}
              onChange={(e) => update("website", e.target.value)}
              className="h-11"
            />
          </Field>
          <Field label="Job Title" htmlFor="partner-jobTitle" required>
            <Input
              id="partner-jobTitle"
              required
              value={form.jobTitle}
              onChange={(e) => update("jobTitle", e.target.value)}
              className="h-11"
            />
          </Field>
          <Field label="Company Type" htmlFor="partner-companyType" required>
            <Input
              id="partner-companyType"
              required
              placeholder="SaaS, venture, recruiting, hospitality..."
              value={form.companyType}
              onChange={(e) => update("companyType", e.target.value)}
              className="h-11"
            />
          </Field>
          <Field
            label="Partnership Interest"
            htmlFor="partner-interest"
            required
          >
            <select
              id="partner-interest"
              required
              value={form.partnershipInterest}
              onChange={(e) => update("partnershipInterest", e.target.value)}
              className={selectClassName}
            >
              <option value="" disabled>
                Select interest
              </option>
              {partnershipInterests.map((interest) => (
                <option key={interest} value={interest}>
                  {interest}
                </option>
              ))}
            </select>
          </Field>
          <Field
            label="Estimated Partnership Budget"
            htmlFor="partner-budget"
            required
          >
            <select
              id="partner-budget"
              required
              value={form.estimatedBudget}
              onChange={(e) => update("estimatedBudget", e.target.value)}
              className={cn(selectClassName, "sm:col-span-2")}
            >
              <option value="" disabled>
                Select range
              </option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="mt-5 grid gap-5">
          <Field
            label="What would you like to achieve through the partnership?"
            htmlFor="partner-goals"
            required
          >
            <Textarea
              id="partner-goals"
              required
              rows={4}
              value={form.partnershipGoals}
              onChange={(e) => update("partnershipGoals", e.target.value)}
              className="min-h-28 resize-y"
            />
          </Field>
          <Field
            label="Anything else we should know?"
            htmlFor="partner-anythingElse"
          >
            <Textarea
              id="partner-anythingElse"
              rows={3}
              value={form.anythingElse}
              onChange={(e) => update("anythingElse", e.target.value)}
              className="min-h-24 resize-y"
            />
          </Field>
        </div>

        {error ? (
          <p className="mt-4 text-sm text-destructive" role="alert">
            {error}
          </p>
        ) : null}

        <Button
          type="submit"
          disabled={submitting}
          className="mt-7 h-12 w-full bg-brand text-brand-foreground hover:bg-brand/90 sm:w-auto sm:px-8"
        >
          {submitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Start a Conversation"
          )}
        </Button>
      </form>
    </FadeIn>
  );
}
