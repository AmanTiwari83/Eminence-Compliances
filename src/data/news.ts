import type { NewsItem } from "../types/content-types";

// NOTE: Sample company news. Replace with your real announcements before launch.
export const newsItems: NewsItem[] = [
  {
    slug: "webinar-preparing-for-bis-registration",
    title: "Webinar: preparing your product for BIS registration",
    summary:
      "A live walkthrough of scheme selection, testing and documentation for manufacturers and importers.",
    type: "Event",
    date: "2026-10-08",
    sections: [
      {
        heading: "What we will cover",
        paragraphs: [
          "Our compliance team will walk through how to identify the right BIS scheme, prepare for lab testing and organise your application documents so the process moves without avoidable delays.",
        ],
        points: [
          "Choosing between ISI and CRS routes",
          "Preparing samples and documents",
          "Common reasons for queries and how to avoid them",
        ],
      },
      {
        heading: "Who should attend",
        paragraphs: [
          "Manufacturers, importers and brand owners who are planning to launch or import products in India. A live Q&A will follow the session. Contact us to reserve a seat.",
        ],
      },
    ],
  },
  {
    slug: "epr-registration-support-now-available",
    title: "EPR registration and compliance support now available",
    summary:
      "We now help producers, importers and brand owners register and manage annual obligations under EPR rules.",
    type: "Announcement",
    date: "2026-09-22",
    sections: [
      {
        heading: "What is new",
        paragraphs: [
          "Our service line now includes end-to-end support for EPR registration, from checking applicability to filing and maintaining annual returns.",
        ],
      },
      {
        heading: "How we help",
        paragraphs: [
          "We assess which rules apply to your products, prepare the application, coordinate with recyclers and processors for target fulfilment, and keep your filings on schedule.",
        ],
      },
    ],
  },
  {
    slug: "regulatory-update-review-your-labels",
    title: "Regulatory reminder: review product labels before your next shipment",
    summary:
      "Labelling errors are among the most common causes of customs and market-surveillance trouble. A short checklist.",
    type: "Regulatory update",
    date: "2026-09-10",
    sections: [
      {
        heading: "Why labels matter",
        paragraphs: [
          "Mandatory marks, registration numbers and manufacturer details must match your approvals. Differences between the label and the registration record can hold up consignments or lead to action in the market.",
        ],
        points: [
          "Confirm the registration or licence number is printed correctly",
          "Check that model names match approval documents",
          "Verify importer and manufacturer details are complete",
        ],
      },
      {
        heading: "Need a second pair of eyes?",
        paragraphs: [
          "Send us your label artwork and we will compare it against your approvals before it goes to print.",
        ],
      },
    ],
  },
  {
    slug: "iso-certification-projects-supported-this-quarter",
    title: "Supporting more ISO certification projects across manufacturing and services",
    summary:
      "Clients from manufacturing, logistics and professional services have completed or begun ISO implementation with us.",
    type: "Company",
    date: "2026-08-28",
    sections: [
      {
        heading: "Growing demand for management systems",
        paragraphs: [
          "More companies are adopting ISO standards to meet customer and tender requirements. Our team has been guiding clients from gap analysis through to certification audits.",
        ],
      },
    ],
  },
  {
    slug: "new-client-onboarding-process",
    title: "A simpler onboarding process for new compliance clients",
    summary:
      "Share your product details once and receive a clear scope, timeline and document checklist.",
    type: "Announcement",
    date: "2026-08-12",
    sections: [
      {
        heading: "What changed",
        paragraphs: [
          "New clients now receive a single scope document that lists applicable approvals, expected timelines and the documents we need from them, so everyone knows what happens next.",
        ],
      },
    ],
  },
];