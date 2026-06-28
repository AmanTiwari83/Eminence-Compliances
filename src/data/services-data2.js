"use client";

// --- SVG Icons (No changes to your icons) ---
const IconBEE = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconBIS = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12L20 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12L4 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconEPR = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H6L8 8L10 16L12 4L14 14L16 10L18 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
const IconWPC = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 17H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="7" cy="17" r="1.5" fill="currentColor" />
  </svg>
);

const getIconForService = (title) => {
  if (title.includes("BEE")) return IconBEE;
  if (title.includes("BIS")) return IconBIS;
  if (title.includes("EPR")) return IconEPR;
  if (title.includes("WPC")) return IconWPC;
  return IconBIS;
};



export const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(4px)" // Adds a premium soft entrance
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a "smooth-stop" effect
    },
  },
};

// --- DATASET A: For Cards and Navbar ---
// We added the 'id' field here.
export const servicesData = [
  {
    id: "bis-isi-certification",
    title: "BIS ISI Certification",
    description: "Certification for industrial products to ensure quality, safety, and reliability with the ISI mark.",
    category: "BIS Services",
    abbr: "ISI",  
    icon: getIconForService("BIS ISI"),
    logo: "/images/service-desc/bis.png",
  },
  {
    id: "bis-fmcs-certification",
    title: "BIS FMCS Certification",
    description: "Foreign Manufacturer Certification Scheme for overseas applicants to sell products in India.",
    category: "BIS Services",
    abbr: "FMCS",
    icon: getIconForService("FMCS"),
    logo: "/images/service-desc/fmcs2.png",
  },
  {
    id: "bis-hallmark-certification",
    title: "BIS Hallmark Certification",
    description: "Purity certification for Gold and Silver jewelry to protect consumers from adulteration.",
    category: "BIS Services",
    abbr: "Hallmark",
    icon: getIconForService("Hallmark"),
  },
  {
    id: "bis-assaying-centre",
    title: "Assaying & Hallmarking Centre",
    description: "Recognition for centers involved in testing and marking precious metal purity.",
    category: "BIS Services",
    abbr: "Assaying",
    icon: getIconForService("BIS"),
  },
  {
    id: "bis-crs-registration",
    title: "Compulsory Registration (CRS)",
    description: "Mandatory registration for electronics and IT goods to ensure safety standards.",
    category: "BIS Services",
    abbr: "CRS",
    logo: "/images/service-desc/crs.png",
    icon: getIconForService("BIS CRS"),
  },
  {
    id: "bis-eco-mark",
    title: "BIS Eco Mark Certification",
    description: "Certification for environment-friendly products that meet specific ecological criteria.",
    category: "BIS Services",
    abbr: "Eco Mark",
    icon: getIconForService("Eco Mark"),
  },
  {
    id: "wpc-eta-approval",
    title: "WPC ETA Approval",
    description: "Mandatory approval for wireless and Bluetooth equipment imported or sold in India.",
    category: "Wireless",
    abbr: "ETA",
    icon: getIconForService("WPC"),
  },
  {
    id: "bee-registration",
    title: "BEE Registration",
    description: "Energy efficiency labeling for appliances to help consumers save on energy costs.",
    category: "Energy",
    abbr: "BEE",
    logo: "/images/service-desc/bee.png",
    icon: getIconForService("BEE"),
  },
  {
    id: "epr-authorization",
    title: "EPR Authorization",
    description: "Extended Producer Responsibility for managing waste from electronics, plastic, and batteries.",
    category: "Environment",
    abbr: "EPR",
    icon: getIconForService("EPR"),
  },
  {
    id: "legal-metrology-registration",
    title: "Legal Metrology (LMPCR)",
    description: "Packaged commodity registration for compliance with weight and measurement laws.",
    category: "Legal",
    abbr: "LMPCR",
    icon: getIconForService("Legal"),
  },
  {
    id: "wmi-code-registration",
    title: "WMI Code Registration",
    description: "World Manufacturer Identifier registration for vehicle manufacturers to assign VINs.",
    category: "Automotive",
    abbr: "WMI",
    icon: getIconForService("WMI"),
  }
];

// // --- DATASET B: For the Detailed Page ---
// export const ServiceContent = {
//   "bis-isi-certification": {
//     id: "bis-isi-certification",
//     category: "BIS / ISI Mark",
//     title: "BIS ISI Certification",
//     subtitle: "Indian Standards Institute Mark",
//     shortDescription:
//       "The ISI mark is the most recognized certification mark in India, confirming that a product conforms to an Indian Standard (IS) developed by the Bureau of Indian Standards.",

//     glance: [
//       { label: "Authority", value: "Bureau of Indian Standards" },
//       { label: "Timeline", value: "8–16 Weeks", badge: "amber" },
//       { label: "Validity", value: "1–2 Years (Renewable)" },
//       { label: "Scheme", value: "Scheme I" },
//       {
//         label: "Mandatory?",
//         value: "Yes — 400+ Product Types",
//         badge: "green",
//       },
//       { label: "Complexity", value: "Moderate–High", badge: "amber" },
//     ],

//     overview: {
//       paragraphs: [
//         "The ISI Mark is India's most widely recognised product quality certification, issued by the Bureau of Indian Standards (BIS) under the Ministry of Consumer Affairs. It confirms that a product has been tested against the relevant Indian Standard (IS) and that the manufacturer's facility has been audited for quality compliance.",
//         "For both domestic manufacturers and importers, holding an ISI Mark licence is often a legal prerequisite to manufacture or sell in India. Products without the mark in notified categories are barred from Indian retail shelves and face seizure at customs.",
//       ],
//       whyItMatters: [
//         "Mandatory for 400+ product categories notified under BIS Act, 2016",
//         "Provides legal protection against product liability claims",
//         "Required for listing on government e-marketplace (GeM) portals",
//         "Builds consumer and retailer confidence instantly",
//         "Prevents costly recalls and regulatory penalties",
//       ],
//       industries: [
//         "Electronics & IT",
//         "Electrical Equipment",
//         "Steel & Metals",
//         "Cement & Construction",
//         "Chemicals & Fertilizers",
//         "Food & Packaging",
//         "Automotive Parts",
//         "Textiles",
//       ],
//     },

//     certMeta: [
//       { label: "Applicable Law", value: "BIS Act, 2016" },
//       { label: "Issuing Body", value: "Bureau of Indian Standards" },
//       { label: "License Type", value: "Product Certification" },
//       { label: "Validity Period", value: "1–2 Years" },
//       { label: "Renewal", value: "Annual Renewal" },
//       { label: "Typical Timeline", value: "8–16 Weeks", badge: "amber" },
//       { label: "Factory Audit", value: "Required", badge: "green" },
//       {
//         label: "Testing Required",
//         value: "Yes — BIS-approved Lab",
//         badge: "green",
//       },
//     ],

//     stats: [
//       { value: "500+", label: "Licences Obtained" },
//       { value: "98%", label: "Success Rate" },
//       { value: "12+", label: "Years Experience" },
//       { value: "40+", label: "Countries Served" },
//     ],

//     features: [
//       "Boosts Brand Reputation",
//       "Mandatory for 400+ Products",
//       "Standard Quality Assurance",
//     ],

//     processSteps: [
//       {
//         step: 1,
//         icon: "📋",
//         title: "Product Assessment & IS Identification",
//         description:
//           "We identify the applicable Indian Standard for your product and determine the correct BIS scheme. A gap analysis is provided before any fees are committed.",
//       },
//       {
//         step: 2,
//         icon: "📄",
//         title: "Document Preparation & Application Filing",
//         description:
//           "Our team prepares the complete application package — company documents, product technical files, and test reports — and files formally with BIS.",
//       },
//       {
//         step: 3,
//         icon: "🔬",
//         title: "Product Testing at BIS-Approved Lab",
//         description:
//           "Samples are submitted to a BIS-recognised laboratory. We coordinate dispatch, track progress, and handle lab queries on your behalf.",
//       },
//       {
//         step: 4,
//         icon: "🏭",
//         title: "Factory Audit Preparation & Coordination",
//         description:
//           "BIS auditors inspect your facility. We prepare a factory readiness report and guide your team through every checkpoint in advance.",
//       },
//       {
//         step: 5,
//         icon: "✅",
//         title: "Licence Grant & ISI Mark Authorisation",
//         description:
//           "Upon audit and test clearance, BIS issues your licence. You are legally authorised to affix the ISI Mark on your products.",
//       },
//       {
//         step: 6,
//         icon: "🔄",
//         title: "Post-Certification Compliance & Renewal",
//         description:
//           "We manage annual renewals, surveillance audits, and product change notifications to ensure uninterrupted compliance.",
//       },
//     ],

//     benefits: [
//       {
//         icon: "🇮🇳",
//         title: "Legal Market Access",
//         description:
//           "Mandatory for selling or manufacturing notified products in India. Avoid customs rejection and government penalties.",
//       },
//       {
//         icon: "🛡️",
//         title: "Brand Trust & Credibility",
//         description:
//           "The ISI Mark is India's most recognised quality symbol, signalling reliability to distributors and consumers.",
//       },
//       {
//         icon: "📈",
//         title: "Competitive Edge",
//         description:
//           "Many Indian buyers and B2B procurement teams mandate ISI-certified suppliers over uncertified alternatives.",
//       },
//       {
//         icon: "🏛️",
//         title: "Government Tender Eligibility",
//         description:
//           "Access large-scale public procurement where ISI certification is a minimum eligibility criterion.",
//       },
//       {
//         icon: "⚡",
//         title: "Faster Port Clearance",
//         description:
//           "Pre-certified products clear Indian customs significantly faster, reducing warehousing and demurrage costs.",
//       },
//       {
//         icon: "🌏",
//         title: "Long-Term Market Presence",
//         description:
//           "A renewable licence provides a stable foundation for sustained expansion in one of the world's largest consumer markets.",
//       },
//     ],

//     documents: [
//       {
//         groupLabel: "Company & Entity Documents",
//         items: [
//           "Certificate of Incorporation / Registration",
//           "Memorandum & Articles of Association",
//           "Authorised Signatory Details & POA",
//           "Company Profile & Factory Layout Plan",
//           "ISO 9001 Certificate (if available)",
//         ],
//       },
//       {
//         groupLabel: "Technical & Product Documents",
//         items: [
//           "Product Technical Specifications / Datasheet",
//           "Product Test Reports (from NABL / BIS labs)",
//           "Manufacturing Process Flow Chart",
//           "Quality Control Plan & Inspection Records",
//           "Sample Products (for BIS lab testing)",
//         ],
//       },
//     ],

//     documentsNote:
//       "Document requirements vary by product category and applicable Indian Standard. Our consultants provide a tailored checklist after the initial assessment call.",

//     faqs: [
//       {
//         question: "Is the ISI Mark mandatory for all products?",
//         answer:
//           "No — it is mandatory only for product categories notified by BIS. These include electronics, electrical equipment, steel, cement, and many more. We assess your specific product during the initial consultation.",
//       },
//       {
//         question: "How long does the ISI Mark certification process take?",
//         answer:
//           "Typically 8–16 weeks from complete document submission. Timeline depends on product category, lab testing turnaround, and BIS processing time.",
//       },
//       {
//         question: "Can one licence cover multiple product variants?",
//         answer:
//           "In many cases yes, if variants fall under the same IS standard. Significant differences in ratings or design may require separate applications.",
//       },
//       {
//         question: "What happens during the BIS factory audit?",
//         answer:
//           "BIS auditors verify your production process, quality control systems, and raw materials against Indian Standard requirements. We conduct mock checks to prepare your team in advance.",
//       },
//       {
//         question: "What are the penalties for selling without an ISI Mark?",
//         answer:
//           "Penalties under the BIS Act, 2016 include fines up to ₹2 lakh or 2× product value, product seizure, and potential criminal liability.",
//       },
//     ],

