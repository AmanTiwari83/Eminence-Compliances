import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleSections from "@/components/updates/ArticleSections";
import ContactCta from "@/components/updates/ContactCta";
import { formatDate } from "@/components/updates/utils";
import { newsItems } from "@/data/news";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} | Eminence Global Compliance Group`,
    description: item.summary,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) notFound();

  const others = newsItems.filter((n) => n.slug !== item.slug).slice(0, 3);

  return (
    <>
      <header className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-10 md:pt-14">
          <Link href="/updates/news" className="text-sm text-slate-500 hover:text-slate-900">
            &larr; All news
          </Link>
          <p className="mt-8 text-sm text-slate-600">
            {item.type} &middot; <time dateTime={item.date}>{formatDate(item.date)}</time>
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl">
            {item.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{item.summary}</p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-14">
  <div className="max-w-3xl">
        <ArticleSections sections={item.sections} />

        <div className="mt-16">
          <ContactCta
            title="Questions about this update?"
            text="Our team can explain how it affects your products and what you need to do next."
          />
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8">
          <h2 className="text-lg font-semibold text-slate-900">More news</h2>
          <ul className="mt-4 space-y-3">
            {others.map((n) => (
              <li key={n.slug}>
                <Link href={`/updates/news/${n.slug}`} className="text-teal-800 hover:underline">
                  {n.title}
                </Link>
                <span className="ml-3 text-sm text-slate-500">{formatDate(n.date)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </main>
    </>
  );
}