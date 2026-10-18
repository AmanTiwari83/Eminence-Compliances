// ---------- Icons ----------
const svgProps = {
  className: "w-8 h-8",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// BIS ISI – shield with check
const IconISI = () => (
  <svg {...svgProps}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

// FMCS – globe (foreign manufacturers)
const IconFMCS = () => (
  <svg {...svgProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.5 2.5 3.5 5.5 3.5 9S14.5 18.5 12 21c-2.5-2.5-3.5-5.5-3.5-9S9.5 5.5 12 3z" />
  </svg>
);

// Hallmark – gem
const IconHallmark = () => (
  <svg {...svgProps}>
    <path d="M6 4h12l3 5-9 11L3 9l3-5z" />
    <path d="M3 9h18" />
    <path d="M9 4l3 5 3-5" />
    <path d="M12 9v11" />
  </svg>
);

// Assaying centre – flask
const IconAssaying = () => (
  <svg {...svgProps}>
    <path d="M9 3h6" />
    <path d="M10 3v6l-5.5 9.5A1.5 1.5 0 0 0 5.8 21h12.4a1.5 1.5 0 0 0 1.3-2.5L14 9V3" />
    <path d="M7.5 15h9" />
  </svg>
);

// CRS – chip (electronics)
const IconCRS = () => (
  <svg {...svgProps}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="10" y="10" width="4" height="4" />
    <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
  </svg>
);

// Eco Mark – leaf
const IconEco = () => (
  <svg {...svgProps}>
    <path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15" />
    <path d="M5 19c3-5 6-8 10-10" />
  </svg>
);

// WPC / ETA – wireless signal
const IconWPC = () => (
  <svg {...svgProps}>
    <path d="M5 12.5a10 10 0 0 1 14 0" />
    <path d="M8.5 16a5 5 0 0 1 7 0" />
    <path d="M2 9a14 14 0 0 1 20 0" />
    <circle cx="12" cy="19" r="1" fill="currentColor" />
  </svg>
);

// BEE – lightning bolt (energy)
const IconBEE = () => (
  <svg {...svgProps}>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
  </svg>
);

// EPR – recycle arrows
const IconEPR = () => (
  <svg {...svgProps}>
    <path d="M21 12a9 9 0 0 0-15.5-6.2L3 8.5" />
    <path d="M3 3v5.5h5.5" />
    <path d="M3 12a9 9 0 0 0 15.5 6.2L21 15.5" />
    <path d="M21 21v-5.5h-5.5" />
  </svg>
);

// Legal Metrology – balance scale
const IconLegalMetrology = () => (
  <svg {...svgProps}>
    <path d="M12 3v18" />
    <path d="M7 21h10" />
    <path d="M5 7h14" />
    <path d="M5 7l-3 7a3 3 0 0 0 6 0L5 7z" />
    <path d="M19 7l-3 7a3 3 0 0 0 6 0l-3-7z" />
  </svg>
);

// WMI Code – vehicle
const IconWMICode = () => (
  <svg {...svgProps}>
    <path d="M5 16v-5l2-5h10l2 5v5" />
    <path d="M3 16h18v3H3z" />
    <path d="M5 11h14" />
    <circle cx="7.5" cy="16" r="1" fill="currentColor" />
    <circle cx="16.5" cy="16" r="1" fill="currentColor" />
  </svg>
);

// Laboratory recognition – microscope
const IconLab = () => (
  <svg {...svgProps}>
    <path d="M6 21h12" />
    <path d="M12 21v-3" />
    <path d="M8 18a6 6 0 0 0 8-8" />
    <rect x="9" y="3" width="4" height="9" rx="1" transform="rotate(-20 11 7.5)" />
    <path d="M6 14h4" />
  </svg>
);

// Scheme X OTR – gear / machinery
const IconSchemeX = () => (
  <svg {...svgProps}>
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="12" r="6.5" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9L7 7M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
  </svg>
);

// Standardization – document with lines
const IconStandard = () => (
  <svg {...svgProps}>
    <path d="M5 4h10l4 4v12H5V4z" />
    <path d="M15 4v4h4" />
    <path d="M8 12h8M8 15h8M8 18h5" />
  </svg>
);

// CDSCO – medical cross
const IconCDSCO = () => (
  <svg {...svgProps}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M12 8v8M8 12h8" />
  </svg>
);

// NOC – document with check
const IconNOC = () => (
  <svg {...svgProps}>
    <path d="M6 3h9l4 4v14H6V3z" />
    <path d="M14 3v5h5" />
    <path d="M9 14l2 2 4-4" />
  </svg>
);

// Steel NOC – I-beam
const IconSteel = () => (
  <svg {...svgProps}>
    <path d="M5 4h14M5 20h14" />
    <path d="M12 4v16" />
    <path d="M7 8h10M7 16h10" />
  </svg>
);

// Chemicals & Fertilizers NOC – beaker with drop
const IconChemical = () => (
  <svg {...svgProps}>
    <path d="M9 3h6" />
    <path d="M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" />
    <path d="M12 13c1 1.5 1.5 2 1.5 3a1.5 1.5 0 0 1-3 0c0-1 .5-1.5 1.5-3z" />
  </svg>
);

// PESO – flame
const IconPESO = () => (
  <svg {...svgProps}>
    <path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z" />
  </svg>
);

// SASO – paper plane (export)
const IconSASO = () => (
  <svg {...svgProps}>
    <path d="M21 3L3 11l7 2 2 7 9-17z" />
    <path d="M10 13L21 3" />
  </svg>
);

// STQC – shield with code
const IconSTQC = () => (
  <svg {...svgProps}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
    <path d="M10 10l-2 2 2 2M14 10l2 2-2 2" />
  </svg>
);

// TEC – telecom tower
const IconTEC = () => (
  <svg {...svgProps}>
    <path d="M12 8v13" />
    <path d="M8 21l4-9 4 9" />
    <path d="M9 14h6" />
    <circle cx="12" cy="6" r="1.5" />
    <path d="M7.5 3.5a6 6 0 0 0 0 5M16.5 3.5a6 6 0 0 1 0 5" />
  </svg>
);

// WMI Certification – weighing instrument
const IconWMICert = () => (
  <svg {...svgProps}>
    <rect x="3" y="14" width="18" height="6" rx="1.5" />
    <path d="M6 14V9a6 6 0 0 1 12 0v5" />
    <path d="M12 9l2-2" />
    <circle cx="12" cy="9" r="0.8" fill="currentColor" />
  </svg>
);

// Fallback
const IconDefault = () => (
  <svg {...svgProps}>
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
    <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
  </svg>
);

// Management Systems – clipboard with check
const IconManagementSystems = () => (
  <svg {...svgProps}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4h6v3H9z" />
    <path d="M9 13l2 2 4-4" />
  </svg>
);

// ---------- Lookup by service id ----------
const serviceIcons = {
  "bis-isi-certification-domestic": IconISI,
  "bis-fmcs-certification": IconFMCS,
  "bis-hallmark-certification": IconHallmark,
  "bis-assaying-centre": IconAssaying,
  "bis-crs-registration": IconCRS,
  "bis-eco-mark": IconEco,
  "wpc-eta-approval": IconWPC,
  "bee-registration": IconBEE,
  "epr-authorization": IconEPR,
  "legal-metrology-registration": IconLegalMetrology,
  "wmi-code-registration": IconWMICode,
  "bis-laboratory-recognition": IconLab,
  "bis-scheme-x-otr": IconSchemeX,
  "bis-standardization-division": IconStandard,
  "cdsco-certification": IconCDSCO,
  "dpiit-noc": IconNOC,
  "meity-noc": IconNOC,
  "chemicals-fertilizers-noc": IconChemical,
  "steel-noc": IconSteel,
  "peso-certification": IconPESO,
  "saso-certification": IconSASO,
  "stqc-certification": IconSTQC,
  "tec-certification": IconTEC,
  "wmi-certification": IconWMICert,
  "bis-management-systems-certification": IconManagementSystems,
};

const getIconForService = (id) => serviceIcons[id] || IconDefault;

// ---------- Data ----------
export const servicesData = [
  {
    id: "bis-isi-certification-domestic",
    title: "BIS ISI Certification for Domestic Manufacturer",
    description: "Certification for industrial products to ensure quality, safety, and reliability with the ISI mark.",
    category: "BIS Services",
    abbr: "ISI",
    icon: getIconForService("bis-isi-certification-domestic"),
    logo: "/images/service-desc/bis.png",
  },
  {
    id: "bis-fmcs-certification",
    title: "BIS FMCS Certification",
    description: "Foreign Manufacturer Certification Scheme for overseas applicants to sell products in India.",
    category: "BIS Services",
    abbr: "FMCS",
    icon: getIconForService("bis-fmcs-certification"),
    logo: "/images/service-desc/fmcs2.png",
  },
  {
    id: "bis-hallmark-certification",
    title: "BIS Hallmark Certification",
    description: "Purity certification for Gold and Silver jewelry to protect consumers from adulteration.",
    category: "BIS Services",
    abbr: "Hallmark",
    icon: getIconForService("bis-hallmark-certification"),
  },
  {
    id: "bis-assaying-centre",
    title: "Assaying & Hallmarking Centre",
    description: "Recognition for centers involved in testing and marking precious metal purity.",
    category: "BIS Services",
    abbr: "Assaying",
    icon: getIconForService("bis-assaying-centre"),
  },
  {
    id: "bis-crs-registration",
    title: "Compulsory Registration (CRS)",
    description: "Mandatory registration for electronics and IT goods to ensure safety standards.",
    category: "BIS Services",
    abbr: "CRS",
    logo: "/images/service-desc/crs.png",
    icon: getIconForService("bis-crs-registration"),
  },
  {
    id: "bis-management-systems-certification",
    title: "BIS Management Systems Certification",
    description: "Certification support for QMS, EMS, FSMS and other management systems under applicable BIS schemes.",
    category: "BIS",
    abbr: "MSCS",
    icon: getIconForService("bis-management-systems-certification"),
  },
  {
    id: "bis-eco-mark",
    title: "BIS Eco Mark Certification",
    description: "Certification for environment-friendly products that meet specific ecological criteria.",
    category: "BIS Services",
    abbr: "Eco Mark",
    icon: getIconForService("bis-eco-mark"),
  },
  {
    id: "wpc-eta-approval",
    title: "WPC ETA Approval",
    description: "Mandatory approval for wireless and Bluetooth equipment imported or sold in India.",
    category: "Wireless",
    abbr: "ETA",
    icon: getIconForService("wpc-eta-approval"),
  },
  {
    id: "bee-registration",
    title: "BEE Registration",
    description: "Energy efficiency labeling for appliances to help consumers save on energy costs.",
    category: "Energy",
    abbr: "BEE",
    logo: "/images/service-desc/bee.png",
    icon: getIconForService("bee-registration"),
  },
  {
    id: "epr-authorization",
    title: "EPR Authorization",
    description: "Extended Producer Responsibility for managing waste from electronics, plastic, and batteries.",
    category: "Environment",
    abbr: "EPR",
    icon: getIconForService("epr-authorization"),
  },
  {
    id: "legal-metrology-registration",
    title: "Legal Metrology (LMPCR)",
    description: "Packaged commodity registration for compliance with weight and measurement laws.",
    category: "Legal",
    abbr: "LMPCR",
    icon: getIconForService("legal-metrology-registration"),
  },
  {
    id: "wmi-code-registration",
    title: "WMI Code Registration",
    description: "World Manufacturer Identifier registration for vehicle manufacturers to assign VINs.",
    category: "Automotive",
    abbr: "WMI",
    icon: getIconForService("wmi-code-registration"),
  },

  // New Services
  {
    id: "bis-laboratory-recognition",
    title: "BIS Laboratory Recognition (LRS)",
    description: "BIS recognition for in-house and third-party labs to test products as per Indian Standards.",
    category: "BIS",
    icon: getIconForService("bis-laboratory-recognition"),
  },
  {
    id: "bis-scheme-x-otr",
    title: "BIS Scheme X – OTR",
    description: "Mandatory certification for notified products under the Omnibus Technical Regulation.",
    category: "BIS",
    icon: getIconForService("bis-scheme-x-otr"),
  },
  {
    id: "bis-standardization-division",
    title: "BIS Standardization (Scientific) Division",
    description: "Support to propose, develop, revise and comment on Indian Standards.",
    category: "BIS",
    icon: getIconForService("bis-standardization-division"),
  },
  {
    id: "cdsco-certification",
    title: "CDSCO Certification",
    description: "Approval to manufacture, import or market medical devices, drugs, diagnostics and cosmetics in India.",
    category: "Healthcare",
    icon: getIconForService("cdsco-certification"),
  },
  {
    id: "dpiit-noc",
    title: "NOC from DPIIT",
    description: "No Objection Certificate for the lawful import of products that are not BIS certified.",
    category: "NOC",
    icon: getIconForService("dpiit-noc"),
  },
  {
    id: "meity-noc",
    title: "NOC from MeitY",
    description: "Official clarification that your electronics product is outside BIS CRS, for smooth customs clearance.",
    category: "NOC",
    icon: getIconForService("meity-noc"),
  },
  {
    id: "chemicals-fertilizers-noc",
    title: "NOC from Ministry of Chemicals & Fertilizers",
    description: "NOC for importing regulated chemicals and fertilizers and for chemical-related project approvals.",
    category: "NOC",
    icon: getIconForService("chemicals-fertilizers-noc"),
  },
  {
    id: "steel-noc",
    title: "NOC from Ministry of Steel",
    description: "NOC for the import and use of regulated steel products under Quality Control Orders.",
    category: "NOC",
    icon: getIconForService("steel-noc"),
  },
  {
    id: "peso-certification",
    title: "PESO Certification",
    description: "Safety approval for petroleum, explosives, compressed gas and hazardous substance equipment.",
    category: "Safety",
    icon: getIconForService("peso-certification"),
  },
  {
    id: "saso-certification",
    title: "SASO Certification",
    description: "Product and shipment certificates (PCoC and SCoC) for exporting to Saudi Arabia.",
    category: "International",
    icon: getIconForService("saso-certification"),
  },
  {
    id: "stqc-certification",
    title: "STQC Certification",
    description: "Quality and security certification for IT products and e-Governance solutions, for government tenders.",
    category: "IT & Telecom",
    icon: getIconForService("stqc-certification"),
  },
  {
    id: "tec-certification",
    title: "TEC Certification",
    description: "Mandatory MTCTE certification for telecom and ICT equipment sold or imported in India.",
    category: "IT & Telecom",
    icon: getIconForService("tec-certification"),
  },
  {
    id: "wmi-certification",
    title: "WMI Certification (Legal Metrology)",
    description: "Model approval for weighing and measuring instruments under the Legal Metrology Act, 2009.",
    category: "Legal",
    icon: getIconForService("wmi-certification"),
  },
];