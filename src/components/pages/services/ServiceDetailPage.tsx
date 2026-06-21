"use client";

import { useState } from "react";
import { BiCheckCircle, BiChevronDown, BiHome, BiMailSend } from "react-icons/bi";
import { BsArrowRight, BsChevronBarRight, BsMailbox } from "react-icons/bs";
import {
  FaPhone,
  FaChevronRight,
  FaBuilding,
} from "react-icons/fa";
import { FiAlertCircle, FiFileText, FiMessageCircle } from "react-icons/fi";

// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────
interface GlanceItem {
  label: string;
  value: string;
  badge?: "amber" | "green";
}

interface MetaRow {
  label: string;
  value: string;
  badge?: "green" | "amber";
}

interface ProcessStep {
  step: number;
  icon: string;
  title: string;
  description: string;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface DocGroup {
  groupLabel: string;
  items: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  glance: GlanceItem[];
  overview: {
    paragraphs: string[];
    whyItMatters: string[];
    industries: string[];
  };
  certMeta: MetaRow[];
  stats: { value: string; label: string }[];
  processSteps: ProcessStep[];
  benefits: Benefit[];
  documents: DocGroup[];
  documentsNote: string;
  faqs: FAQ[];
  cta: {
    title: string;
    description: string;
    email: string;
    phone: string;
    whatsapp: string;
  };
}

// ─────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-[11px] font-bold tracking-[0.15em] uppercase text-[#c9a94e] mb-2">
      {children}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────
function Hero({ service }: { service: ServiceDetail }) {
  return (
    <section className="relative bg-[#0d1f3c] overflow-hidden pt-16 pb-20">
      <div className="pointer-events-none absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full border border-[#c9a94e]/10" />
      <div className="pointer-events-none absolute -top-12 right-12 w-[240px] h-[240px] rounded-full border border-[#c9a94e]/7" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #c9a94e 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage: "radial-gradient(ellipse 60% 100% at 80% 50%, black 10%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 100% at 80% 50%, black 10%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[11.5px] text-white/40 mb-7">
          <BiHome size={11} />
          <a href="/" className="hover:text-[#c9a94e] transition-colors">Home</a>
          <FaChevronRight size={11} className="text-white/20" />
          <a href="/services" className="hover:text-[#c9a94e] transition-colors">Services</a>
          <BsChevronBarRight size={11} className="text-white/20" />
          <span className="text-white/60">{service.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_290px] gap-10 items-start">
          {/* Left */}
          <div>
            <span className="inline-block text-[10.5px] font-bold tracking-[0.15em] uppercase text-[#c9a94e] border border-[#c9a94e]/30 bg-[#c9a94e]/12 px-3.5 py-1.5 rounded-full mb-5">
              {service.category}
            </span>
            <h1
              className="font-serif text-white font-bold text-4xl md:text-[46px] leading-[1.15] mb-3"
            >
              {service.title}
            </h1>
            {service.subtitle && (
              <p className="text-[#c9a94e]/70 text-[15px] font-semibold tracking-wide mb-2">
                {service.subtitle}
              </p>
            )}
            <div className="w-10 h-[3px] bg-gradient-to-r from-[#c9a94e] to-transparent rounded mb-5" />
            <p className="text-white/60 text-[15.5px] leading-[1.8] max-w-[520px] mb-8">
              {service.shortDescription}
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 bg-[#c9a94e] hover:bg-[#d4b660] text-[#0d1f3c] font-bold text-[13px] px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-[#c9a94e]/25"
              >
                <BsArrowRight size={14} />
                Get Free Consultation
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white border border-white/20 hover:border-white/40 text-[13px] font-semibold px-6 py-3.5 rounded-full transition-all"
              >
                View Process
              </a>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/35 text-[12px]">Experts available now</span>
            </div>
          </div>

          {/* Right: glance card */}
          <div className="bg-white/6 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <p className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#c9a94e] pb-3 mb-2 border-b border-white/8">
              At a Glance
            </p>
            {service.glance.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0 last:pb-0 gap-3"
              >
                <span className="text-white/40 text-[12px]">{row.label}</span>
                {row.badge ? (
                  <span
                    className={`text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full ${
                      row.badge === "green"
                        ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25"
                        : "bg-[#c9a94e]/15 text-[#c9a94e] border border-[#c9a94e]/25"
                    }`}
                  >
                    {row.value}
                  </span>
                ) : (
                  <span className="text-white text-[12.5px] font-semibold text-right">{row.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// TRUST BAR
// ─────────────────────────────────────────────────────────────
function TrustBar({ service }: { service: ServiceDetail }) {
  const items = service.stats.map((s) => ({ icon: "✅", text: `${s.value} ${s.label}` }));
  return (
    <div className="bg-[#f8f9fb] border-b border-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-center flex-wrap gap-x-8 gap-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-[12.5px] font-semibold text-gray-600">
            <span>{item.icon}</span>
            {item.text}
            {i < items.length - 1 && <span className="hidden sm:block ml-8 w-px h-4 bg-gray-200" />}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// OVERVIEW
// ─────────────────────────────────────────────────────────────
function Overview({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">

          {/* Left */}
          <div>
            <SectionLabel>Service Overview</SectionLabel>
            <h2 className="font-serif text-[#0d1f3c] text-3xl md:text-4xl font-semibold mb-6">
              What is {service.title}?
            </h2>
            {service.overview.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-900 text-[15px] leading-[1.85] mb-4">{p}</p>
            ))}

            <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#0d1f3c] mt-7 mb-4">
              Why this certification matters
            </p>
            <ul className="space-y-3">
              {service.overview.whyItMatters.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-gray-900 leading-relaxed">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#faf5e8] border border-[#e8d49a] flex items-center justify-center flex-shrink-0">
                    <BiCheckCircle size={11} className="text-[#c9a94e]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-400 mt-8 mb-3">
              Applicable Industries
            </p>
            <div className="flex flex-wrap gap-2">
              {service.overview.industries.map((ind) => (
                <span
                  key={ind}
                  className="text-[12px] font-semibold text-gray-600 bg-[#f8f9fb] border border-gray-200 px-3.5 py-1.5 rounded-full hover:border-[#e8d49a] hover:text-[#0d1f3c] hover:bg-[#faf5e8] transition-all cursor-default"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Right: sticky cert card */}
          <div className="lg:sticky lg:top-24 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
              <div className="bg-[#0d1f3c] px-6 py-4">
                <p className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#c9a94e]">
                  Certification Details
                </p>
              </div>
              <div className="divide-y divide-gray-100 bg-white">
                {service.certMeta.map((row) => (
                  <div key={row.label} className="flex items-center justify-between px-6 py-3 gap-3">
                    <span className="text-[12px] text-gray-400">{row.label}</span>
                    {row.badge ? (
                      <span
                        className={`text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full ${
                          row.badge === "green"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-[#faf5e8] text-[#7a5c10] border border-[#e8d49a]"
                        }`}
                      >
                        {row.value}
                      </span>
                    ) : (
                      <span className="text-[13px] font-semibold text-[#0d1f3c]">{row.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats card */}
            <div className="bg-[#faf5e8] border border-[#e8d49a] rounded-2xl p-5">
              <p className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#c9a94e] mb-4">
                Our Track Record
              </p>
              <div className="grid grid-cols-2 gap-3">
                {service.stats.map((s) => (
                  <div key={s.label} className="text-center py-2">
                    <p className="font-serif text-[28px] font-bold text-[#0d1f3c] leading-none">{s.value}</p>
                    <p className="text-[11px] text-gray-400 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// PROCESS
// ─────────────────────────────────────────────────────────────
function Process({ service }: { service: ServiceDetail }) {
  return (
    <section id="process" className="relative py-20 bg-[#0d1f3c] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(201,169,78,0.07)_0%,transparent_70%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="text-center mb-14">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-serif text-white text-3xl md:text-4xl font-semibold mb-3">
            Our Step-by-Step Process
          </h2>
          <p className="text-white/50 text-[15px] max-w-[440px] mx-auto">
            A structured, transparent journey from your first enquiry to receiving your {service.category} approval.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
          {service.processSteps.map((step, i) => {
            const isLast = i === service.processSteps.length - 1;
            const isLastInCol = i % 2 === 1;
            return (
              <div key={step.step} className="flex gap-0 items-stretch">
                <div className="flex flex-col items-center mr-5">
                  <div className="w-11 h-11 rounded-full border-2 border-[#c9a94e] bg-[#c9a94e]/12 flex items-center justify-center flex-shrink-0 z-10">
                    <span className="font-serif text-[#c9a94e] text-[16px] font-bold">
                      {String(step.step).padStart(2, "0")}
                    </span>
                  </div>
                  {!isLast && !isLastInCol && (
                    <div className="w-px flex-1 bg-gradient-to-b from-[#c9a94e]/25 to-[#c9a94e]/05 mt-1 mb-1 min-h-[20px]" />
                  )}
                </div>
                <div className={`pb-10 flex-1 ${isLast ? "pb-0" : ""}`}>
                  <div className="w-8 h-8 rounded-lg bg-[#c9a94e]/10 border border-[#c9a94e]/20 flex items-center justify-center text-sm mb-2.5">
                    {step.icon}
                  </div>
                  <p className="text-white font-semibold text-[15.5px] mb-1.5">{step.title}</p>
                  <p className="text-white/55 text-[14px] leading-[1.75]">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// BENEFITS
// ─────────────────────────────────────────────────────────────
function Benefits({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <SectionLabel>Why It Matters</SectionLabel>
          <h2 className="font-serif text-[#0d1f3c] text-3xl md:text-4xl font-semibold mb-3">
            Key Benefits of {service.title}
          </h2>
          <p className="text-gray-600 text-[15px] max-w-[440px] mx-auto">
            More than a legal requirement — it&apos;s your commercial passport to the Indian market.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {service.benefits.map((b) => (
            <div
              key={b.title}
              className="group relative bg-white border border-gray-200 rounded-2xl p-7 hover:border-[#e8d49a] hover:shadow-lg hover:shadow-[#0d1f3c]/8 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c9a94e] to-[#e8d49a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              <div className="absolute top-0 right-0 w-14 h-14 bg-gradient-to-bl from-[#c9a94e]/6 to-transparent rounded-bl-3xl group-hover:from-[#c9a94e]/12 transition-all duration-300" />
              <div className="w-11 h-11 rounded-xl bg-[#faf5e8] border border-[#e8d49a] flex items-center justify-center text-xl mb-5">
                {b.icon}
              </div>
              <h3 className="text-[16px] font-semibold text-[#0d1f3c] mb-2">{b.title}</h3>
              <p className="text-[14px] text-gray-900 leading-[1.7]">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// DOCUMENTS
// ─────────────────────────────────────────────────────────────
function Documents({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-16 bg-[#f8f9fb] border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-11">
          <SectionLabel>Preparation Checklist</SectionLabel>
          <h2 className="font-serif text-[#0d1f3c] text-3xl md:text-4xl font-semibold mb-3">
            Documents Required
          </h2>
          <p className="text-gray-600 text-[14px] max-w-[400px] mx-auto">
            Gather these before your application. Our team will review and complete any gaps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {service.documents.map((group) => (
            <div key={group.groupLabel}>
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-400 mb-3">
                {group.groupLabel}
              </p>
              <div className="space-y-2.5">
                {group.items.map((doc) => (
                  <div
                    key={doc}
                    className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 text-[13px] font-semibold text-[#0d1f3c] hover:border-[#e8d49a] hover:bg-[#faf5e8] transition-all group"
                  >
                    <FiFileText size={14} className="text-gray-300 group-hover:text-[#c9a94e] transition-colors flex-shrink-0" />
                    <span className="flex-1">{doc}</span>
                    <span className="w-4 h-4 rounded-full bg-[#faf5e8] border border-[#e8d49a] flex items-center justify-center flex-shrink-0">
                      <BiCheckCircle size={9} className="text-[#c9a94e]" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-[#e8d49a] border-l-[3px] rounded-r-xl px-5 py-4 text-[14px] text-gray-900 flex gap-3 items-start">
          <FiAlertCircle size={15} className="text-[#c9a94e] flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#0d1f3c] font-semibold">Note: </strong>
            {service.documentsNote}
          </p>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────
function FAQ({ service }: { service: ServiceDetail }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="font-serif text-[#0d1f3c] text-3xl md:text-4xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-[14.5px] leading-relaxed mb-7">
              Can&apos;t find what you&apos;re looking for? Our experts are happy to answer.
            </p>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-[#0d1f3c] text-white text-[13px] font-semibold px-5 py-3 rounded-full hover:bg-[#162d52] transition-colors"
            >
              <FiMessageCircle size={14} />
              Ask Our Experts
            </a>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                    isOpen ? "border-[#e8d49a] shadow-md shadow-[#c9a94e]/8" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-[#f8f9fb] transition-colors"
                  >
                    <span className={`font-semibold text-[14.5px] leading-snug ${isOpen ? "text-[#c9a94e]" : "text-[#0d1f3c]"}`}>
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        isOpen ? "bg-[#faf5e8] text-[#c9a94e] rotate-180" : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <BiChevronDown size={14} />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-5">
                      <div className="h-px bg-gray-100 mb-3.5" />
                      <p className="text-[14px] text-gray-900 leading-[1.8]">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CTA
// ─────────────────────────────────────────────────────────────
function CTA({ service }: { service: ServiceDetail }) {
  return (
    <section id="cta" className="relative py-20 bg-[#0d1f3c] overflow-hidden text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,169,78,0.08)_0%,transparent_70%)]" />
      <div className="relative z-10 max-w-2xl mx-auto px-5">
        <SectionLabel>Start Today</SectionLabel>
        <h2 className="font-serif text-white text-3xl md:text-[40px] font-bold mb-4 leading-tight">
          {service.cta.title}
        </h2>
        <p className="text-white/55 text-[15.5px] mb-10 leading-relaxed">{service.cta.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: <BiMailSend size={18} />, label: "Email Us", value: service.cta.email, href: `mailto:${service.cta.email}` },
            { icon: <FaPhone size={18} />, label: "Call Us", value: service.cta.phone, href: `tel:${service.cta.phone}` },
            {
              icon: <FiMessageCircle size={18} />,
              label: "WhatsApp",
              value: "Chat Now",
              href: `https://wa.me/${service.cta.whatsapp}`,
              highlight: true,
            },
          ].map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className={`flex flex-col items-center py-5 px-4 rounded-2xl border transition-all hover:-translate-y-1 group ${
                c.highlight
                  ? "border-[#c9a94e]/30 bg-[#c9a94e]/8 hover:bg-[#c9a94e]/14 hover:border-[#c9a94e]/50"
                  : "border-white/8 bg-white/5 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              <div className={`mb-3 ${c.highlight ? "text-[#c9a94e]" : "text-white/50 group-hover:text-white/80"} transition-colors`}>
                {c.icon}
              </div>
              <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/35 mb-1">{c.label}</p>
              <p className={`text-[13px] font-semibold break-all ${c.highlight ? "text-[#c9a94e]" : "text-white"}`}>
                {c.value}
              </p>
            </a>
          ))}
        </div>

        <a
          href={`mailto:${service.cta.email}`}
          className="inline-flex items-center gap-2.5 bg-[#c9a94e] hover:bg-[#d4b660] text-[#0d1f3c] font-bold text-[14.5px] px-10 py-4 rounded-full shadow-xl shadow-[#c9a94e]/20 hover:shadow-[#c9a94e]/35 transition-all hover:-translate-y-0.5 group"
        >
          Schedule Free Consultation
          <BsArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="text-white text-[12px] mt-4">No commitment required · Free initial assessment</p>

        <div className="flex justify-center gap-7 flex-wrap mt-9 pt-8 border-t border-white/8">
          {["Free Initial Consultation", "500+ Certifications Completed", "North-East Delhi, India"].map((t) => (
            <div key={t} className="flex items-center gap-2 text-[12px] text-white/45">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a94e]" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// PAGE ROOT
// ─────────────────────────────────────────────────────────────
export default function ServiceDetailPage({ service }: { service: ServiceDetail }) {
  return (
    <div className="min-h-screen bg-white antialiased">
      <main>
        <Hero service={service} />
        <TrustBar service={service} />
        <Overview service={service} />
        <Process service={service} />
        <Benefits service={service} />
        <Documents service={service} />
        <FAQ service={service} />
        <CTA service={service} />
      </main>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${service.cta.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-13 h-13 bg-[#22c55e] hover:bg-[#16a34a] rounded-full flex items-center justify-center text-white shadow-xl shadow-green-500/30 hover:scale-110 transition-all"
        aria-label="WhatsApp"
      >
        <FiMessageCircle size={24} fill="white" />
      </a>
    </div>
  );
}
