import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/updates/PageHeader";
import { formatDate } from "@/components/updates/utils";
import { newsItems } from "../../../data/news";

export const metadata: Metadata = {
  title: "News | Eminence Global Compliance Group",
  description:
    "Company announcements, events and regulatory reminders from Eminence Global Compliance Group.",
};

const typeStyles: Record<string, string> = {
  Announcement: "bg-teal-50 text-teal-800 ring-teal-200",
  Event: "bg-amber-50 text-amber-800 ring-amber-200",
  "Regulatory update": "bg-rose-50 text-rose-800 ring-rose-200",
  Company: "bg-slate-100 text-slate-700 ring-slate-200",
};

export default function NewsPage() {
  const items = [...newsItems].sort((a, b) => b.date.localeCompare(a.date));
  const years = Array.from(new Set(items.map((i) => i.date.slice(0, 4))));

  return (
    <>
      <PageHeader
        crumb="News"
        title="What is happening at Eminence"
        description="Announcements about our services, upcoming events and short reminders on regulatory changes that can affect your products."
      />

<main className="mx-auto max-w-6xl px-6 py-16">
  <div className="max-w-4xl">
        {years.map((year) => (
          <section key={year} aria-labelledby={`year-${year}`} className="mb-12">
            <h2 id={`year-${year}`} className="mb-2 text-sm font-semibold text-slate-500">
              {year}
            </h2>
            <ul className="divide-y divide-slate-200 border-y border-slate-200">
              {items
                .filter((i) => i.date.startsWith(year))
                .map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/updates/news/${item.slug}`}
                      className="group grid gap-2 py-7 md:grid-cols-[9rem_1fr] md:gap-8 focus:outline-none focus-visible:bg-slate-50"
                    >
                      <time dateTime={item.date} className="text-sm text-slate-500 md:pt-1">
                        {formatDate(item.date)}
                      </time>
                      <div>
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${typeStyles[item.type]}`}
                        >
                          {item.type}
                        </span>
                        <h3 className="mt-2 text-xl font-semibold text-slate-900 group-hover:text-teal-800">
                          {item.title}
                        </h3>
                        <p className="mt-2 leading-7 text-slate-600">{item.summary}</p>
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        ))}
        </div>
      </main>
    </>
  );
}