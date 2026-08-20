"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitEventUpdates } from "@/lib/submissions";

export function EventUpdatesForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const result = await submitEventUpdates({ email, name });
      if (!result.ok) {
        setError(result.message);
        return;
      }
      setSuccess(true);
      setName("");
      setEmail("");
    } catch {
      setError("Unable to subscribe right now. Please try again shortly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="glow-brand rounded-2xl border border-brand/25 bg-accent/40 p-6 sm:p-8">
        <p className="font-display text-h3 text-ink">You’re on the list.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          We’ll share updates on upcoming Founders Experience events.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="surface-panel rounded-2xl p-6 sm:p-8"
    >
      <h3 className="font-display text-h3 text-ink">Get event updates</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Be first to know about dinners, roundtables, and the San Francisco
        gathering.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="event-name">Name</Label>
          <Input
            id="event-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11"
            placeholder="Optional"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="event-email">Email</Label>
          <Input
            id="event-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11"
          />
        </div>
      </div>
      {error ? (
        <p className="mt-3 text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={submitting}
        className="btn-glow mt-5 h-11 w-full bg-brand px-5 text-brand-foreground transition-transform hover:-translate-y-0.5 hover:bg-brand/90 sm:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Saving...
          </>
        ) : (
          "Get Event Updates"
        )}
      </Button>
    </form>
  );
}
