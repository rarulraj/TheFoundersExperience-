import { isSupabaseConfigured, getSupabase } from "@/lib/supabase";

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

async function submitToSupabase(
  payload: SubmissionPayload
): Promise<SubmissionResult> {
  const supabase = getSupabase();

  const result =
    payload.type === "founder_application"
      ? await supabase.from("founder_applications").insert({
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
        })
      : payload.type === "partner_application"
        ? await supabase.from("partner_applications").insert({
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
          })
        : await supabase.from("event_updates").insert({
            type: payload.type,
            email: payload.email,
            name: payload.name ?? null,
            submitted_at: payload.submittedAt,
          });

  if (result.error) {
    console.error("Supabase submission error", result.error);
    return { ok: false, message: result.error.message };
  }

  return { ok: true, message: "Submission received." };
}

async function submitForm(
  payload: SubmissionPayload
): Promise<SubmissionResult> {
  if (isSupabaseConfigured()) {
    return submitToSupabase(payload);
  }

  await new Promise((resolve) => setTimeout(resolve, 400));
  return {
    ok: true,
    id: `local_${Date.now()}`,
    message: "Submission received.",
  };
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
