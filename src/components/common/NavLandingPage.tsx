import Link from "next/link";

interface NavLandingPageProps {
  category: string;
  title: string;
  description: string;
  links?: { label: string; href: string }[];
}

export default function NavLandingPage({
  category,
  title,
  description,
  links,
}: NavLandingPageProps) {
  return (
    <main className="min-h-[60vh] bg-slate-50 px-4 py-16 md:px-16 lg:px-28">
      <div className="mx-auto max-w-5xl">
        {/* <Link
          href={category === "Updates" ? "/updates" : "/portfolio"}
          className="text-sm font-semibold text-slate-500 transition-colors hover:text-[#0d1f3c]"
        >
          {category}
        </Link> */}
        <section className="mt-5 rounded-3xl border border-slate-100 bg-white p-7 shadow-sm sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a94e]">
            {category}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-[#0d1f3c] sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            {description}
          </p>

          {links ? (
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-slate-100 p-5 font-semibold text-[#0d1f3c] transition-all hover:-translate-y-0.5 hover:border-[#c9a94e]/50 hover:shadow-md"
                >
                  {link.label}
                  <span className="ml-2 text-[#c9a94e]" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-9 rounded-2xl bg-slate-50 p-5 text-sm leading-6 text-slate-600">
              More information about {title.toLowerCase()} will be available
              here soon. Contact our team if you would like to know more.
              <Link
                href="/contact"
                className="ml-1 font-semibold text-[#0d1f3c] underline decoration-[#c9a94e] underline-offset-4"
              >
                Get in touch
              </Link>
              .
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
