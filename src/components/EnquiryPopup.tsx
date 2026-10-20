"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

/* ------------------------------------------------------------------
   Theme (from your logo / banner): navy + gold.
   To re-theme, search & replace in this file:
     #0b2a5b / #071a3f (navy)     #c8a24a (gold)
------------------------------------------------------------------- */

type Country = {
  iso: string;
  name: string;
  code: string; // dial code
  min: number; // min digits (without leading 0 / dial code)
  max: number; // max digits
  pattern?: RegExp; // optional extra rule on the digits
  hint: string; // shown under the field
};

const COUNTRIES: Country[] = [
  { iso: "IN", name: "India", code: "+91", min: 10, max: 10, pattern: /^[6-9]\d{9}$/, hint: "10 digits, starting with 6, 7, 8 or 9" },
  { iso: "US", name: "USA", code: "+1", min: 10, max: 10, pattern: /^[2-9]\d{9}$/, hint: "10 digits (area code + number)" },
  { iso: "CA", name: "Canada", code: "+1", min: 10, max: 10, pattern: /^[2-9]\d{9}$/, hint: "10 digits (area code + number)" },
  { iso: "GB", name: "UK", code: "+44", min: 10, max: 10, pattern: /^7\d{9}$/, hint: "10 digits, starting with 7 (without the 0)" },
  { iso: "AE", name: "UAE", code: "+971", min: 9, max: 9, pattern: /^5\d{8}$/, hint: "9 digits, starting with 5" },
  { iso: "SA", name: "Saudi Arabia", code: "+966", min: 9, max: 9, pattern: /^5\d{8}$/, hint: "9 digits, starting with 5" },
  { iso: "QA", name: "Qatar", code: "+974", min: 8, max: 8, pattern: /^[3567]\d{7}$/, hint: "8 digits" },
  { iso: "KW", name: "Kuwait", code: "+965", min: 8, max: 8, pattern: /^[569]\d{7}$/, hint: "8 digits" },
  { iso: "OM", name: "Oman", code: "+968", min: 8, max: 8, pattern: /^[79]\d{7}$/, hint: "8 digits" },
  { iso: "BH", name: "Bahrain", code: "+973", min: 8, max: 8, pattern: /^[36]\d{7}$/, hint: "8 digits" },
  { iso: "AU", name: "Australia", code: "+61", min: 9, max: 9, pattern: /^4\d{8}$/, hint: "9 digits, starting with 4" },
  { iso: "NZ", name: "New Zealand", code: "+64", min: 8, max: 10, pattern: /^2\d{7,9}$/, hint: "8–10 digits, starting with 2" },
  { iso: "SG", name: "Singapore", code: "+65", min: 8, max: 8, pattern: /^[89]\d{7}$/, hint: "8 digits, starting with 8 or 9" },
  { iso: "MY", name: "Malaysia", code: "+60", min: 9, max: 10, pattern: /^1\d{8,9}$/, hint: "9–10 digits, starting with 1" },
  { iso: "ID", name: "Indonesia", code: "+62", min: 9, max: 12, pattern: /^8\d{8,11}$/, hint: "9–12 digits, starting with 8" },
  { iso: "PH", name: "Philippines", code: "+63", min: 10, max: 10, pattern: /^9\d{9}$/, hint: "10 digits, starting with 9" },
  { iso: "TH", name: "Thailand", code: "+66", min: 9, max: 9, pattern: /^[689]\d{8}$/, hint: "9 digits" },
  { iso: "HK", name: "Hong Kong", code: "+852", min: 8, max: 8, pattern: /^[5-9]\d{7}$/, hint: "8 digits" },
  { iso: "CN", name: "China", code: "+86", min: 11, max: 11, pattern: /^1[3-9]\d{9}$/, hint: "11 digits, starting with 1" },
  { iso: "JP", name: "Japan", code: "+81", min: 10, max: 10, pattern: /^[7-9]0\d{8}$/, hint: "10 digits (without the 0), e.g. 90xxxxxxxx" },
  { iso: "PK", name: "Pakistan", code: "+92", min: 10, max: 10, pattern: /^3\d{9}$/, hint: "10 digits, starting with 3" },
  { iso: "BD", name: "Bangladesh", code: "+880", min: 10, max: 10, pattern: /^1[3-9]\d{8}$/, hint: "10 digits, starting with 1" },
  { iso: "NP", name: "Nepal", code: "+977", min: 10, max: 10, pattern: /^9[78]\d{8}$/, hint: "10 digits, starting with 97 or 98" },
  { iso: "LK", name: "Sri Lanka", code: "+94", min: 9, max: 9, pattern: /^7\d{8}$/, hint: "9 digits, starting with 7" },
  { iso: "DE", name: "Germany", code: "+49", min: 10, max: 11, pattern: /^1\d{9,10}$/, hint: "10–11 digits, starting with 1" },
  { iso: "FR", name: "France", code: "+33", min: 9, max: 9, pattern: /^[67]\d{8}$/, hint: "9 digits, starting with 6 or 7" },
  { iso: "IT", name: "Italy", code: "+39", min: 9, max: 10, pattern: /^3\d{8,9}$/, hint: "9–10 digits, starting with 3" },
  { iso: "ES", name: "Spain", code: "+34", min: 9, max: 9, pattern: /^[67]\d{8}$/, hint: "9 digits, starting with 6 or 7" },
  { iso: "RU", name: "Russia", code: "+7", min: 10, max: 10, pattern: /^9\d{9}$/, hint: "10 digits, starting with 9" },
  { iso: "TR", name: "Turkey", code: "+90", min: 10, max: 10, pattern: /^5\d{9}$/, hint: "10 digits, starting with 5" },
  { iso: "EG", name: "Egypt", code: "+20", min: 10, max: 10, pattern: /^1\d{9}$/, hint: "10 digits, starting with 1" },
  { iso: "ZA", name: "South Africa", code: "+27", min: 9, max: 9, pattern: /^[6-8]\d{8}$/, hint: "9 digits" },
  { iso: "NG", name: "Nigeria", code: "+234", min: 10, max: 10, pattern: /^[789]\d{9}$/, hint: "10 digits, starting with 7, 8 or 9" },
  { iso: "KE", name: "Kenya", code: "+254", min: 9, max: 9, pattern: /^[17]\d{8}$/, hint: "9 digits, starting with 1 or 7" },
  { iso: "BR", name: "Brazil", code: "+55", min: 10, max: 11, hint: "10–11 digits (area code + number)" },
];

