import { NextResponse } from "next/server";
import { isSupabaseConfigured, getSupabase } from "@/lib/supabase";
import { emailSignup } from "@/lib/signup-email";
import type { SubmissionPayload } from "@/lib/submissions";

function isSignupPayload(value: unknown): value is SubmissionPayload {
  if (!value || typeof value !== "object") return false;
  const type = (value as { type?: unknown }).type;
  return (
    type === "founder_application" ||
    type === "partner_application" ||
    type === "event_updates"
  );
}

async function saveToSupabase(payload: SubmissionPayload) {
  const supabase = getSupabase();

  if (payload.type === "founder_application") {
    return supabase.from("founder_applications").insert({
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
    });
  }

  if (payload.type === "partner_application") {
    return supabase.from("partner_applications").insert({
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
    });
  }

  return supabase.from("event_updates").insert({
    type: payload.type,
    email: payload.email,
    name: payload.name ?? null,
    submitted_at: payload.submittedAt,
  });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid submission." },
      { status: 400 }
    );
  }

  if (!isSignupPayload(body)) {
    return NextResponse.json(
      { ok: false, message: "Invalid submission." },
      { status: 400 }
    );
  }

  try {
    await emailSignup(body);
  } catch (error) {
    console.error("Signup email delivery failed", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Unable to send that just now. Email hello@tfecommunity.com.",
      },
      { status: 502 }
    );
  }

  if (isSupabaseConfigured()) {
    const result = await saveToSupabase(body);
    if (result.error) {
      console.error("Supabase submission error", result.error);
    }
  }

  return NextResponse.json({
    ok: true,
    message: "Submission received.",
  });
}