//     cta: {
//       title: "Get Your ISI Mark Today",
//       description:
//         "Talk to a BIS specialist. We'll assess your product, outline the exact pathway, and give you a clear timeline — at zero commitment.",
//       email: "info@eminencecompliance.com",
//       phone: "+91 74285 55852",
//       whatsapp: "917428555852",
//     },
//   },

//   "bis-fmcs-certification": {
//     id: "bis-fmcs-certification",
//     category: "BIS / FMCS",
//     title: "BIS FMCS Certification",
//     subtitle: "Foreign Manufacturer Certification Scheme",
//     shortDescription:
//       "FMCS is specifically designed for foreign manufacturers to ensure their products meet Indian quality standards before reaching the Indian market.",

//     glance: [
//       { label: "Authority", value: "Bureau of Indian Standards" },
//       { label: "Timeline", value: "6–12 Weeks", badge: "amber" },
//       { label: "Validity", value: "1–2 Years (Renewable)" },
//       { label: "Scheme", value: "FMCS / Scheme I" },
//       {
//         label: "Mandatory?",
//         value: "Yes — For Foreign Manufacturers",
//         badge: "green",
//       },
//       { label: "Complexity", value: "High", badge: "amber" },
//     ],

//     overview: {
//       paragraphs: [
//         "The Foreign Manufacturer Certification Scheme (FMCS) is the BIS pathway specifically designed for manufacturers based outside India. It enables foreign entities to obtain the ISI Mark and legally export their products to the Indian market without establishing a local manufacturing presence.",
//         "Under FMCS, the foreign manufacturer must appoint an Authorised Indian Representative (AIR), submit to a BIS factory audit at their overseas facility, and have their products tested at a BIS-recognised lab. Eminence Global acts as your AIR and manages the entire process end-to-end.",
//       ],
//       whyItMatters: [
//         "Only legal pathway for foreign manufacturers to affix the ISI Mark",
//         "Avoids shipment seizure at Indian ports of entry",
//         "Mandatory for 100+ product categories exported to India",
//         "Builds trust with Indian importers and retail chains",
//         "Prerequisite for government procurement in notified categories",
//       ],
//       industries: [
//         "Electronics & IT Hardware",
//         "Electrical Appliances",
//         "Automotive Components",
//         "Steel & Alloy Products",
//         "Chemicals & Polymers",
//         "Medical Devices",
//         "Toys & Consumer Goods",
//         "Packaging Materials",
//       ],
//     },

//     certMeta: [
//       { label: "Applicable Law", value: "BIS Act, 2016" },
//       { label: "Issuing Body", value: "Bureau of Indian Standards" },
//       { label: "Scheme", value: "Foreign Manufacturer Certification Scheme" },
//       { label: "AIR Required", value: "Yes — Mandatory", badge: "green" },
//       { label: "Validity Period", value: "1–2 Years" },
//       { label: "Typical Timeline", value: "6–12 Weeks", badge: "amber" },
//       { label: "Factory Audit", value: "Required (Overseas)", badge: "green" },
//       {
//         label: "Testing Required",
//         value: "Yes — BIS-approved Lab",
//         badge: "green",
//       },
//     ],

//     stats: [
//       { value: "300+", label: "FMCS Licences" },
//       { value: "98%", label: "Success Rate" },
//       { value: "40+", label: "Countries Served" },
//       { value: "12+", label: "Years Experience" },
//     ],

//     features: [
//       "Direct Entry to Indian Market",
//       "Global Compliance",
//       "On-site Audit Support",
//     ],

//     processSteps: [
//       {
//         step: 1,
//         icon: "📋",
//         title: "Initial Consultation & Product Assessment",
//         description:
//           "We review your product category, applicable IS standard, and determine scheme eligibility. A complete gap analysis is provided upfront.",
//       },
//       {
//         step: 2,
//         icon: "🤝",
//         title: "Nomination of Authorised Indian Representative (AIR)",
//         description:
//           "Eminence Global is nominated as your AIR — a mandatory legal requirement for all FMCS applications. We execute the AIR agreement and proceed on your behalf.",
//       },
//       {
//         step: 3,
//         icon: "📄",
//         title: "Document Preparation & BIS Application Filing",
//         description:
//           "We prepare your complete application package and file it with the BIS FMCS division, coordinating all correspondence.",
//       },
//       {
//         step: 4,
//         icon: "🔬",
//         title: "Product Testing at BIS-Recognised Lab",
//         description:
//           "Samples are dispatched to an approved lab. We track testing progress and resolve any technical queries raised.",
//       },
//       {
//         step: 5,
//         icon: "🏭",
//         title: "Overseas Factory Audit",
//         description:
//           "BIS-appointed auditors visit your overseas facility. We prepare your team with a detailed pre-audit readiness guide.",
//       },
//       {
//         step: 6,
//         icon: "✅",
//         title: "Licence Grant & Ongoing Compliance",
//         description:
//           "BIS issues your FMCS licence. We manage renewals, surveillance audits, and any product change notifications.",
//       },
//     ],

//     benefits: [
//       {
//         icon: "🌏",
//         title: "Direct Indian Market Access",
//         description:
//           "The only legal route for foreign manufacturers to affix the ISI Mark and export to India without a local entity.",
//       },
//       {
//         icon: "🛡️",
//         title: "Customs Clearance Assurance",
//         description:
//           "FMCS-certified products clear Indian ports without risk of seizure or rejection by customs authorities.",
//       },
//       {
//         icon: "🤝",
//         title: "Full AIR Support",
//         description:
//           "We act as your Authorised Indian Representative, handling all BIS liaison, audit coordination, and compliance filings.",
//       },
//       {
//         icon: "📈",
//         title: "Competitive Advantage",
//         description:
//           "FMCS certification differentiates your products from uncertified competitors and satisfies Indian buyer requirements.",
//       },
//       {
//         icon: "🏛️",
//         title: "Government Procurement Access",
//         description:
//           "Certified products are eligible for large-scale government tenders where ISI certification is a mandatory criterion.",
//       },
//       {
//         icon: "🔄",
//         title: "Managed Renewals",
//         description:
//           "We handle all post-certification obligations including annual renewals and surveillance audits.",
//       },
//     ],

//     documents: [
//       {
//         groupLabel: "Company & Entity Documents",
//         items: [
//           "Certificate of Incorporation (notarised & apostilled)",
//           "Memorandum & Articles of Association",
//           "Authorised Signatory Details & Power of Attorney",
//           "AIR Agreement with Eminence Global",
//           "Factory Layout Plan & Company Profile",
//         ],
//       },
//       {
//         groupLabel: "Technical & Product Documents",
//         items: [
//           "Product Technical Specifications / Datasheet",
//           "Test Reports from BIS-recognised / NABL Lab",
//           "Manufacturing Process Flow Chart",
//           "Quality Control Plan & Inspection Records",
//           "Sample Products for BIS Lab Testing",
//         ],
//       },
//     ],

//     documentsNote:
//       "All foreign documents must be notarised and apostilled as required by BIS. Our team provides a complete checklist specific to your product category.",

//     faqs: [
//       {
//         question:
//           "What is an Authorised Indian Representative (AIR) and why is it needed?",
//         answer:
//           "An AIR is a mandatory legal requirement under FMCS. They act as the local point of contact for BIS on behalf of the foreign manufacturer. Eminence Global serves as your AIR throughout the certification and post-certification period.",
//       },
//       {
//         question: "Do BIS auditors travel to our factory overseas?",
//         answer:
//           "Yes — BIS appoints auditors to conduct an on-site inspection at your overseas manufacturing facility. We prepare your team with a detailed pre-audit guide and conduct mock checks remotely.",
//       },
//       {
//         question: "How long does FMCS certification take?",
//         answer:
//           "Typically 6–12 weeks from complete document submission, depending on product category, lab testing turnaround, and BIS processing time.",
//       },
//       {
//         question: "Can one FMCS licence cover multiple product models?",
//         answer:
//           "Yes, in many cases, if variants fall under the same IS standard. Significant design or rating differences may require separate applications.",
//       },
//       {
//         question: "What happens if our FMCS licence lapses?",
//         answer:
//           "Exporting BIS-notified products without a valid licence results in customs seizure and penalties under the BIS Act, 2016. We proactively manage all renewal timelines to prevent lapses.",
//       },
//     ],

//     cta: {
//       title: "Ready to Export to India?",
//       description:
//         "Talk to an FMCS specialist today. We'll assess your product, outline the exact pathway, and give you a clear timeline — at zero commitment.",
//       email: "info@eminencecompliance.com",
//       phone: "+91 74285 55852",
//       whatsapp: "917428555852",
//     },
//   },

//   "bis-hallmark-certification": {
//     id: "bis-hallmark-certification",
//     category: "BIS / Hallmarking",
//     title: "BIS Hallmark Certification",
//     subtitle: "Purity Marking for Gold & Silver",
//     shortDescription:
//       "Hallmarking provides an official guarantee of the purity and fineness of precious metal articles like jewellery.",

//     glance: [
//       { label: "Authority", value: "Bureau of Indian Standards" },
//       { label: "Timeline", value: "4–8 Weeks", badge: "amber" },
//       { label: "Metals Covered", value: "Gold & Silver" },
//       { label: "Mandatory?", value: "Yes — Gold Jewellery", badge: "green" },
//       { label: "Mark Components", value: "BIS Logo, Purity, HUID" },
//       { label: "Complexity", value: "Moderate", badge: "amber" },
//     ],

//     overview: {
//       paragraphs: [
//         "BIS Hallmarking is the official certification of the purity of precious metal articles in India. Managed by the Bureau of Indian Standards, it is now mandatory for gold jewellery sold by licensed jewellers across India, following the government's phased mandatory hallmarking rollout.",
//         "Every hallmarked article carries a Hallmark Unique Identification (HUID) number, a BIS logo, and a purity/fineness mark. This system protects consumers from adulteration and gives jewellers a verifiable quality credential that builds lasting customer trust.",
//       ],
//       whyItMatters: [
//         "Mandatory for gold jewellery sales by BIS-licensed jewellers",
//         "HUID enables full traceability of every jewellery piece",
//         "Protects consumers against metal adulteration and fraud",
//         "Increases resale and buyback value of jewellery",
//         "Builds brand trust and retail credibility",
//       ],
//       industries: [
//         "Gold Jewellery Manufacturers",
//         "Silver Jewellery Makers",
//         "Jewellery Exporters",
//         "Retail Jewellery Chains",
//         "Wholesale Bullion Traders",
//         "Artisan Jewellers",
//       ],
//     },

//     certMeta: [
//       { label: "Applicable Law", value: "BIS Act, 2016 & Hallmarking Rules" },
//       { label: "Issuing Body", value: "Bureau of Indian Standards" },
//       { label: "Mark Type", value: "BIS Logo + Purity + HUID" },
//       { label: "Mandatory?", value: "Yes — Gold Jewellery", badge: "green" },
//       { label: "Typical Timeline", value: "4–8 Weeks", badge: "amber" },
//       { label: "Centre Audit", value: "Required", badge: "green" },
//       { label: "Laser Marking", value: "HUID via Approved Centre" },
//       { label: "Renewal", value: "Annual Licence Renewal" },
//     ],

