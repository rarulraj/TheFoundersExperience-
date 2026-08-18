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
  submittedAt: string;
};

export type PartnerApplicationPayload = {
  type: "partner_application";
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

function toSupabaseRow(payload: SubmissionPayload) {
  if (payload.type === "founder_application") {
    return {
      type: payload.type,
      first_name: payload.firstName,
      last_name: payload.lastName,
      email: payload.email,
      phone: payload.phone,
      linkedin_url: payload.linkedinUrl,
      company_name: payload.companyName,
      company_website: payload.companyWebsite,
      role_title: payload.roleTitle,
      company_stage: payload.companyStage,
      company_location: payload.companyLocation,
      industry: payload.industry,
      number_of_employees: payload.numberOfEmployees,
      what_building: payload.whatBuilding,
      hoping_to_get: payload.hopingToGet,
      could_contribute: payload.couldContribute,
      how_did_you_hear: payload.howDidYouHear,
      agree_to_updates: payload.agreeToUpdates,
      submitted_at: payload.submittedAt,
    };
  }

  if (payload.type === "partner_application") {
    return {
      type: payload.type,
      first_name: payload.firstName,
      last_name: payload.lastName,
      work_email: payload.workEmail,
      phone: payload.phone,
      company: payload.company,
      website: payload.website,
      job_title: payload.jobTitle,
      company_type: payload.companyType,
      partnership_interest: payload.partnershipInterest,
      estimated_budget: payload.estimatedBudget,
      partnership_goals: payload.partnershipGoals,
      anything_else: payload.anythingElse,
      submitted_at: payload.submittedAt,
    };
  }

  return {
    type: payload.type,
    email: payload.email,
    name: payload.name ?? null,
    submitted_at: payload.submittedAt,
  };
}

async function submitToSupabase(
  payload: SubmissionPayload
): Promise<SubmissionResult> {
  const supabase = getSupabase();
  const table = supabaseTableMap[payload.type];

  const { error } = await supabase
    .from(table)
    .insert(toSupabaseRow(payload));

  if (error) {
    console.error("Supabase submission error", error);
    return { ok: false, message: error.message };
  }

  return { ok: true, message: "Submission received." };
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