const DEFAULT_ISO = "IN";
const SESSION_KEY = "enquiry_popup_seen";

const getCountry = (iso: string) =>
  COUNTRIES.find((c) => c.iso === iso) || COUNTRIES[0];

/** Clean what the user typed: digits only, no leading 0, no pasted dial code */
const cleanPhone = (raw: string, country: Country) => {
  let digits = raw.replace(/\D/g, "");
  const dial = country.code.slice(1);
  if (raw.trim().startsWith("+") && digits.startsWith(dial)) {
    digits = digits.slice(dial.length);
  }
  digits = digits.replace(/^0+/, "");
  return digits.slice(0, country.max);
};

/** Returns an error message, or "" if valid */
const validatePhone = (digits: string, country: Country) => {
  if (!digits) return "Mobile number is required.";
  if (digits.length < country.min || digits.length > country.max) {
    return `Enter a valid ${country.name} mobile number: ${country.hint}.`;
  }
  if (country.pattern && !country.pattern.test(digits)) {
    return `Enter a valid ${country.name} mobile number: ${country.hint}.`;
  }
  return "";
};

// shared field style (no width here – each field sets its own)
const field =
  "rounded-lg border bg-white px-4 py-3 text-sm text-slate-800 " +
  "placeholder-slate-400 outline-none transition " +
  "focus:ring-2";