//     stats: [
//       { value: "200+", label: "Jewellers Licensed" },
//       { value: "98%", label: "Success Rate" },
//       { value: "10+", label: "Years Experience" },
//       { value: "Pan India", label: "Coverage" },
//     ],

//     features: [
//       "Ensures Metal Purity",
//       "Increases Resale Value",
//       "Protects Against Fraud",
//     ],

//     processSteps: [
//       {
//         step: 1,
//         icon: "📋",
//         title: "Eligibility Assessment & Documentation",
//         description:
//           "We assess your jewellery business, verify applicable purity grades, and prepare the complete BIS licence application.",
//       },
//       {
//         step: 2,
//         icon: "📄",
//         title: "BIS Jeweller Licence Application Filing",
//         description:
//           "Application is filed with BIS for a jeweller's licence, enabling you to get articles hallmarked at an approved Assaying & Hallmarking Centre (AHC).",
//       },
//       {
//         step: 3,
//         icon: "🏛️",
//         title: "Centre Audit & Verification",
//         description:
//           "BIS verifies your business premises and processes. We guide you through all checklist requirements for a smooth audit.",
//       },
//       {
//         step: 4,
//         icon: "🔬",
//         title: "Sampling & Purity Testing",
//         description:
//           "Articles are submitted to a BIS-recognised AHC for X-ray fluorescence (XRF) or fire assay testing to verify declared purity.",
//       },
//       {
//         step: 5,
//         icon: "🔖",
//         title: "Laser HUID Marking",
//         description:
//           "Approved articles are laser-engraved with a unique HUID at the AHC, making each piece individually traceable on the BIS portal.",
//       },
//       {
//         step: 6,
//         icon: "🔄",
//         title: "Licence Maintenance & Annual Renewal",
//         description:
//           "We manage your annual BIS jeweller licence renewal and advise on any regulatory updates affecting hallmarking compliance.",
//       },
//     ],

//     benefits: [
//       {
//         icon: "🛡️",
//         title: "Consumer Protection",
//         description:
//           "HUID-marked jewellery gives buyers full traceability and assurance of declared purity, reducing fraud risk.",
//       },
//       {
//         icon: "💰",
//         title: "Higher Resale Value",
//         description:
//           "Hallmarked jewellery commands better buyback and resale prices from jewellers and consumers alike.",
//       },
//       {
//         icon: "⚖️",
//         title: "Legal Compliance",
//         description:
//           "Mandatory hallmarking compliance protects your business from regulatory action and market bans.",
//       },
//       {
//         icon: "📈",
//         title: "Brand Credibility",
//         description:
//           "A BIS hallmark signals quality and authenticity, building long-term trust with retail customers.",
//       },
//       {
//         icon: "🔍",
//         title: "Full Traceability",
//         description:
//           "Each HUID number is registered on the BIS portal, enabling end-to-end tracking of every article.",
//       },
//       {
//         icon: "🌏",
//         title: "Export Readiness",
//         description:
//           "Hallmarked articles meet international buyers' quality expectations, supporting jewellery export initiatives.",
//       },
//     ],

//     documents: [
//       {
//         groupLabel: "Business & Identity Documents",
//         items: [
//           "GST Registration Certificate",
//           "Shop & Establishment Licence",
//           "PAN Card of Business / Proprietor",
//           "Aadhaar / Identity Proof of Authorised Signatory",
//           "Business Address Proof",
//         ],
//       },
//       {
//         groupLabel: "Premises & Quality Documents",
//         items: [
//           "Premises Ownership / Lease Agreement",
//           "Photographs of Business Premises",
//           "Details of Nearest BIS-approved AHC",
//           "Sample Jewellery Articles for Testing",
//         ],
//       },
//     ],

//     documentsNote:
//       "Document requirements may vary by state and business type. Our consultants provide a tailored checklist after the initial assessment.",

//     faqs: [
//       {
//         question: "Is BIS hallmarking mandatory for all jewellery?",
//         answer:
//           "Currently mandatory for gold jewellery sold by licensed jewellers in notified districts. Silver hallmarking is voluntary but strongly recommended.",
//       },
//       {
//         question: "What is a HUID number?",
//         answer:
//           "A Hallmark Unique Identification (HUID) is a six-digit alphanumeric code laser-engraved on each piece. It links the article to its testing and manufacturer records on the BIS portal.",
//       },
//       {
//         question: "Can small jewellers also get a BIS hallmark licence?",
//         answer:
//           "Yes — BIS issues licences to jewellers of all sizes. Our team guides small and artisan jewellers through the entire process at accessible cost.",
//       },
//       {
//         question: "How often must the BIS jeweller licence be renewed?",
//         answer:
//           "The licence is renewed annually. We track renewal dates and handle the process proactively to avoid lapses.",
//       },
//       {
//         question:
//           "What are the penalties for selling unhallmarked gold jewellery?",
//         answer:
//           "Penalties under the BIS Act include fines and possible cancellation of the jeweller's licence. In notified cities, selling unhallmarked gold jewellery is a punishable offence.",
//       },
//     ],

//     cta: {
//       title: "Get BIS Hallmark Certified Today",
//       description:
//         "Speak with our hallmarking specialists. We'll guide you through the entire process — from licence application to HUID marking.",
//       email: "info@eminencecompliance.com",
//       phone: "+91 74285 55852",
//       whatsapp: "917428555852",
//     },
//   },

//   "bis-assaying-centre": {
//     id: "bis-assaying-centre",
//     category: "BIS / Hallmarking",
//     title: "Assaying & Hallmarking Centre",
//     subtitle: "Recognition of Purity Testing Hubs",
//     shortDescription:
//       "Recognition for private or public centres to test and hallmark jewellery on behalf of BIS.",

//     glance: [
//       { label: "Authority", value: "Bureau of Indian Standards" },
//       { label: "Timeline", value: "8–16 Weeks", badge: "amber" },
//       { label: "Accreditation", value: "NABL Required" },
//       {
//         label: "Mandatory?",
//         value: "Yes — for AHC Operations",
//         badge: "green",
//       },
//       { label: "Infrastructure", value: "Mandatory Setup", badge: "amber" },
//       { label: "Complexity", value: "High", badge: "amber" },
//     ],

//     overview: {
//       paragraphs: [
//         "An Assaying & Hallmarking Centre (AHC) is a BIS-recognised facility authorised to test the purity of precious metal articles and apply the official BIS hallmark. AHCs form the backbone of India's hallmarking ecosystem, enabling jewellers across the country to get their articles certified.",
//         "Setting up a recognised AHC requires NABL accreditation, a significant laboratory infrastructure investment, and a rigorous BIS recognition audit. Eminence Global assists entrepreneurs and existing labs in navigating every step of this process.",
//       ],
//       whyItMatters: [
//         "Only BIS-recognised AHCs can legally hallmark jewellery in India",
//         "High-demand service given mandatory hallmarking rollout",
//         "Recurring revenue from jeweller fees and government contracts",
//         "NABL accreditation opens doors to broader testing services",
//         "Strategic positioning in a growing precious metals market",
//       ],
//       industries: [
//         "Private Assaying Labs",
//         "Government Testing Centres",
//         "Jewellery Trade Associations",
//         "Precious Metal Refiners",
//         "University & Research Labs",
//       ],
//     },

//     certMeta: [
//       { label: "Applicable Law", value: "BIS Act, 2016 & Hallmarking Rules" },
//       { label: "Issuing Body", value: "Bureau of Indian Standards" },
//       { label: "Pre-requisite", value: "NABL Accreditation", badge: "green" },
//       { label: "Typical Timeline", value: "8–16 Weeks", badge: "amber" },
//       { label: "Infrastructure Audit", value: "Required", badge: "green" },
//       { label: "Testing Methods", value: "XRF & Fire Assay" },
//       { label: "Renewal", value: "Annual" },
//       { label: "Complexity", value: "High", badge: "amber" },
//     ],

//     stats: [
//       { value: "50+", label: "AHCs Supported" },
//       { value: "95%", label: "Recognition Rate" },
//       { value: "10+", label: "Years Experience" },
//       { value: "Pan India", label: "Coverage" },
//     ],

//     features: [
//       "Third-party Verification",
//       "Laboratory Standards",
//       "Technical Competence",
//     ],

//     processSteps: [
//       {
//         step: 1,
//         icon: "🏗️",
//         title: "Infrastructure Planning & Setup",
//         description:
//           "We advise on lab layout, equipment requirements (XRF machine, fire assay setup), and staffing to meet BIS and NABL standards.",
//       },
//       {
//         step: 2,
//         icon: "📋",
//         title: "NABL Accreditation",
//         description:
//           "NABL accreditation is a prerequisite for BIS AHC recognition. We guide you through the NABL application, documentation, and assessment process.",
//       },
//       {
//         step: 3,
//         icon: "📄",
//         title: "BIS AHC Recognition Application",
//         description:
//           "After NABL accreditation, we prepare and file the formal BIS recognition application with all supporting documents.",
//       },
//       {
//         step: 4,
//         icon: "🔬",
//         title: "BIS Recognition Audit",
//         description:
//           "BIS auditors inspect your laboratory facilities, equipment calibration records, and quality management systems. We prepare your team thoroughly.",
//       },
//       {
//         step: 5,
//         icon: "✅",
//         title: "AHC Recognition Grant",
//         description:
//           "BIS issues your AHC recognition certificate. You are now authorised to test and hallmark jewellery submitted by licensed jewellers.",
//       },
//       {
//         step: 6,
//         icon: "🔄",
//         title: "Annual Renewal & Surveillance",
//         description:
//           "We manage your annual BIS renewal and NABL surveillance assessments to ensure continued recognition.",
//       },
//     ],

//     benefits: [
//       {
//         icon: "💼",
//         title: "High-Demand Business",
//         description:
//           "With mandatory hallmarking expanding across India, demand for AHC services is growing rapidly.",
//       },
//       {
//         icon: "🏛️",
//         title: "Government & Trade Contracts",
//         description:
//           "Recognised AHCs are empanelled for government jewellery testing contracts and trade body partnerships.",
//       },
//       {
//         icon: "🔬",
//         title: "Broader Lab Services",
//         description:
//           "NABL accreditation obtained for AHC recognition can be extended to offer broader precious metals testing services.",
//       },
//       {
//         icon: "📈",
//         title: "Recurring Revenue",
//         description:
//           "Per-article hallmarking fees from jewellers provide stable, recurring revenue streams.",
//       },
//       {
//         icon: "🛡️",
//         title: "Regulatory Standing",
//         description:
//           "BIS recognition establishes your centre as an authoritative quality institution in the precious metals sector.",
//       },
//       {
//         icon: "🌏",
//         title: "National Network Access",
//         description:
//           "Recognised AHCs are listed on the BIS portal, giving you visibility to jewellers across India.",
//       },
//     ],

//     documents: [
//       {
//         groupLabel: "Organisation & Infrastructure Documents",
//         items: [
//           "Certificate of Incorporation / Partnership Deed",
//           "NABL Accreditation Certificate",
//           "Lab Layout Plan & Equipment List",
//           "XRF & Fire Assay Equipment Calibration Records",
//           "Quality Manual & Standard Operating Procedures",
//         ],
//       },
//       {
//         groupLabel: "Personnel & Compliance Documents",
//         items: [
//           "Qualified Assayer Credentials",
//           "Staff Training Records",
//           "Safety & Environmental Compliance Certificates",
//           "Previous Test Reports (if applicable)",
//         ],
//       },
//     ],

