"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { companyStages } from "@/data/content";
import { submitFounderApplication } from "@/lib/submissions";
import { FadeIn } from "@/components/FadeIn";
import { cn } from "@/lib/utils";

// text-base below md: anything under 16px makes iOS Safari zoom the viewport
// when the control receives focus.
const selectClassName = cn(
  "h-11 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 text-base outline-none transition-colors md:text-sm",
  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
  "dark:bg-input/30"
);

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  companyName: string;
  companyWebsite: string;
  roleTitle: string;
  companyStage: string;
  companyLocation: string;
  industry: string;
  numberOfEmployees: string;
  whatBuilding: string;
  hopingToGet: string;
  couldContribute: string;
  howDidYouHear: string;
  agreeToUpdates: boolean;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  linkedinUrl: "",
  companyName: "",
  companyWebsite: "",
  roleTitle: "",
  companyStage: "",
  companyLocation: "",
  industry: "",
  numberOfEmployees: "",
  whatBuilding: "",
  hopingToGet: "",
  couldContribute: "",
  howDidYouHear: "",
  agreeToUpdates: false,
};

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

export function FounderApplicationForm() {
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

    if (!form.companyStage) {
      setError("Please select your company stage.");
      return;
    }
    if (!form.agreeToUpdates) {
      setError("Please agree to receive updates to submit your application.");
      return;
    }

    setSubmitting(true);
    try {
      const result = await submitFounderApplication(form);
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
        <div className="glow-brand rounded-3xl border border-brand/25 bg-accent/60 p-6 sm:p-10">
          <p className="font-display text-h3 text-ink">Thanks for applying.</p>
          <p className="mt-3 max-w-xl text-lead text-muted-foreground">
            We review every application and will be in touch.
          </p>
          <Button
            type="button"
            variant="outline"
            className="mt-6 h-11 border-brand/25 text-brand hover:bg-accent"
            onClick={() => setSuccess(false)}
          >
            Submit another application
          </Button>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <form
        onSubmit={onSubmit}
        className="surface-panel rounded-3xl p-6 sm:p-8 md:p-10"
        noValidate
      >
        <div className="mb-8">
          <h2 className="text-balance font-display text-h2 text-ink">
            Apply to The Founders Experience
          </h2>
          <p className="mt-3 text-lead text-muted-foreground">
            Tell us a little about yourself and what you’re building.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="First Name" htmlFor="firstName" required>
            <Input
              id="firstName"
              required
              value={form.firstName}
              onChange={(e) => update("firstName", e.target.value)}
              className="h-11"
              autoComplete="given-name"
            />
          </Field>
          <Field label="Last Name" htmlFor="lastName" required>
            <Input
              id="lastName"
              required
              value={form.lastName}
              onChange={(e) => update("lastName", e.target.value)}
              className="h-11"
              autoComplete="family-name"
            />
          </Field>
          <Field label="Email" htmlFor="email" required>
            <Input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="h-11"
              autoComplete="email"
            />
          </Field>
          <Field label="Phone Number" htmlFor="phone" required>
            <Input
              id="phone"
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
          <Field label="LinkedIn URL" htmlFor="linkedinUrl" required>
            <Input
              id="linkedinUrl"
              type="url"
              required
              placeholder="https://linkedin.com/in/..."
              value={form.linkedinUrl}
              onChange={(e) => update("linkedinUrl", e.target.value)}
              className="h-11"
            />
          </Field>
          <Field label="Company Name" htmlFor="companyName" required>
            <Input
              id="companyName"
              required
              value={form.companyName}
              onChange={(e) => update("companyName", e.target.value)}
              className="h-11"
            />
          </Field>
          <Field label="Company Website" htmlFor="companyWebsite" required>
            <Input
              id="companyWebsite"
              type="url"
              required
              placeholder="https://"
              value={form.companyWebsite}
              onChange={(e) => update("companyWebsite", e.target.value)}
              className="h-11"
            />
          </Field>
          <Field label="Role / Title" htmlFor="roleTitle" required>
            <Input
              id="roleTitle"
              required
              value={form.roleTitle}
              onChange={(e) => update("roleTitle", e.target.value)}
              className="h-11"
            />
          </Field>
          <Field label="Company Stage" htmlFor="companyStage" required>
            <select
              id="companyStage"
              required
              value={form.companyStage}
              onChange={(e) => update("companyStage", e.target.value)}
              className={selectClassName}
            >
              <option value="" disabled>
                Select stage
              </option>
              {companyStages.map((stage) => (
                <option key={stage} value={stage}>
                  {stage}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Company Location" htmlFor="companyLocation" required>
            <Input
              id="companyLocation"
              required
              value={form.companyLocation}
              onChange={(e) => update("companyLocation", e.target.value)}
              className="h-11"
              placeholder="City, Country"
            />
          </Field>
          <Field label="Industry" htmlFor="industry" required>
            <Input
              id="industry"
              required
              value={form.industry}
              onChange={(e) => update("industry", e.target.value)}
              className="h-11"
            />
          </Field>
          <Field
            label="Number of Employees"
            htmlFor="numberOfEmployees"
            required
          >
            <Input
              id="numberOfEmployees"
              required
              value={form.numberOfEmployees}
              onChange={(e) => update("numberOfEmployees", e.target.value)}
              className="h-11"
              placeholder="e.g. 12"
            />
          </Field>
          <Field label="How did you hear about us?" htmlFor="howDidYouHear">
            <Input
              id="howDidYouHear"
              value={form.howDidYouHear}
              onChange={(e) => update("howDidYouHear", e.target.value)}
              className="h-11"
            />
          </Field>
        </div>

        <div className="mt-5 grid gap-5">
          <Field label="What are you building?" htmlFor="whatBuilding" required>
            <Textarea
              id="whatBuilding"
              required
              rows={4}
              value={form.whatBuilding}
              onChange={(e) => update("whatBuilding", e.target.value)}
              className="min-h-28 resize-y"
            />
          </Field>
          <Field
            label="What are you hoping to get from the community?"
            htmlFor="hopingToGet"
            required
          >
            <Textarea
              id="hopingToGet"
              required
              rows={4}
              value={form.hopingToGet}
              onChange={(e) => update("hopingToGet", e.target.value)}
              className="min-h-28 resize-y"
            />
          </Field>
          <Field
            label="What could you contribute to the community?"
            htmlFor="couldContribute"
            required
          >
            <Textarea
              id="couldContribute"
              required
              rows={4}
              value={form.couldContribute}
              onChange={(e) => update("couldContribute", e.target.value)}
              className="min-h-28 resize-y"
            />
          </Field>
        </div>

        <div className="mt-6 flex items-start gap-3">
          <Checkbox
            id="agreeToUpdates"
            checked={form.agreeToUpdates}
            onCheckedChange={(checked) =>
              update("agreeToUpdates", checked === true)
            }
            className="mt-0.5"
          />
          <Label
            htmlFor="agreeToUpdates"
            className="text-sm leading-relaxed text-muted-foreground"
          >
            I agree to receive updates about The Founders Experience.
          </Label>
        </div>

        {error ? (
          <p className="mt-4 text-sm text-destructive" role="alert">
            {error}
          </p>
        ) : null}

        <Button
          type="submit"
          disabled={submitting}
          className="btn-glow mt-7 h-12 w-full rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90 sm:w-auto"
        >
          {submitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>
    </FadeIn>
  );
}