const fieldOk = "border-slate-200 focus:border-[#0b2a5b] focus:ring-[#c8a24a]/40";
const fieldBad = "border-red-400 focus:border-red-500 focus:ring-red-200";

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [iso, setIso] = useState(DEFAULT_ISO);
  const [phoneError, setPhoneError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const phoneRef = useRef<HTMLInputElement>(null);

  const country = getCountry(iso);

  // open once per browser session, shortly after load
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const t = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(t);
  }, []);

  // lock page scroll + close on Esc
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const close = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setOpen(false);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = getCountry(e.target.value);
    setIso(next.iso);
    // re-trim the number to the new country's limit and re-check it
    const digits = cleanPhone(form.phone, next);
    setForm((f) => ({ ...f, phone: digits }));
    setPhoneError(digits ? validatePhone(digits, next) : "");
  };

  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = cleanPhone(e.target.value, country);
    setForm((f) => ({ ...f, phone: digits }));
    if (phoneError) setPhoneError(validatePhone(digits, country));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    const err = validatePhone(form.phone, country);
    if (err) {
      setPhoneError(err);
      phoneRef.current?.focus();
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: `${country.code} ${form.phone}`,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      toast.success("Thank you! We'll get back to you shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setIso(DEFAULT_ISO);
      setPhoneError("");
      close();
    } catch (err: any) {
      toast.error(err.message || "Failed to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#061633]/80 p-3 backdrop-blur-sm sm:p-6"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Enquiry form"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-[94vh] w-full max-w-md overflow-y-auto overflow-x-hidden rounded-2xl bg-white shadow-2xl sm:max-w-xl lg:max-w-[1100px] lg:grid-cols-[1.5fr_1fr]"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg leading-none text-[#0b2a5b] shadow-md ring-1 ring-slate-200 transition hover:bg-[#c8a24a] hover:text-white"
        >
          ✕
        </button>

        {/* ---------- LEFT: your banner (large screens only) ---------- */}
        <div className="relative hidden lg:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home/enquiry-banner.png"
            alt="Eminence Global Compliance Group - Your Partner in Global Quality Compliance"
            className="block h-full w-full object-cover object-left"
          />
        </div>

        {/* ---------- Mobile / tablet brand bar ---------- */}
        <div className="border-b-4 border-[#c8a24a] bg-[#0b2a5b] px-6 py-4 pr-14 text-white lg:hidden">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#c8a24a]">
            Eminence Global Compliance Group
          </p>
          <p className="mt-1 text-sm">
            Your Partner in <span className="font-semibold text-[#c8a24a]">Quality.</span>{" "}
            Your Path to <span className="font-semibold text-[#c8a24a]">Trust.</span>
          </p>
        </div>

        {/* ---------- RIGHT: form ---------- */}
        <div className="flex min-w-0 flex-col justify-center p-6 sm:p-8">
          <h2
            className="text-2xl text-[#0b2a5b] sm:text-3xl lg:pr-8 lg:text-2xl"
            style={{ fontWeight: 700, lineHeight: 1.2 }}
          >
            Send us your <span className="text-[#c8a24a]">requirement</span>
          </h2>
          <div className="mb-6 mt-3 h-1 w-12 rounded-full bg-[#c8a24a]" />

          <form onSubmit={onSubmit} noValidate={false} className="space-y-3.5">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your Name *"
              required
              minLength={2}
              autoComplete="name"
              className={`${field} ${fieldOk} block w-full`}
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email Address *"
              required
              autoComplete="email"
              className={`${field} ${fieldOk} block w-full`}
            />

            {/* country code + mobile */}
            <div>
              <div className="flex w-full gap-2">
                <select
                  value={iso}
                  onChange={onCountryChange}
                  aria-label="Country code"
                  className={`${field} ${fieldOk} w-[112px] shrink-0 cursor-pointer px-2`}
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.iso} value={c.iso}>
                      {c.iso} {c.code}
                    </option>
                  ))}
                </select>

                <input
                  ref={phoneRef}
                  type="tel"
                  inputMode="numeric"
                  name="phone"
                  value={form.phone}
                  onChange={onPhoneChange}
                  onBlur={() =>
                    form.phone && setPhoneError(validatePhone(form.phone, country))
                  }
                  placeholder="Mobile Number *"
                  required
                  maxLength={country.max + 6}
                  autoComplete="tel-national"
                  aria-invalid={!!phoneError}
                  className={`${field} ${phoneError ? fieldBad : fieldOk} min-w-0 flex-1`}
                />
              </div>

              <p
                className={`mt-1.5 text-xs ${
                  phoneError ? "text-red-600" : "text-slate-500"
                }`}
              >
                {phoneError || `${country.name}: ${country.hint}`}
              </p>
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Your Message *"
              required
              rows={3}
              className={`${field} ${fieldOk} block w-full resize-none`}
            />

            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg border border-[#c8a24a]/50 bg-[#071a3f] py-4 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-[0_10px_24px_-8px_rgba(7,26,63,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b2a5b] hover:shadow-[0_14px_28px_-8px_rgba(7,26,63,0.9)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {/* gold accent line on top */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#c8a24a] via-[#f3dc92] to-[#c8a24a]"
              />
              {/* shine sweep on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover:left-[130%]"
              />

              <span className="relative z-10">
                {loading ? "Sending..." : "Send Enquiry"}
              </span>

              {loading ? (
                <span
                  aria-hidden
                  className="relative z-10 h-5 w-5 animate-spin rounded-full border-2 border-[#c8a24a]/30 border-t-[#c8a24a]"
                />
              ) : (
                <span
                  aria-hidden
                  className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f3dc92] to-[#c8a24a] shadow-md transition-transform duration-300 group-hover:translate-x-1"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#071a3f"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="block"
                  >
                    <line x1="4" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}