//     documentsNote:
//       "Infrastructure and documentation requirements are detailed and specific. Our consultants conduct a full readiness assessment before application filing.",

//     faqs: [
//       {
//         question:
//           "Is NABL accreditation mandatory before applying for BIS AHC recognition?",
//         answer:
//           "Yes — NABL accreditation for precious metal testing is a prerequisite for BIS AHC recognition. We assist with both NABL and BIS processes.",
//       },
//       {
//         question: "What equipment is required for an AHC?",
//         answer:
//           "Minimum requirements include an X-ray fluorescence (XRF) analyser and fire assay setup, along with calibrated reference standards and a documented quality management system.",
//       },
//       {
//         question: "How long does the entire AHC recognition process take?",
//         answer:
//           "Typically 8–16 weeks after NABL accreditation. The NABL process itself may take an additional 3–6 months if not already in place.",
//       },
//       {
//         question: "Can an existing lab convert to an AHC?",
//         answer:
//           "Yes — existing NABL-accredited labs with precious metal testing scope can apply for BIS AHC recognition with relatively fewer infrastructure additions.",
//       },
//       {
//         question: "How many jewellers can a single AHC serve?",
//         answer:
//           "There is no fixed limit. Capacity depends on your equipment throughput and staffing. BIS may assign a geographic jurisdiction during recognition.",
//       },
//     ],

//     cta: {
//       title: "Set Up Your Assaying & Hallmarking Centre",
//       description:
//         "Speak with our AHC specialists. We'll assess your infrastructure, guide NABL accreditation, and manage the BIS recognition process end-to-end.",
//       email: "info@eminencecompliance.com",
//       phone: "+91 74285 55852",
//       whatsapp: "917428555852",
//     },
//   },

//   "bis-crs-registration": {
//     id: "bis-crs-registration",
//     category: "BIS / CRS",
//     title: "Compulsory Registration (BIS CRS)",
//     subtitle: "Safety for Electronics & IT Goods",
//     shortDescription:
//       "Registration for electronics products under the Compulsory Registration Order to prevent substandard goods from entering the market.",

//     glance: [
//       { label: "Authority", value: "Bureau of Indian Standards" },
//       { label: "Timeline", value: "20–30 Days", badge: "amber" },
//       { label: "Products", value: "70+ Electronics Categories" },
//       { label: "Mandatory?", value: "Yes — Notified Products", badge: "green" },
//       { label: "Testing", value: "BIS-recognised Lab Required" },
//       { label: "Complexity", value: "Low–Moderate", badge: "amber" },
//     ],

//     overview: {
//       paragraphs: [
//         "The BIS Compulsory Registration Scheme (CRS) is a self-declaration-based registration system for electronics and IT products sold in India. Unlike the ISI Mark scheme, CRS does not require a factory audit — products are registered after successful testing at a BIS-recognised lab and submission of technical documents via the BIS online portal.",
//         "CRS is mandatory for 70+ product categories including mobile phones, laptops, LED lights, power banks, set-top boxes, and many other consumer electronics. Without a valid CRS registration, products cannot be legally imported or sold in India.",
//       ],
//       whyItMatters: [
//         "Mandatory for 70+ electronics product categories",
//         "Required for customs clearance of electronics imports",
//         "Faster and more affordable than full ISI Mark certification",
//         "Ensures consumer safety and prevents substandard goods",
//         "Registration number must appear on product label",
//       ],
//       industries: [
//         "Consumer Electronics",
//         "IT Hardware & Peripherals",
//         "LED & Lighting Products",
//         "Mobile & Wireless Devices",
//         "Power Electronics",
//         "Home Appliances",
//         "Audio/Video Equipment",
//         "Wearables & Accessories",
//       ],
//     },

//     certMeta: [
//       {
//         label: "Applicable Order",
//         value: "Electronics & IT Goods Order, 2012",
//       },
//       { label: "Issuing Body", value: "Bureau of Indian Standards" },
//       { label: "Scheme Type", value: "Self-Declaration with Lab Testing" },
//       { label: "Factory Audit", value: "Not Required" },
//       { label: "Typical Timeline", value: "20–30 Days", badge: "amber" },
//       {
//         label: "Testing Required",
//         value: "Yes — BIS-recognised Lab",
//         badge: "green",
//       },
//       { label: "Products Covered", value: "70+ Categories" },
//       { label: "Renewal", value: "Periodic (varies by product)" },
//     ],

//     stats: [
//       { value: "600+", label: "CRS Registrations" },
//       { value: "98%", label: "Success Rate" },
//       { value: "70+", label: "Product Categories" },
//       { value: "20–30", label: "Days Avg. Timeline" },
//     ],

//     features: [
//       "Safety Compliance",
//       "Required for Custom Clearance",
//       "Market Acceptance",
//     ],

//     processSteps: [
//       {
//         step: 1,
//         icon: "📋",
//         title: "Product Category & Standard Identification",
//         description:
//           "We confirm your product falls under CRS scope, identify the applicable IS standard, and shortlist a BIS-recognised test lab.",
//       },
//       {
//         step: 2,
//         icon: "🔬",
//         title: "Sample Testing at BIS-Recognised Lab",
//         description:
//           "Product samples are submitted to an approved lab. We coordinate sample dispatch and track the test report.",
//       },
//       {
//         step: 3,
//         icon: "📄",
//         title: "Document Preparation",
//         description:
//           "We prepare all required documents including test reports, product specifications, manufacturer declarations, and authorisation letters.",
//       },
//       {
//         step: 4,
//         icon: "💻",
//         title: "BIS Portal Registration",
//         description:
//           "Application is filed on the BIS online portal. We handle all portal submissions, correspondence, and query resolution.",
//       },
//       {
//         step: 5,
//         icon: "✅",
//         title: "Registration Certificate Issuance",
//         description:
//           "BIS issues the CRS registration certificate with a unique registration number to be printed on your product labels.",
//       },
//       {
//         step: 6,
//         icon: "🔄",
//         title: "Label Compliance & Renewal",
//         description:
//           "We advise on labelling requirements and manage periodic renewals to ensure continuous compliance.",
//       },
//     ],

//     benefits: [
//       {
//         icon: "⚡",
//         title: "Fast Process",
//         description:
//           "CRS is one of the fastest BIS certifications — typically completed in 20–30 days with no factory audit required.",
//       },
//       {
//         icon: "🛡️",
//         title: "Customs Clearance",
//         description:
//           "A valid CRS registration number is required for electronics imports to clear Indian customs without delays.",
//       },
//       {
//         icon: "📱",
//         title: "Wide Product Coverage",
//         description:
//           "Covers 70+ electronics categories including mobile phones, laptops, LEDs, power banks, and set-top boxes.",
//       },
//       {
//         icon: "💰",
//         title: "Cost-Effective",
//         description:
//           "Lower cost than full ISI Mark certification — no factory audit fees or extensive on-site inspection required.",
//       },
//       {
//         icon: "🌏",
//         title: "Market Access",
//         description:
//           "Without CRS, notified electronics products cannot be legally sold or imported in India.",
//       },
//       {
//         icon: "📈",
//         title: "Consumer Trust",
//         description:
//           "CRS registration signals safety compliance, supporting consumer confidence and retailer acceptance.",
//       },
//     ],

//     documents: [
//       {
//         groupLabel: "Company & Authorisation Documents",
//         items: [
//           "Certificate of Incorporation / Business Registration",
//           "Authorisation Letter from Manufacturer (for importers)",
//           "Importer / Manufacturer Contact Details",
//           "Brand Owner Agreement (if applicable)",
//         ],
//       },
//       {
//         groupLabel: "Technical & Test Documents",
//         items: [
//           "Product Test Report from BIS-recognised Lab",
//           "Product Technical Specifications / Datasheet",
//           "Product Label Design with Registration Number Placeholder",
//           "Declaration of Conformity",
//         ],
//       },
//     ],

//     documentsNote:
//       "Requirements vary by product category. Our team provides a precise checklist after confirming your product scope.",

//     faqs: [
//       {
//         question: "Is a factory audit required for CRS registration?",
//         answer:
//           "No — CRS is a self-declaration scheme based on lab testing. No factory audit is required, making it significantly faster and cheaper than the ISI Mark scheme.",
//       },
//       {
//         question: "How long is a CRS registration valid?",
//         answer:
//           "Validity varies by product category. Some registrations are valid for 2 years, others require periodic renewal. We track all renewal dates on your behalf.",
//       },
//       {
//         question: "Can one CRS registration cover multiple product models?",
//         answer:
//           "Each model/variant typically requires a separate registration unless they share the same technical specifications and IS standard scope.",
//       },
//       {
//         question:
//           "What happens if I import electronics without CRS registration?",
//         answer:
//           "Products without CRS registration for notified categories are detained at customs, returned, or destroyed. Importers face penalties under the Electronics & IT Goods Order.",
//       },
//       {
//         question: "Can foreign manufacturers apply for CRS directly?",
//         answer:
//           "Yes — foreign manufacturers or their Indian importers / authorised representatives can apply. We handle CRS applications for both domestic and international clients.",
//       },
//     ],

//     cta: {
//       title: "Register Your Electronics Products Today",
//       description:
//         "Get CRS registration in 20–30 days. Our team handles everything from lab coordination to BIS portal submission.",
//       email: "info@eminencecompliance.com",
//       phone: "+91 74285 55852",
//       whatsapp: "917428555852",
//     },
//   },

//   "bis-eco-mark": {
//     id: "bis-eco-mark",
//     category: "BIS / Eco Mark",
//     title: "BIS Eco Mark Certification",
//     subtitle: "Environmentally Friendly Product Label",
//     shortDescription:
//       "A voluntary certification scheme for products that have a reduced environmental impact during their lifecycle.",

//     glance: [
//       { label: "Authority", value: "Bureau of Indian Standards" },
//       { label: "Timeline", value: "10–20 Weeks", badge: "amber" },
//       { label: "Type", value: "Voluntary Certification" },
//       { label: "Focus", value: "Environmental Impact" },
//       { label: "Lifecycle", value: "Raw Material to Disposal" },
//       { label: "Complexity", value: "Moderate", badge: "amber" },
//     ],

//     overview: {
//       paragraphs: [
//         "The BIS Eco Mark is a voluntary environmental label awarded to products that meet specific ecological criteria across their entire lifecycle — from raw material extraction and manufacturing to use and disposal. It is India's official eco-label, recognised by the Ministry of Environment, Forest and Climate Change.",
//         "Eco Mark certification helps businesses demonstrate environmental responsibility, differentiate products in sustainability-conscious markets, and meet the growing demand from institutional buyers for green-certified goods.",
//       ],
//       whyItMatters: [
//         "India's official eco-label backed by BIS and MoEFCC",
//         "Differentiates products in green procurement and retail",
//         "Meets institutional and government buyer sustainability requirements",
//         "Reduces regulatory risk as environmental norms tighten",
//         "Supports CSR and ESG reporting objectives",
//       ],
//       industries: [
//         "Soaps & Detergents",
//         "Paper & Paper Products",
//         "Paints & Varnishes",
//         "Food Products",
//         "Lubricating Oils",
//         "Packaging Materials",
//         "Electrical & Electronic Products",
//         "Textiles & Garments",
//       ],
//     },

