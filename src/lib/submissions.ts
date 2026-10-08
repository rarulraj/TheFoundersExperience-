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

async function submitForm(
  payload: SubmissionPayload
): Promise<SubmissionResult> {
  const response = await fetch("/api/submissions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let result: SubmissionResult;
  try {
    result = (await response.json()) as SubmissionResult;
  } catch {
    return { ok: false, message: "Unable to submit right now." };
  }

  if (!response.ok) {
    return {
      ok: false,
      message: result.message || "Unable to submit right now.",
    };
  }

  return result;
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
