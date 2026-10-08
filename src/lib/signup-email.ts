import { siteConfig } from "@/data/content";
import type { SubmissionPayload } from "@/lib/submissions";

const INBOX = siteConfig.email;

type EmailMessage = {
  subject: string;
  replyTo: string;
  text: string;
  fields: Record<string, string>;
};

function line(label: string, value: string) {
  return `${label}: ${value.trim() || "—"}`;
}

function formatSignup(payload: SubmissionPayload): EmailMessage {
  if (payload.type === "founder_application") {
    const name = `${payload.firstName} ${payload.lastName}`.trim();
    return {
      subject: `TFE application — ${name}${payload.companyName ? ` (${payload.companyName})` : ""}`,
      replyTo: payload.email,
      text: [
        "New founder application",
        "",
        line("Name", name),
        line("Email", payload.email),
        line("Phone", payload.phone),
        line("LinkedIn", payload.linkedinUrl),
        line("Company", payload.companyName),
        line("Website", payload.companyWebsite),
        line("Role", payload.roleTitle),
        line("Stage", payload.companyStage),
        line("Location", payload.companyLocation),
        line("Industry", payload.industry),
        line("Team size", payload.numberOfEmployees),
        line("How they heard", payload.howDidYouHear),
        line("Updates opt-in", payload.agreeToUpdates ? "Yes" : "No"),
        "",
        "What they're building",
        payload.whatBuilding,
        "",
        "What they hope to get",
        payload.hopingToGet,
        "",
        "How they could contribute",
        payload.couldContribute,
      ].join("\n"),
      fields: {
        Name: name,
        Email: payload.email,
        Phone: payload.phone,
        LinkedIn: payload.linkedinUrl,
        Company: payload.companyName,
        Website: payload.companyWebsite,
        Role: payload.roleTitle,
        Stage: payload.companyStage,
        Location: payload.companyLocation,
        Industry: payload.industry,
        "Team size": payload.numberOfEmployees,
        "How they heard": payload.howDidYouHear,
        "Updates opt-in": payload.agreeToUpdates ? "Yes" : "No",
        "What they're building": payload.whatBuilding,
        "What they hope to get": payload.hopingToGet,
        "How they could contribute": payload.couldContribute,
      },
    };
  }

  if (payload.type === "partner_application") {
    const name = `${payload.firstName} ${payload.lastName}`.trim();
    return {
      subject: `TFE partner inquiry — ${payload.company || name}`,
      replyTo: payload.workEmail,
      text: [
        "New partner inquiry",
        "",
        line("Name", name),
        line("Work email", payload.workEmail),
        line("Phone", payload.phone),
        line("Company", payload.company),
        line("Website", payload.website),
        line("Title", payload.jobTitle),
        line("Company type", payload.companyType),
        line("Interest", payload.partnershipInterest),
        line("Budget", payload.estimatedBudget),
        "",
        "Partnership goals",
        payload.partnershipGoals,
        "",
        "Anything else",
        payload.anythingElse || "—",
      ].join("\n"),
      fields: {
        Name: name,
        Email: payload.workEmail,
        Phone: payload.phone,
        Company: payload.company,
        Website: payload.website,
        Title: payload.jobTitle,
        "Company type": payload.companyType,
        Interest: payload.partnershipInterest,
        Budget: payload.estimatedBudget,
        "Partnership goals": payload.partnershipGoals,
        "Anything else": payload.anythingElse || "—",
      },
    };
  }

  return {
    subject: `TFE event updates — ${payload.email}`,
    replyTo: payload.email,
    text: [
      "New event updates signup",
      "",
      line("Name", payload.name ?? ""),
      line("Email", payload.email),
    ].join("\n"),
    fields: {
      Name: payload.name?.trim() || "—",
      Email: payload.email,
    },
  };
}

async function sendWithResend(message: EmailMessage, apiKey: string) {
  const from =
    process.env.RESEND_FROM ??
    "The Founders Experience <beth.t@example.com>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [INBOX],
      reply_to: message.replyTo,
      subject: message.subject,
      text: message.text,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend rejected the message (${response.status}).`);
  }
}

async function sendWithFormSubmit(message: EmailMessage) {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(INBOX)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: message.subject,
        _template: "table",
        _captcha: "false",
        _replyto: message.replyTo,
        email: message.replyTo,
        ...message.fields,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Inbox delivery failed (${response.status}).`);
  }

  let body: { success?: string; error?: string };
  try {
    body = (await response.json()) as { success?: string; error?: string };
  } catch {
    throw new Error("Inbox delivery returned an unexpected response.");
  }
  if (body.error) {
    throw new Error(body.error);
  }
}

export async function emailSignup(payload: SubmissionPayload) {
  const message = formatSignup(payload);
  const resendKey = process.env.RESEND_API_KEY;

  if (resendKey) {
    await sendWithResend(message, resendKey);
    return;
  }

  await sendWithFormSubmit(message);
}