//     certMeta: [
//       { label: "Applicable Scheme", value: "BIS Eco Mark Scheme, 1991" },
//       { label: "Issuing Body", value: "Bureau of Indian Standards" },
//       { label: "Type", value: "Voluntary" },
//       { label: "Lifecycle Assessment", value: "Required" },
//       { label: "Manufacturing Audit", value: "Required", badge: "green" },
//       { label: "Typical Timeline", value: "10–20 Weeks", badge: "amber" },
//       { label: "Renewal", value: "Periodic" },
//       { label: "Focus", value: "Environmental Impact Reduction" },
//     ],

//     stats: [
//       { value: "100+", label: "Eco Mark Licences" },
//       { value: "96%", label: "Success Rate" },
//       { value: "8+", label: "Years Experience" },
//       { value: "15+", label: "Product Categories" },
//     ],

//     features: [
//       "Green Marketing Advantage",
//       "Ecological Sustainability",
//       "Lifecycle Assessment",
//     ],

//     processSteps: [
//       {
//         step: 1,
//         icon: "📋",
//         title: "Product Category & Criteria Assessment",
//         description:
//           "We identify the applicable Eco Mark product category and environmental criteria, and conduct a gap assessment against current product specifications.",
//       },
//       {
//         step: 2,
//         icon: "🌱",
//         title: "Raw Material & Supply Chain Review",
//         description:
//           "We review raw material sourcing, chemical composition, and supply chain environmental impacts to identify areas for improvement.",
//       },
//       {
//         step: 3,
//         icon: "🏭",
//         title: "Manufacturing Process Audit",
//         description:
//           "BIS auditors assess your manufacturing facility for energy consumption, waste generation, and pollution control systems.",
//       },
//       {
//         step: 4,
//         icon: "🔬",
//         title: "Eco-Testing & Lab Analysis",
//         description:
//           "Products are tested at approved labs for ecological parameters including biodegradability, toxicity, and energy efficiency.",
//       },
//       {
//         step: 5,
//         icon: "✅",
//         title: "Eco Mark Licence Grant",
//         description:
//           "BIS issues the Eco Mark licence. You are authorised to display the Eco Mark logo on qualifying products.",
//       },
//       {
//         step: 6,
//         icon: "🔄",
//         title: "Ongoing Compliance & Renewal",
//         description:
//           "We manage surveillance audits and periodic renewals, and advise on product improvements to maintain certification.",
//       },
//     ],

//     benefits: [
//       {
//         icon: "🌿",
//         title: "Green Market Differentiation",
//         description:
//           "The Eco Mark sets your products apart in sustainability-driven retail and institutional procurement.",
//       },
//       {
//         icon: "🏛️",
//         title: "Government Procurement Preference",
//         description:
//           "Government buyers increasingly prefer Eco Mark-certified products in public procurement policies.",
//       },
//       {
//         icon: "📈",
//         title: "ESG & CSR Credibility",
//         description:
//           "Eco Mark certification strengthens your ESG reporting and corporate sustainability narrative.",
//       },
//       {
//         icon: "🛡️",
//         title: "Regulatory Future-Proofing",
//         description:
//           "As environmental regulations tighten, Eco Mark-certified products are better positioned for compliance.",
//       },
//       {
//         icon: "💰",
//         title: "Premium Pricing Opportunity",
//         description:
//           "Eco-certified products can command price premiums in consumer and B2B markets.",
//       },
//       {
//         icon: "🌏",
//         title: "Export Markets",
//         description:
//           "Eco Mark supports entry into international markets that require environmental certification for listed product categories.",
//       },
//     ],

//     documents: [
//       {
//         groupLabel: "Company & Product Documents",
//         items: [
//           "Certificate of Incorporation",
//           "Product Specifications & Ingredient / Material List",
//           "Manufacturing Process Description",
//           "Existing Environmental / Safety Certifications",
//           "ISO 14001 Certificate (if available)",
//         ],
//       },
//       {
//         groupLabel: "Testing & Compliance Documents",
//         items: [
//           "Eco-test Reports from Approved Labs",
//           "Raw Material Safety Data Sheets",
//           "Energy Consumption & Waste Generation Data",
//           "Pollution Control Board Compliance Certificates",
//         ],
//       },
//     ],

//     documentsNote:
//       "Eco Mark criteria vary significantly by product category. Our team conducts a detailed eligibility assessment and provides a category-specific document checklist.",

//     faqs: [
//       {
//         question: "Is the Eco Mark certification mandatory?",
//         answer:
//           "No — it is a voluntary scheme. However, it provides significant advantages in green procurement, ESG reporting, and consumer trust.",
//       },
//       {
//         question: "Which product categories are eligible for the Eco Mark?",
//         answer:
//           "Currently notified categories include soaps and detergents, paper products, paints, food items, lubricating oils, packaging materials, and electrical products, among others.",
//       },
//       {
//         question: "Does Eco Mark replace the ISI Mark?",
//         answer:
//           "No — they are independent certifications. For mandatory product categories, the ISI Mark is still required. The Eco Mark is an additional voluntary label.",
//       },
//       {
//         question: "How long does Eco Mark certification take?",
//         answer:
//           "Typically 10–20 weeks depending on product category complexity, testing turnaround, and manufacturing audit scheduling.",
//       },
//       {
//         question: "Can imported products get the Eco Mark?",
//         answer:
//           "Yes — imported products meeting the ecological criteria can apply for Eco Mark certification through an authorised Indian representative.",
//       },
//     ],

//     cta: {
//       title: "Certify Your Products as Eco-Friendly",
//       description:
//         "Talk to our Eco Mark specialists. We'll assess your product's eligibility and guide you through every step of the certification process.",
//       email: "info@eminencecompliance.com",
//       phone: "+91 74285 55852",
//       whatsapp: "917428555852",
//     },
//   },

//   "wpc-eta-approval": {
//     id: "wpc-eta-approval",
//     category: "WPC / Wireless",
//     title: "WPC ETA Approval",
//     subtitle: "Wireless & RF Compliance",
//     shortDescription:
//       "Equipment Type Approval (ETA) is required for any wireless device operating in de-licensed frequency bands.",

//     glance: [
//       { label: "Authority", value: "Wireless Planning & Coordination Wing" },
//       { label: "Timeline", value: "4–8 Weeks", badge: "amber" },
//       { label: "Validity", value: "Lifetime (One-time)" },
//       { label: "Mandatory?", value: "Yes — Wireless Devices", badge: "green" },
//       { label: "Testing", value: "RF Test Report Required" },
//       { label: "Complexity", value: "Moderate", badge: "amber" },
//     ],

//     overview: {
//       paragraphs: [
//         "The Wireless Planning & Coordination (WPC) Wing under the Ministry of Communications grants Equipment Type Approval (ETA) for wireless devices that operate in de-licensed frequency bands such as 2.4 GHz (Wi-Fi, Bluetooth) and 5 GHz. Without WPC ETA, such devices cannot be legally imported, sold, or used in India.",
//         "WPC ETA is a one-time approval per device model and is a mandatory pre-import requirement for all wireless-enabled consumer electronics, IoT devices, and communication equipment.",
//       ],
//       whyItMatters: [
//         "Mandatory for all wireless devices sold or imported in India",
//         "Required for customs clearance alongside BIS CRS registration",
//         "One-time approval — no annual renewal needed",
//         "Covers Bluetooth, Wi-Fi, Zigbee, and other de-licensed RF technologies",
//         "Non-compliance results in device seizure and import ban",
//       ],
//       industries: [
//         "Consumer Electronics",
//         "IoT & Smart Devices",
//         "Mobile & Wearables",
//         "Networking Equipment",
//         "Home Automation",
//         "Medical Wireless Devices",
//         "Automotive Telematics",
//         "Industrial Wireless Equipment",
//       ],
//     },

//     certMeta: [
//       { label: "Issuing Authority", value: "WPC Wing, DoT" },
//       {
//         label: "Applicable Rule",
//         value: "Indian Wireless Telegraphy Act, 1933",
//       },
//       { label: "Approval Type", value: "Equipment Type Approval (ETA)" },
//       { label: "Validity", value: "Lifetime (One-time)", badge: "green" },
//       { label: "Typical Timeline", value: "4–8 Weeks", badge: "amber" },
//       { label: "RF Testing", value: "Required — SAR & RF Emissions" },
//       { label: "Factory Audit", value: "Not Required" },
//       { label: "Bands Covered", value: "2.4 GHz, 5 GHz, Sub-GHz" },
//     ],

//     stats: [
//       { value: "400+", label: "ETA Approvals" },
//       { value: "99%", label: "Success Rate" },
//       { value: "10+", label: "Years Experience" },
//       { value: "Lifetime", label: "Approval Validity" },
//     ],

//     features: [
//       "Bluetooth/WiFi Compliance",
//       "Import Clearance",
//       "One-time Approval",
//     ],

//     processSteps: [
//       {
//         step: 1,
//         icon: "📋",
//         title: "Device Assessment & Band Identification",
//         description:
//           "We assess your device's wireless technology, frequency bands, and applicable WPC rules to determine the exact ETA category required.",
//       },
//       {
//         step: 2,
//         icon: "🔬",
//         title: "RF Test Report Procurement",
//         description:
//           "We coordinate RF testing at a recognised lab. Valid test reports (SAR, RF emissions, band conformance) are required for ETA submission.",
//       },
//       {
//         step: 3,
//         icon: "📄",
//         title: "Document Preparation",
//         description:
//           "We prepare the complete ETA application package including test reports, technical specifications, and authorisation documents.",
//       },
//       {
//         step: 4,
//         icon: "💻",
//         title: "WPC Online Filing & Scrutiny",
//         description:
//           "Application is filed on the WPC online portal. We manage all portal submissions, respond to scrutiny queries, and track progress.",
//       },
//       {
//         step: 5,
//         icon: "✅",
//         title: "ETA Certificate Issuance",
//         description:
//           "WPC issues the ETA certificate for your device model. This is a lifetime approval — no periodic renewal required.",
//       },
//       {
//         step: 6,
//         icon: "📦",
//         title: "Import & Labelling Compliance",
//         description:
//           "We advise on import documentation requirements and ETA number labelling obligations for your product.",
//       },
//     ],

//     benefits: [
//       {
//         icon: "⚡",
//         title: "One-Time Process",
//         description:
//           "WPC ETA is a lifetime approval for each device model — no annual renewal or surveillance audits required.",
//       },
//       {
//         icon: "🛃",
//         title: "Customs Clearance",
//         description:
//           "WPC ETA is a mandatory customs clearance document for wireless devices imported into India.",
//       },
//       {
//         icon: "📱",
//         title: "Wide Device Coverage",
//         description:
//           "Covers all de-licensed band wireless technologies — Bluetooth, Wi-Fi, Zigbee, Z-Wave, LoRa, and more.",
//       },
//       {
//         icon: "🚀",
//         title: "Fast Processing",
//         description:
//           "WPC ETA can typically be obtained in 4–8 weeks — one of the faster regulatory approvals for electronics.",
//       },
//       {
//         icon: "🌏",
//         title: "Market Access",
//         description:
//           "Without WPC ETA, wireless devices cannot be legally imported, distributed, or sold in India.",
//       },
//       {
//         icon: "🔗",
//         title: "Bundled with BIS CRS",
//         description:
//           "We process WPC ETA alongside BIS CRS registration to streamline your complete India market entry compliance.",
//       },
//     ],

