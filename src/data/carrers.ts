import type { JobOpening } from "../types/content-types";

// Replace with your real hiring email and locations.
export const CAREERS_EMAIL = "info@eminencecompliance.com";

export const perks = [
  {
    title: "Work on real approvals",
    text: "You will see products go from application to approved, and learn the rules by doing the work.",
  },
  {
    title: "Mentorship from senior consultants",
    text: "Every new joiner is paired with an experienced consultant for the first months.",
  },
  {
    title: "Clear growth path",
    text: "Trainee to executive to consultant, with defined skills for each step.",
  },
];

export const jobOpenings: JobOpening[] = [
  {
    slug: "compliance-consultant-bis",
    title: "Compliance Consultant, BIS and Product Certification",
    department: "Consulting",
    employmentType: "Full-time",
    location: "On-site",
    experience: "2 to 4 years",
    summary:
      "Guide clients through BIS, WPC and related approvals from scheme selection to certificate.",
    responsibilities: [
      "Assess which approvals apply to client products",
      "Coordinate testing with recognised laboratories",
      "Prepare and file applications and respond to queries",
      "Keep clients updated on timelines and next steps",
    ],
    requirements: [
      "Experience with BIS, WPC or similar product approvals",
      "Good written English and attention to detail",
      "Comfortable speaking with manufacturers and importers",
    ],
  },
  {
    slug: "documentation-liaison-executive",
    title: "Documentation and Liaison Executive",
    department: "Operations",
    employmentType: "Full-time",
    location: "On-site",
    experience: "1 to 3 years",
    summary:
      "Prepare application documents, track filings and follow up with authorities and laboratories.",
    responsibilities: [
      "Prepare and check application documents for accuracy",
      "Track status of filings and update internal records",
      "Coordinate with laboratories, clients and authorities",
    ],
    requirements: [
      "Strong organisation and follow-up habits",
      "Working knowledge of spreadsheets and online portals",
      "Prior documentation or liaison experience is a plus",
    ],
  },
  {
    slug: "business-development-executive",
    title: "Business Development Executive",
    department: "Growth",
    employmentType: "Full-time",
    location: "On-site",
    experience: "1 to 3 years",
    summary:
      "Speak with manufacturers and importers, understand their compliance needs and propose the right service.",
    responsibilities: [
      "Handle inbound enquiries and follow up on leads",
      "Explain our services and prepare proposals",
      "Work with the consulting team on scope and timelines",
    ],
    requirements: [
      "Clear communication skills in English and Hindi",
      "Interest in regulations and certification",
      "Experience in B2B services is a plus",
    ],
  },
  {
    slug: "management-trainee-compliance",
    title: "Management Trainee, Compliance",
    department: "Consulting",
    employmentType: "Trainee",
    location: "On-site",
    experience: "Freshers welcome",
    summary:
      "A structured entry role for graduates who want to build a career in regulatory compliance.",
    responsibilities: [
      "Assist consultants on live certification projects",
      "Research standards and regulatory updates",
      "Maintain checklists and client records",
    ],
    requirements: [
      "Graduate in engineering, science, law or management",
      "Curious, careful and a quick learner",
    ],
  },
];