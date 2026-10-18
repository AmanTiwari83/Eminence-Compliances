import type { Metadata } from "next";
import PageHeader from "@/components/updates/PageHeader";
import { CAREERS_EMAIL, jobOpenings, perks } from "@/data/carrers";

export const metadata: Metadata = {
  title: "Careers | Eminence Global Compliance Group",
  description:
    "Join a team that helps manufacturers and importers get their products approved. See current openings.",
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        crumb="Careers"
        title="Build a career in compliance"
        description="We help companies bring products to the Indian market the right way. If you like detail, deadlines and solving paperwork puzzles, you will fit in."
      />

      <main className="mx-auto grid max-w-6xl gap-16 px-6 py-16 lg:grid-cols-[18rem_minmax(0,1fr)]">
        {/* Left: why join */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-xl font-semibold text-slate-900">Why work with us</h2>
          <dl className="mt-6 space-y-6">
            {perks.map((perk) => (
              <div key={perk.title} className="border-l-2 border-teal-700 pl-4">
                <dt className="font-medium text-slate-900">{perk.title}</dt>
                <dd className="mt-1 text-sm leading-6 text-slate-600">{perk.text}</dd>
              </div>
            ))}
          </dl>
        </aside>

        {/* Right: openings */}
        <section aria-labelledby="openings">
          <h2 id="openings" className="text-xl font-semibold text-slate-900">
            Open positions ({jobOpenings.length})
          </h2>

          <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
            {jobOpenings.map((job) => (
              <details key={job.slug} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {job.department} &middot; {job.employmentType} &middot; {job.location} &middot;{" "}
                      {job.experience}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="mt-1 text-2xl leading-none text-teal-700 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <div className="mt-5 max-w-2xl space-y-6">
                  <p className="leading-7 text-slate-700">{job.summary}</p>

                  <div>
                    <h4 className="font-medium text-slate-900">What you will do</h4>
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-700">
                      {job.responsibilities.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-slate-900">What we look for</h4>
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-slate-700">
                      {job.requirements.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                    className="inline-block rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                  >
                    Apply for this role
                  </a>
                </div>
              </details>
            ))}
          </div>

          <p className="mt-8 max-w-xl leading-7 text-slate-600">
            Do not see a role that fits? Send your CV to{" "}
            <a className="font-medium text-teal-800 underline" href={`mailto:${CAREERS_EMAIL}`}>
              {CAREERS_EMAIL}
            </a>{" "}
            and tell us what you would like to work on.
          </p>
        </section>
      </main>
    </>
  );
}