//     documents: [
//       {
//         groupLabel: "Company & Authorisation Documents",
//         items: [
//           "Certificate of Incorporation / Business Registration",
//           "Authorisation Letter from Manufacturer (for importers)",
//           "Importer / Applicant Contact Details",
//           "GST Registration Certificate",
//         ],
//       },
//       {
//         groupLabel: "Technical & Test Documents",
//         items: [
//           "RF Test Report (SAR, RF Emissions, Band Conformance)",
//           "Product Technical Specifications / Datasheet",
//           "Block Diagram & Schematic (if required)",
//           "Frequency Band & Transmission Power Details",
//         ],
//       },
//     ],

//     documentsNote:
//       "RF test reports must be from a recognised lab. Existing international test reports (FCC, CE) may be accepted in some cases. Our team confirms eligibility upfront.",

//     faqs: [
//       {
//         question: "Which devices require WPC ETA approval?",
//         answer:
//           "Any device with wireless functionality operating in de-licensed bands — including Wi-Fi routers, Bluetooth devices, IoT sensors, smart home products, and wireless peripherals.",
//       },
//       {
//         question: "Is WPC ETA a one-time approval?",
//         answer:
//           "Yes — ETA is granted per device model and has lifetime validity. A new approval is needed only if the device model or wireless specifications change materially.",
//       },
//       {
//         question: "Can existing FCC or CE test reports be used for WPC ETA?",
//         answer:
//           "In some cases, valid international test reports are accepted if they cover the required parameters. Our team reviews your existing reports before advising on additional testing needs.",
//       },
//       {
//         question: "Is WPC ETA separate from BIS CRS registration?",
//         answer:
//           "Yes — they are two separate approvals from different authorities. WPC ETA covers RF compliance; BIS CRS covers product safety. Both are typically required for wireless consumer electronics.",
//       },
//       {
//         question: "How long does WPC ETA take?",
//         answer:
//           "Typically 4–8 weeks from complete document submission, depending on WPC processing load and any scrutiny queries raised.",
//       },
//     ],

//     cta: {
//       title: "Get WPC ETA Approval for Your Wireless Device",
//       description:
//         "Our team handles RF test coordination, documentation, and WPC portal filing — get your ETA in 4–8 weeks.",
//       email: "info@eminencecompliance.com",
//       phone: "+91 74285 55852",
//       whatsapp: "917428555852",
//     },
//   },

//   "bee-registration": {
//     id: "bee-registration",
//     category: "BEE / Energy",
//     title: "BEE Star Label Registration",
//     subtitle: "Star Labeling for Energy Efficiency",
//     shortDescription:
//       "Managed by the Bureau of Energy Efficiency, this involves labeling products based on their energy consumption to guide consumers toward efficient choices.",

//     glance: [
//       { label: "Authority", value: "Bureau of Energy Efficiency" },
//       { label: "Timeline", value: "4–10 Weeks", badge: "amber" },
//       { label: "Validity", value: "2–3 Years (Renewable)" },
//       {
//         label: "Mandatory?",
//         value: "Yes — Notified Appliances",
//         badge: "green",
//       },
//       { label: "Star Rating", value: "1–5 Stars" },
//       { label: "Complexity", value: "Moderate", badge: "amber" },
//     ],

//     overview: {
//       paragraphs: [
//         "The Bureau of Energy Efficiency (BEE) Star Label is India's energy efficiency certification for electrical appliances and equipment. Products are rated on a 1–5 star scale based on their energy consumption — 5 stars indicating the highest efficiency. The scheme is mandatory for several appliance categories and voluntary for others.",
//         "BEE star labelling helps consumers make informed purchase decisions, drives manufacturers toward more efficient designs, and contributes to India's national energy conservation goals under the Energy Conservation Act.",
//       ],
//       whyItMatters: [
//         "Mandatory for ACs, refrigerators, washing machines, LED lamps, and more",
//         "5-star rated products command consumer preference and premium pricing",
//         "Required for government procurement in listed appliance categories",
//         "Demonstrates commitment to energy conservation and sustainability",
//         "Non-compliance for mandatory categories attracts BEE penalties",
//       ],
//       industries: [
//         "Air Conditioners & Refrigerators",
//         "Washing Machines & Dishwashers",
//         "LED & CFL Lighting",
//         "Fans & Geysers",
//         "Televisions & Monitors",
//         "Industrial Motors & Pumps",
//         "Distribution Transformers",
//         "Office Equipment",
//       ],
//     },

//     certMeta: [
//       { label: "Applicable Law", value: "Energy Conservation Act, 2001" },
//       { label: "Issuing Body", value: "Bureau of Energy Efficiency (BEE)" },
//       { label: "Rating Scale", value: "1–5 Stars" },
//       {
//         label: "Mandatory Categories",
//         value: "20+ Appliance Types",
//         badge: "green",
//       },
//       { label: "Typical Timeline", value: "4–10 Weeks", badge: "amber" },
//       { label: "Testing Required", value: "Yes — BEE-recognised Lab" },
//       { label: "Renewal", value: "Every 2–3 Years" },
//       { label: "Authority", value: "BEE India, MoPNG" },
//     ],

//     stats: [
//       { value: "250+", label: "BEE Registrations" },
//       { value: "97%", label: "Success Rate" },
//       { value: "10+", label: "Years Experience" },
//       { value: "20+", label: "Appliance Categories" },
//     ],

//     features: [
//       "Energy Savings",
//       "Star Ratings (1-5)",
//       "Consumer Choice Guidance",
//     ],

//     processSteps: [
//       {
//         step: 1,
//         icon: "📋",
//         title: "Appliance Category & Mandatory Status Check",
//         description:
//           "We confirm whether your product falls under mandatory or voluntary BEE labelling and identify the applicable energy performance standard.",
//       },
//       {
//         step: 2,
//         icon: "🔬",
//         title: "Energy Performance Testing",
//         description:
//           "Product samples are tested at a BEE-recognised lab to measure energy consumption (EER/COP/ISEER) against the applicable standard.",
//       },
//       {
//         step: 3,
//         icon: "📄",
//         title: "Model Registration on BEE Portal",
//         description:
//           "We register your product model on the BEE online portal, submit test reports, and obtain a unique model registration number.",
//       },
//       {
//         step: 4,
//         icon: "🏷️",
//         title: "Label Security Fee Payment",
//         description:
//           "A label security fee is paid to BEE based on projected sales volume. This fee is refundable subject to compliance.",
//       },
//       {
//         step: 5,
//         icon: "✅",
//         title: "Star Label Approval & Printing",
//         description:
//           "BEE approves the star rating for your model. You are authorised to print and affix the BEE star label on all units.",
//       },
//       {
//         step: 6,
//         icon: "🔄",
//         title: "Renewal & Rating Update",
//         description:
//           "We manage periodic renewals and advise on product improvements to maintain or improve star ratings as BEE updates efficiency thresholds.",
//       },
//     ],

//     benefits: [
//       {
//         icon: "⭐",
//         title: "Consumer Preference",
//         description:
//           "Higher-rated products are preferred by energy-conscious consumers and institutional buyers.",
//       },
//       {
//         icon: "💰",
//         title: "Premium Pricing",
//         description:
//           "5-star rated appliances command price premiums and stronger retail positioning.",
//       },
//       {
//         icon: "🏛️",
//         title: "Government Procurement",
//         description:
//           "Government agencies mandate minimum BEE star ratings for bulk appliance procurement.",
//       },
//       {
//         icon: "⚖️",
//         title: "Legal Compliance",
//         description:
//           "For mandatory categories, BEE registration is a legal requirement. Non-compliance attracts penalties under the Energy Conservation Act.",
//       },
//       {
//         icon: "🌿",
//         title: "Sustainability Credentials",
//         description:
//           "BEE star ratings support ESG reporting and demonstrate a commitment to India's energy conservation goals.",
//       },
//       {
//         icon: "📈",
//         title: "Market Competitiveness",
//         description:
//           "In voluntary categories, early BEE registration differentiates your products from unrated competitors.",
//       },
//     ],

//     documents: [
//       {
//         groupLabel: "Company & Product Documents",
//         items: [
//           "Certificate of Incorporation / Business Registration",
//           "GST Registration Certificate",
//           "Product Technical Specifications & Model Details",
//           "Brand / Trademark Certificate (if applicable)",
//         ],
//       },
//       {
//         groupLabel: "Testing & Compliance Documents",
//         items: [
//           "Energy Performance Test Report from BEE-recognised Lab",
//           "Product Label Design (as per BEE format)",
//           "Declaration of Conformity",
//           "Previous BEE Registration (for renewals)",
//         ],
//       },
//     ],

//     documentsNote:
//       "BEE registration requirements vary by appliance category. Our team provides a category-specific checklist and guides you through the portal registration process.",

//     faqs: [
//       {
//         question: "Is BEE star labelling mandatory for all appliances?",
//         answer:
//           "No — currently mandatory for 20+ categories including ACs, refrigerators, washing machines, LED lamps, fans, and geysers. Other categories are voluntary but strongly recommended.",
//       },
//       {
//         question: "How is the star rating determined?",
//         answer:
//           "Star ratings are based on energy consumption benchmarks set by BEE for each appliance category. Products are tested in recognised labs and rated on a 1–5 scale based on their measured efficiency.",
//       },
//       {
//         question: "How often must BEE registration be renewed?",
//         answer:
//           "Every 2–3 years, depending on the appliance category. BEE periodically revises efficiency thresholds, which may require re-testing and re-registration.",
//       },
//       {
//         question: "What is the label security fee?",
//         answer:
//           "A refundable fee paid to BEE based on projected annual sales volumes. It is forfeited if BEE finds non-compliance during market surveillance.",
//       },
//       {
//         question: "Can imported appliances get BEE star ratings?",
//         answer:
//           "Yes — importers and foreign manufacturers can register products on the BEE portal and obtain star ratings. Test reports from recognised overseas labs may be accepted in some cases.",
//       },
//     ],

//     cta: {
//       title: "Register for BEE Star Label Today",
//       description:
//         "Our team handles energy performance testing coordination, BEE portal registration, and label compliance — end to end.",
//       email: "info@eminencecompliance.com",
//       phone: "+91 74285 55852",
//       whatsapp: "917428555852",
//     },
//   },

//   "epr-authorization": {
//     id: "epr-authorization",
//     category: "EPR / Waste Management",
//     title: "EPR Authorization",
//     subtitle: "Waste Management Compliance",
//     shortDescription:
//       "Authorization for producers and importers to manage the end-of-life of their products (E-waste, Plastic, Battery).",

//     glance: [
//       { label: "Authority", value: "CPCB / SPCB" },
//       { label: "Timeline", value: "4–8 Weeks", badge: "amber" },
//       { label: "Waste Types", value: "E-waste, Plastic, Battery" },
//       {
//         label: "Mandatory?",
//         value: "Yes — Producers & Importers",
//         badge: "green",
//       },
//       { label: "Target", value: "Annual Recycling %" },
//       { label: "Complexity", value: "Moderate", badge: "amber" },
//     ],

