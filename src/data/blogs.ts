import type { BlogPost } from "../types/content-types";

export const blogPosts: BlogPost[] = [
  {
    slug: "bis-crs-registration-guide",
    title: "BIS CRS registration: what manufacturers should sort out before applying",
    excerpt:
      "Most delays in BIS registration come from preparation, not the application itself. Here is what to have ready before you start.",
    category: "BIS Certification",
    date: "2026-10-03",
    readingTime: "6 min read",
    author: { name: "Compliance Team", role: "Eminence Global Compliance Group" },
    relatedService: "BIS Certification",
    sections: [
      {
        heading: "Check whether your product is covered",
        paragraphs: [
          "The Compulsory Registration Scheme (CRS) applies to a defined list of electronics and IT products. Before spending time on testing, confirm that your product falls under a notified category and identify the Indian Standard that applies to it.",
          "Product variants matter. Different models, ratings or power sources can need separate test reports or separate series registrations, so it pays to group your models early.",
        ],
      },
      {
        heading: "Get testing done at a BIS-recognised lab",
        paragraphs: [
          "Test reports must come from a BIS-recognised laboratory against the relevant standard. Sending samples that do not match the final production version is one of the most common reasons for repeat testing.",
        ],
        points: [
          "Finalise the design and bill of materials before sending samples",
          "Keep the product label and rating plate details ready for the lab",
          "Ask the lab which critical components need their own approvals",
        ],
      },
      {
        heading: "Prepare the application documents",
        paragraphs: [
          "The application is filed online and needs a consistent set of documents. Mismatched model names or addresses between documents is a frequent cause of queries from BIS.",
        ],
        points: [
          "Test report and the declaration of conformity",
          "Authorisation letter and company registration documents",
          "Circuit diagram, product photographs and label artwork",
          "For overseas manufacturers, an Authorised Indian Representative",
        ],
      },
      {
        heading: "Plan for marking and post-registration duties",
        paragraphs: [
          "Once registered, the product must carry the Standard Mark with the registration number. Registration is not a one-time event: marking rules, renewals and any design changes need to be tracked so the registration stays valid.",
        ],
      },
    ],
  },
  {
    slug: "isi-mark-vs-crs-which-scheme-applies",
    title: "ISI Mark or CRS: which BIS scheme applies to your product?",
    excerpt:
      "Both lead to a BIS mark, but the process, audit requirements and timelines are very different. A quick way to tell them apart.",
    category: "BIS Certification",
    date: "2026-09-18",
    readingTime: "5 min read",
    author: { name: "Compliance Team", role: "Eminence Global Compliance Group" },
    relatedService: "BIS Certification",
    sections: [
      {
        heading: "Two schemes, two approaches",
        paragraphs: [
          "The ISI Mark is a product certification licence. BIS assesses your manufacturing facility and quality controls, and your product is tested before and during the licence period. It is common for products such as certain electrical goods, building materials and consumer items.",
          "CRS works on registration. The product is tested at a recognised lab and, once registered, is marked with the registration number. It covers a notified list of electronics and IT products.",
        ],
      },
      {
        heading: "What changes for you in practice",
        paragraphs: [
          "Under ISI, expect a factory inspection and ongoing surveillance. Under CRS, the focus is on laboratory testing and documentation. The scheme your product belongs to decides how much preparation your plant, your quality team and your paperwork need.",
        ],
        points: [
          "ISI: factory audit, in-house testing capability, periodic surveillance",
          "CRS: lab testing, documentation, registration number on the product",
          "Both: marking rules and renewals must be followed after approval",
        ],
      },
      {
        heading: "How to find the right one",
        paragraphs: [
          "The applicable scheme depends on the product category and its notified standard, not on the company size or where it is made. If you are unsure, a short review of the product description and intended use is usually enough to confirm the route before you commit to testing.",
        ],
      },
    ],
  },
  {
    slug: "wpc-eta-approval-wireless-products",
    title: "WPC ETA approval for wireless products sold in India",
    excerpt:
      "Bluetooth speakers, Wi-Fi routers and smart devices all use radio frequencies. Here is when ETA approval comes into the picture.",
    category: "Telecom & Wireless",
    date: "2026-09-02",
    readingTime: "4 min read",
    author: { name: "Compliance Team", role: "Eminence Global Compliance Group" },
    relatedService: "WPC ETA Approval",
    sections: [
      {
        heading: "Why wireless devices need approval",
        paragraphs: [
          "Devices that transmit on radio frequencies, even licence-exempt ones, generally need Equipment Type Approval (ETA) from the wireless regulator under the Department of Telecommunications before they are sold or imported.",
        ],
      },
      {
        heading: "Who applies",
        paragraphs: [
          "Importers, manufacturers and brand owners selling products with Wi-Fi, Bluetooth, RFID or similar radios are the usual applicants. Importers also need the approval in hand to clear consignments smoothly.",
        ],
        points: [
          "Wi-Fi routers, access points and smart home devices",
          "Bluetooth audio, wearables and accessories",
          "IoT sensors, trackers and RFID equipment",
        ],
      },
      {
        heading: "What to keep ready",
        paragraphs: [
          "Technical specifications, frequency band and power details, test reports where required, and an authorisation from the manufacturer are the core inputs. Having these consistent across documents avoids rounds of clarification.",
        ],
      },
    ],
  },
  {
    slug: "epr-registration-who-needs-it",
    title: "EPR registration: who needs it, and how to stay compliant",
    excerpt:
      "Producers, importers and brand owners carry responsibility for the waste their products create. A plain-language overview.",
    category: "Environmental Compliance",
    date: "2026-08-20",
    readingTime: "5 min read",
    author: { name: "Compliance Team", role: "Eminence Global Compliance Group" },
    relatedService: "EPR Registration",
    sections: [
      {
        heading: "What Extended Producer Responsibility means",
        paragraphs: [
          "Under Extended Producer Responsibility (EPR), the company that places a product or its packaging on the market is responsible for ensuring the resulting waste is collected and processed responsibly. In India this is framed through rules for areas such as e-waste, plastic packaging and batteries, with registration on the Central Pollution Control Board portal.",
        ],
      },
      {
        heading: "Who is likely to be covered",
        paragraphs: [
          "Manufacturers, importers and brand owners are the main categories. Even companies that outsource manufacturing can have obligations if they sell under their own brand.",
        ],
        points: [
          "Electronics and electrical equipment sellers (e-waste rules)",
          "Brands using plastic packaging",
          "Battery manufacturers and importers",
        ],
      },
      {
        heading: "Staying compliant year after year",
        paragraphs: [
          "Registration is the start. Producers need to maintain records, meet their annual targets through authorised recyclers or processors, and file returns on time. A simple calendar and organised records make audits far less stressful.",
        ],
      },
    ],
  },
  {
    slug: "iso-9001-implementation-timeline",
    title: "ISO 9001 implementation: a realistic timeline for growing companies",
    excerpt:
      "How long does ISO 9001 certification take? It depends on where your processes are today. Here are the stages and what drives the schedule.",
    category: "ISO Certification",
    date: "2026-08-05",
    readingTime: "5 min read",
    author: { name: "Compliance Team", role: "Eminence Global Compliance Group" },
    relatedService: "ISO Certification",
    sections: [
      {
        heading: "Start with a gap analysis",
        paragraphs: [
          "A gap analysis compares your current processes with the standard. It shows what already works, what is undocumented and what is missing, and it sets the real scope of the project.",
        ],
      },
      {
        heading: "The main stages",
        paragraphs: [
          "Most projects follow the same arc. How long each stage takes depends on company size, the number of sites and how mature your existing records are.",
        ],
        points: [
          "Gap analysis and planning",
          "Documenting processes and defining responsibilities",
          "Rolling out the system and training the team",
          "Internal audit and management review",
          "Certification audit by an accredited body, in two stages",
        ],
      },
      {
        heading: "What slows projects down",
        paragraphs: [
          "Unclear ownership, last-minute documentation and records created only for the audit are the usual culprits. Treating the system as a way of running the business, rather than a binder for the auditor, shortens the timeline and makes surveillance audits easier later.",
        ],
      },
    ],
  },
];