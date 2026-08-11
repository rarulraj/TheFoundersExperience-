import { isSupabaseConfigured, getSupabase } from "@/lib/supabase";

export type SubmissionDestination =
  | "console"
  | "supabase"
  | "firebase"
  | "airtable"
  | "hubspot"
  | "custom";

export type FounderApplicationPayload = {
  type: "founder_application";
  firstName: string;
  lastName: string;
  email: string;
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
  submittedAt: string;
};

export type PartnerApplicationPayload = {
  type: "partner_application";
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  website: string;
  jobTitle: string;
  companyType: string;
  partnershipInterest: string;
  estimatedBudget: string;
  partnershipGoals: string;
  anythingElse: string;
  submittedAt: string;
};

export type EventUpdatesPayload = {
  type: "event_updates";
  email: string;
  name?: string;
  submittedAt: string;
};

export type SubmissionPayload =
  | FounderApplicationPayload
  | PartnerApplicationPayload
  | EventUpdatesPayload;

export type SubmissionResult = {
  ok: boolean;
  id?: string;
  message: string;
};

const supabaseTableMap: Record<SubmissionPayload["type"], string> = {
  founder_application: "founder_applications",
  partner_application: "partner_applications",
  event_updates: "event_updates",
};

async function submitToSupabase(
  payload: SubmissionPayload
): Promise<SubmissionResult> {
  const supabase = getSupabase();
  const table = supabaseTableMap[payload.type];

  const { data, error } = await supabase
    .from(table)
    .insert([payload])
    .select("id")
    .single();

  if (error) {
    console.error("Supabase submission error", error);
    return { ok: false, message: error.message };
  }

  return { ok: true, id: data?.id, message: "Submission received." };
}

/**
 * Abstracted submission handler.
 * Automatically uses Supabase when NEXT_PUBLIC_SUPABASE_URL is set.
 * Otherwise falls back to console for local development.
 */
export async function submitForm(
  payload: SubmissionPayload,
  destination?: SubmissionDestination
): Promise<SubmissionResult> {
  const resolved = destination ?? (isSupabaseConfigured() ? "supabase" : "console");

  switch (resolved) {
    case "supabase":
      return submitToSupabase(payload);

    case "console":
      console.info("[The Founders Experience] Form submission", payload);
      await new Promise((resolve) => setTimeout(resolve, 650));
      return {
        ok: true,
        id: `local_${Date.now()}`,
        message: "Submission received.",
      };

    case "firebase":
    case "airtable":
    case "hubspot":
    case "custom":
      // Example extension point:
      // return fetch("/api/submissions", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ destination: resolved, payload }),
      // }).then((r) => r.json());
      throw new Error(
        `Destination "${resolved}" is not configured yet. Set Supabase env vars or wire your backend.`
      );

    default:
      throw new Error("Unknown submission destination.");
  }
}

export async function submitFounderApplication(
  data: Omit<FounderApplicationPayload, "type" | "submittedAt">
) {
  return submitForm({
    type: "founder_application",
    submittedAt: new Date().toISOString(),
    ...data,
  });
}

export async function submitPartnerApplication(
  data: Omit<PartnerApplicationPayload, "type" | "submittedAt">
) {
  return submitForm({
    type: "partner_application",
    submittedAt: new Date().toISOString(),
    ...data,
  });
}

export async function submitEventUpdates(
  data: Omit<EventUpdatesPayload, "type" | "submittedAt">
) {
  return submitForm({
    type: "event_updates",
    submittedAt: new Date().toISOString(),
    ...data,
  });
}