//     overview: {
//       paragraphs: [
//         "Extended Producer Responsibility (EPR) is a mandatory environmental compliance obligation for producers, importers, and brand owners of electronics (E-waste), plastic packaging, and batteries. Under EPR, companies are responsible for collecting and channelling their products for recycling or disposal at the end of their useful life.",
//         "EPR authorisation is obtained from the Central Pollution Control Board (CPCB) or the relevant State Pollution Control Board (SPCB). Companies must meet annual collection and recycling targets, maintain records, and submit quarterly and annual compliance reports.",
//       ],
//       whyItMatters: [
//         "Mandatory for producers, importers, and brand owners of notified products",
//         "Required before importing or selling E-waste, plastic, or battery products in India",
//         "Annual collection and recycling targets must be met to avoid penalties",
//         "CPCB enforcement is increasing with significant fines for non-compliance",
//         "Demonstrates corporate environmental responsibility to stakeholders",
//       ],
//       industries: [
//         "Electronics & IT Equipment Manufacturers",
//         "Consumer Electronics Importers",
//         "Plastic Packaging Producers",
//         "Battery Manufacturers & Importers",
//         "FMCG & Consumer Goods Brands",
//         "Automotive Battery Suppliers",
//         "Solar Panel Manufacturers",
//         "Tyre Producers",
//       ],
//     },

//     certMeta: [
//       {
//         label: "Applicable Rules",
//         value: "E-Waste Rules 2022 / PWM Rules 2022 / Battery Rules 2022",
//       },
//       { label: "Issuing Body", value: "CPCB / SPCB" },
//       { label: "Type", value: "EPR Authorization" },
//       {
//         label: "Annual Targets",
//         value: "Recycling / Collection %",
//         badge: "green",
//       },
//       { label: "Typical Timeline", value: "4–8 Weeks", badge: "amber" },
//       { label: "Quarterly Filing", value: "Required", badge: "green" },
//       { label: "Renewal", value: "Annual" },
//       {
//         label: "Penalty for Non-compliance",
//         value: "Environmental Compensation",
//         badge: "amber",
//       },
//     ],

//     stats: [
//       { value: "150+", label: "EPR Authorizations" },
//       { value: "97%", label: "Success Rate" },
//       { value: "8+", label: "Years Experience" },
//       { value: "3", label: "Waste Categories" },
//     ],

//     features: [
//       "Environmental Responsibility",
//       "CPCB/SPCB Compliance",
//       "Waste Collection Targets",
//     ],

//     processSteps: [
//       {
//         step: 1,
//         icon: "📋",
//         title: "Waste Category & Obligation Assessment",
//         description:
//           "We determine which EPR rules apply to your products (E-waste, plastic, or battery), assess your annual production/import volumes, and calculate applicable targets.",
//       },
//       {
//         step: 2,
//         icon: "💻",
//         title: "CPCB Portal Registration",
//         description:
//           "We register your organisation on the CPCB EPR portal and create the required producer/importer profile.",
//       },
//       {
//         step: 3,
//         icon: "📄",
//         title: "Waste Management Plan Preparation",
//         description:
//           "We prepare your EPR Waste Management Plan, including collection mechanisms, recycler tie-ups, and target commitments.",
//       },
//       {
//         step: 4,
//         icon: "🤝",
//         title: "Recycler / PRO Tie-Up",
//         description:
//           "We connect you with CPCB-registered recyclers or Producer Responsibility Organisations (PROs) to fulfil your collection and recycling targets.",
//       },
//       {
//         step: 5,
//         icon: "✅",
//         title: "EPR Authorization Grant",
//         description:
//           "CPCB issues your EPR authorization certificate. You are now compliant to produce, import, or sell notified products.",
//       },
//       {
//         step: 6,
//         icon: "📊",
//         title: "Quarterly & Annual Compliance Filing",
//         description:
//           "We manage all periodic compliance reports, target fulfilment documentation, and annual EPR authorization renewals.",
//       },
//     ],

//     benefits: [
//       {
//         icon: "⚖️",
//         title: "Legal Compliance",
//         description:
//           "EPR authorization is a legal prerequisite for producing or importing notified product categories in India.",
//       },
//       {
//         icon: "🌿",
//         title: "Environmental Responsibility",
//         description:
//           "Demonstrates corporate commitment to sustainable waste management and circular economy principles.",
//       },
//       {
//         icon: "🛡️",
//         title: "Penalty Avoidance",
//         description:
//           "CPCB imposes environmental compensation for unmet EPR targets. Proactive compliance avoids costly penalties.",
//       },
//       {
//         icon: "📈",
//         title: "ESG & CSR Reporting",
//         description:
//           "EPR compliance strengthens ESG scores and supports mandatory sustainability disclosures for listed companies.",
//       },
//       {
//         icon: "🤝",
//         title: "Recycler Network Access",
//         description:
//           "We connect you with verified CPCB-registered recyclers and PROs across India to fulfil your targets efficiently.",
//       },
//       {
//         icon: "💼",
//         title: "End-to-End Management",
//         description:
//           "We handle authorization, quarterly filings, target tracking, and renewals — freeing your team from regulatory administration.",
//       },
//     ],

//     documents: [
//       {
//         groupLabel: "Company Documents",
//         items: [
//           "Certificate of Incorporation",
//           "GST Registration Certificate",
//           "PAN Card of Company",
//           "Authorised Signatory Details",
//           "List of Products with HSN Codes",
//         ],
//       },
//       {
//         groupLabel: "EPR-Specific Documents",
//         items: [
//           "Annual Production / Import Volume Data",
//           "Waste Management Plan",
//           "Recycler / PRO Agreement (if applicable)",
//           "Previous EPR Authorization (for renewals)",
//           "CPCB Portal Registration Details",
//         ],
//       },
//     ],

//     documentsNote:
//       "EPR requirements vary by waste category (E-waste, plastic, battery). Our team conducts a full obligation assessment and provides a tailored document checklist.",

//     faqs: [
//       {
//         question: "Which companies need EPR authorization?",
//         answer:
//           "Producers, importers, and brand owners of electronics, plastic packaging, batteries, and tyres are required to obtain EPR authorization under the respective waste management rules.",
//       },
//       {
//         question: "What are EPR targets and how are they calculated?",
//         answer:
//           "EPR targets are annual collection and recycling percentages set by CPCB based on the volume of products placed on the market. Targets increase progressively each year.",
//       },
//       {
//         question: "What happens if EPR targets are not met?",
//         answer:
//           "CPCB imposes environmental compensation (a financial penalty) for unmet targets. Repeated non-compliance can lead to authorization cancellation and import/production restrictions.",
//       },
//       {
//         question: "What is a PRO and do we need one?",
//         answer:
//           "A Producer Responsibility Organisation (PRO) is a registered entity that manages collection and recycling on behalf of producers. Using a PRO is one of the most efficient ways to meet EPR targets, especially for smaller producers.",
//       },
//       {
//         question: "Is EPR authorization required for imports?",
//         answer:
//           "Yes — importers of notified product categories (electronics, batteries, plastic packaging) must obtain EPR authorization before their products can clear Indian customs.",
//       },
//     ],

//     cta: {
//       title: "Get Your EPR Authorization Today",
//       description:
//         "Our team handles the complete EPR authorization process — from CPCB registration to recycler tie-ups and quarterly compliance filings.",
//       email: "info@eminencecompliance.com",
//       phone: "+91 74285 55852",
//       whatsapp: "917428555852",
//     },
//   },

//   "legal-metrology-registration": {
//     id: "legal-metrology-registration",
//     category: "Legal Metrology",
//     title: "Legal Metrology (LMPCR)",
//     subtitle: "Packaged Commodity Registration",
//     shortDescription:
//       "Registration under the Legal Metrology (Packaged Commodities) Rules for labelling and weight accuracy.",

//     glance: [
//       {
//         label: "Authority",
//         value: "Dept. of Consumer Affairs / State Controllers",
//       },
//       { label: "Timeline", value: "3–6 Weeks", badge: "amber" },
//       { label: "Validity", value: "Lifetime (usually)" },
//       {
//         label: "Mandatory?",
//         value: "Yes — Imported Packaged Goods",
//         badge: "green",
//       },
//       { label: "Applicability", value: "Importers & Manufacturers" },
//       { label: "Complexity", value: "Low–Moderate", badge: "amber" },
//     ],

//     overview: {
//       paragraphs: [
//         "The Legal Metrology (Packaged Commodities) Rules, 2011 govern the mandatory declarations on packaged products sold in India — including net quantity, MRP, manufacturer details, month/year of manufacture, and country of origin. For importers, an Importer Registration is additionally required from the relevant State Controller of Legal Metrology.",
//         "Non-compliant labels are a common cause of customs hold-ups and market enforcement actions. Eminence Global ensures your product labels are fully compliant before import or retail distribution.",
//       ],
//       whyItMatters: [
//         "Mandatory for all pre-packaged commodities sold in India",
//         "Importer registration required before customs clearance of packaged goods",
//         "Non-compliant labels result in products being held at customs or market seizure",
//         "Protects consumers with standardised and accurate product information",
//         "State-level enforcement teams conduct regular market surveillance",
//       ],
//       industries: [
//         "Food & Beverages",
//         "Personal Care & Cosmetics",
//         "Pharmaceuticals & Nutraceuticals",
//         "Consumer Electronics Accessories",
//         "Household Products",
//         "Toys & Stationery",
//         "Agricultural Products",
//         "Industrial Packaged Goods",
//       ],
//     },

//     certMeta: [
//       { label: "Applicable Rules", value: "Legal Metrology (PC) Rules, 2011" },
//       { label: "Issuing Body", value: "State Controller of Legal Metrology" },
//       {
//         label: "Registration Type",
//         value: "Importer / Manufacturer Registration",
//       },
//       { label: "Validity", value: "Lifetime (usually)" },
//       { label: "Typical Timeline", value: "3–6 Weeks", badge: "amber" },
//       { label: "Label Verification", value: "Required", badge: "green" },
//       { label: "Factory Audit", value: "Not Required" },
//       { label: "Renewal", value: "Not Required (in most states)" },
//     ],

//     stats: [
//       { value: "300+", label: "LMPC Registrations" },
//       { value: "99%", label: "Success Rate" },
//       { value: "10+", label: "Years Experience" },
//       { value: "Pan India", label: "Coverage" },
//     ],

//     features: [
//       "Consumer Protection",
//       "Standardized Packaging",
//       "Mandatory Declarations",
//     ],

//     processSteps: [
//       {
//         step: 1,
//         icon: "📋",
//         title: "Label Compliance Assessment",
//         description:
//           "We review your existing product labels against Legal Metrology (PC) Rules requirements and identify all mandatory declarations that must appear.",
//       },
//       {
//         step: 2,
//         icon: "🏷️",
//         title: "Label Design & Correction",
//         description:
//           "We advise on correcting or designing compliant labels including MRP, net quantity, importer details, country of origin, and manufacturing date format.",
//       },
//       {
//         step: 3,
//         icon: "📄",
//         title: "Importer Registration Application",
//         description:
//           "We prepare and file the importer registration application with the relevant State Controller of Legal Metrology.",
//       },
//       {
//         step: 4,
//         icon: "✅",
//         title: "Label Verification & Registration Grant",
//         description:
//           "The State Controller verifies label compliance and issues the importer registration certificate.",
//       },
//       {
//         step: 5,
//         icon: "📦",
//         title: "Import & Market Compliance",
//         description:
//           "We advise on displaying the registration details on product labels and maintaining compliance with any state-specific requirements.",
//       },
//       {
//         step: 6,
//         icon: "🔄",
//         title: "Ongoing Label Compliance Support",
//         description:
//           "We provide ongoing label compliance support for new SKUs, product reformulations, and price revisions.",
//       },
//     ],

//     benefits: [
//       {
//         icon: "🛃",
//         title: "Customs Clearance",
//         description:
//           "Importer registration and compliant labels are required for packaged goods to clear Indian customs without delays.",
//       },
//       {
//         icon: "⚖️",
//         title: "Legal Compliance",
//         description:
//           "Protects your business from market enforcement actions, product seizures, and penalties under Legal Metrology Act.",
//       },
//       {
//         icon: "🛡️",
//         title: "Consumer Trust",
//         description:
//           "Compliant labels give consumers accurate product information and build brand credibility.",
//       },
//       {
//         icon: "📈",
//         title: "Retail Acceptance",
//         description:
//           "Major retail chains and e-commerce platforms require Legal Metrology-compliant labels before listing products.",
//       },
//       {
//         icon: "⚡",
//         title: "Fast Process",
//         description:
//           "LMPC registration is one of the faster compliance requirements — typically completed in 3–6 weeks.",
//       },
//       {
//         icon: "💰",
//         title: "Lifetime Validity",
//         description:
//           "In most states, importer registration has lifetime validity — a one-time compliance investment.",
//       },
//     ],

//     documents: [
//       {
//         groupLabel: "Company & Identity Documents",
//         items: [
//           "Certificate of Incorporation / Partnership Deed",
//           "GST Registration Certificate",
//           "PAN Card of Company",
//           "Aadhaar / Identity Proof of Authorised Signatory",
//           "Business Address Proof",
//         ],
//       },
//       {
//         groupLabel: "Product & Label Documents",
//         items: [
//           "Product Label Artwork (all sides)",
//           "List of Products with HSN Codes",
//           "Country of Origin Certificate",
//           "Import/Export Code (IEC) Certificate",
//         ],
//       },
//     ],

//     documentsNote:
//       "Requirements vary by state and product category. Our team reviews your labels and provides state-specific guidance before filing.",

//     faqs: [
//       {
//         question:
//           "Is LMPC registration mandatory for all imported packaged goods?",
//         answer:
//           "Yes — all importers of pre-packaged commodities for retail sale in India must obtain importer registration under the Legal Metrology (PC) Rules, 2011.",
//       },
//       {
//         question: "What mandatory declarations must appear on product labels?",
//         answer:
//           "Labels must include: product name, net quantity, MRP (inclusive of all taxes), importer name and address, country of origin, month and year of manufacture/import, and customer care details.",
//       },
//       {
//         question: "Which state should we register in?",
//         answer:
//           "Registration is typically obtained from the State Controller of Legal Metrology in the state where your registered business/warehouse is located.",
//       },
//       {
//         question: "Does LMPC registration need renewal?",
//         answer:
//           "In most states, importer registration has lifetime validity. However, some states require periodic renewal. We advise based on your specific state.",
//       },
//       {
//         question: "What are the penalties for non-compliant labels?",
//         answer:
//           "Penalties include product seizure, fines, and in repeat cases, prosecution under the Legal Metrology Act, 2009. Market surveillance teams conduct regular checks.",
//       },
//     ],

//     cta: {
//       title: "Get Legal Metrology Compliant Today",
//       description:
//         "Our team handles label compliance review, importer registration, and ongoing support — ensuring your products clear customs and retail shelves without issues.",
//       email: "info@eminencecompliance.com",
//       phone: "+91 74285 55852",
//       whatsapp: "917428555852",
//     },
//   },

//   "wmi-code-registration": {
//     id: "wmi-code-registration",
//     category: "Automotive / WMI",
//     title: "WMI Code Registration",
//     subtitle: "Vehicle Manufacturer Identification",
//     shortDescription:
//       "Assignment of a World Manufacturer Identifier code to identify a vehicle manufacturer uniquely on a global scale.",

//     glance: [
//       { label: "Authority", value: "SAE International / BIS India" },
//       { label: "Timeline", value: "6–10 Weeks", badge: "amber" },
//       { label: "Validity", value: "Permanent" },
//       {
//         label: "Mandatory?",
//         value: "Yes — Vehicle Manufacturers",
//         badge: "green",
//       },
//       { label: "Utility", value: "VIN Generation" },
//       { label: "Complexity", value: "Moderate", badge: "amber" },
//     ],

//     overview: {
//       paragraphs: [
//         "A World Manufacturer Identifier (WMI) is the first three characters of a Vehicle Identification Number (VIN). It uniquely identifies the vehicle manufacturer on a global basis and is assigned by SAE International (globally) and BIS (in India). Every vehicle manufactured or assembled in India must carry a VIN with a valid WMI code.",
//         "WMI registration is mandatory for all automobile manufacturers, including two-wheelers, three-wheelers, passenger cars, commercial vehicles, and electric vehicles. Without a registered WMI, vehicles cannot be type-approved by CMVR authorities or registered at RTOs.",
//       ],
//       whyItMatters: [
//         "Mandatory for all vehicle manufacturers in India under CMVR Rules",
//         "Required for vehicle type approval from ARAI/iCAT",
//         "Enables unique VIN generation for every vehicle produced",
//         "Supports vehicle traceability for recalls, safety investigations, and theft tracking",
//         "Prerequisite for vehicle registration at RTOs",
//       ],
//       industries: [
//         "Passenger Car Manufacturers",
//         "Two & Three Wheeler Manufacturers",
//         "Commercial Vehicle Manufacturers",
//         "Electric Vehicle Manufacturers",
//         "Agricultural Equipment Manufacturers",
//         "Construction Vehicle Manufacturers",
//         "Special Purpose Vehicle Manufacturers",
//         "Vehicle Kit Assemblers",
//       ],
//     },

//     certMeta: [
//       { label: "Applicable Standard", value: "ISO 3779 / IS 15571" },
//       {
//         label: "Issuing Body (India)",
//         value: "Bureau of Indian Standards (BIS)",
//       },
//       { label: "Global Body", value: "SAE International" },
//       { label: "Validity", value: "Permanent" },
//       { label: "Typical Timeline", value: "6–10 Weeks", badge: "amber" },
//       { label: "Code Length", value: "3 Characters" },
//       {
//         label: "Applicable Vehicles",
//         value: "All Motor Vehicles",
//         badge: "green",
//       },
//       { label: "Renewal", value: "Not Required" },
//     ],

//     stats: [
//       { value: "100+", label: "WMI Registrations" },
//       { value: "98%", label: "Success Rate" },
//       { value: "8+", label: "Years Experience" },
//       { value: "Permanent", label: "Code Validity" },
//     ],

//     features: ["VIN Generation", "Global Identification", "ISO Compliance"],

//     processSteps: [
//       {
//         step: 1,
//         icon: "📋",
//         title: "Eligibility Assessment & Code Type Determination",
//         description:
//           "We assess your vehicle manufacturing activity, determine the applicable WMI category (Indian or global manufacturer), and prepare the application strategy.",
//       },
//       {
//         step: 2,
//         icon: "📄",
//         title: "Technical Documentation Preparation",
//         description:
//           "We prepare the complete WMI application package including company details, vehicle categories, production volume data, and VIN structure format.",
//       },
//       {
//         step: 3,
//         icon: "🤝",
//         title: "SAE / BIS Coordination",
//         description:
//           "We coordinate with SAE International (for global WMI) or BIS (for India-specific WMI) and submit the formal application.",
//       },
//       {
//         step: 4,
//         icon: "🔍",
//         title: "Application Review & Query Resolution",
//         description:
//           "We manage any technical queries raised during the WMI assignment review and provide clarifications to the issuing authority.",
//       },
//       {
//         step: 5,
//         icon: "✅",
//         title: "WMI Code Assignment",
//         description:
//           "SAE / BIS assigns your unique 3-character WMI code. You are now authorised to generate VINs for all vehicles you manufacture.",
//       },
//       {
//         step: 6,
//         icon: "🚗",
//         title: "VIN Structure Setup & Compliance",
//         description:
//           "We advise on VIN structure design (positions 4–17), stamping requirements, and integration with your production and registration systems.",
//       },
//     ],

//     benefits: [
//       {
//         icon: "🏭",
//         title: "Mandatory Manufacturing Compliance",
//         description:
//           "WMI registration is a legal prerequisite for vehicle type approval and RTO registration in India.",
//       },
//       {
//         icon: "🌏",
//         title: "Global Recognition",
//         description:
//           "A registered WMI is recognised internationally, supporting vehicle exports and global supply chain participation.",
//       },
//       {
//         icon: "🔍",
//         title: "Vehicle Traceability",
//         description:
//           "Unique VINs generated from your WMI enable end-to-end vehicle tracking for recalls, insurance, and theft recovery.",
//       },
//       {
//         icon: "⚖️",
//         title: "Regulatory Compliance",
//         description:
//           "CMVR compliance requires valid WMI codes. Type approval from ARAI/iCAT cannot proceed without a registered WMI.",
//       },
//       {
//         icon: "📈",
//         title: "Brand Identity",
//         description:
//           "Your unique WMI establishes your brand's official identity in the global vehicle identification system.",
//       },
//       {
//         icon: "🔄",
//         title: "Permanent Assignment",
//         description:
//           "Once assigned, your WMI code is permanent and does not require renewal — a one-time compliance investment.",
//       },
//     ],

//     documents: [
//       {
//         groupLabel: "Company & Business Documents",
//         items: [
//           "Certificate of Incorporation",
//           "GST Registration Certificate",
//           "Factory Licence / Industrial Licence",
//           "Authorised Signatory Details & Board Resolution",
//           "Company Profile & Manufacturing Capability Statement",
//         ],
//       },
//       {
//         groupLabel: "Technical & Vehicle Documents",
//         items: [
//           "List of Vehicle Categories / Types to be Manufactured",
//           "Projected Annual Production Volume",
//           "Proposed VIN Structure (positions 4–17)",
//           "CMVR Type Approval Details (if in progress)",
//           "Factory Layout Plan",
//         ],
//       },
//     ],

//     documentsNote:
//       "WMI applications require detailed technical information about your vehicle manufacturing programme. Our consultants conduct a pre-application meeting to gather all necessary details.",

//     faqs: [
//       {
//         question:
//           "Is a WMI code mandatory for all vehicle manufacturers in India?",
//         answer:
//           "Yes — all manufacturers of motor vehicles in India must have a registered WMI to generate valid VINs, which are required for CMVR type approval and RTO registration.",
//       },
//       {
//         question: "What is the difference between a SAE WMI and a BIS WMI?",
//         answer:
//           "SAE International assigns globally unique WMI codes for manufacturers producing more than 500 vehicles per year. BIS assigns India-specific WMIs for smaller manufacturers. We advise on the appropriate route based on your production volumes.",
//       },
//       {
//         question: "How long is a WMI code valid?",
//         answer:
//           "WMI codes are permanently assigned. Once registered, your code does not expire or require renewal.",
//       },
//       {
//         question: "Can a single WMI cover multiple vehicle types?",
//         answer:
//           "Yes — a single WMI covers all vehicle categories manufactured by your company. The vehicle type and other characteristics are encoded in the remaining VIN positions (4–17).",
//       },
//       {
//         question: "Do electric vehicle manufacturers need a WMI?",
//         answer:
//           "Yes — EV manufacturers are subject to the same CMVR requirements as conventional vehicle manufacturers and must have a registered WMI for all vehicle models.",
//       },
//     ],

//     cta: {
//       title: "Register Your WMI Code Today",
//       description:
//         "Our team manages the complete WMI registration process — from SAE/BIS coordination to VIN structure setup — enabling your vehicle manufacturing programme to proceed without delays.",
//       email: "info@eminencecompliance.com",
//       phone: "+91 74285 55852",
//       whatsapp: "917428555852",
//     },
//   },
// };
