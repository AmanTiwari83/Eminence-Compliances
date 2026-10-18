import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/updates/PageHeader";
import { formatDate } from "@/components/updates/utils";
import { blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog | Eminence Global Compliance Group",
  description:
    "Practical guides on BIS, WPC, EPR and ISO compliance for manufacturers, importers and brand owners.",
};

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHeader
        crumb="Blog"
        title="Guides for getting your product approved"
        description="Plain-language articles on certification, registration and compliance, written by the team that files these applications every day."
      />

      <main className="mx-auto max-w-6xl px-6 py-16">
        {/* Featured article */}
        <Link
          href={`/updates/blog/${featured.slug}`}
          className="group block rounded-2xl bg-slate-900 p-8 text-white md:p-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
        >
          <p className="text-sm text-teal-300">
            {featured.category} &middot; {formatDate(featured.date)}
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            {featured.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            {featured.excerpt}
          </p>
          <span className="mt-8 inline-block border-b border-teal-300 pb-0.5 text-sm font-medium text-teal-300 group-hover:text-white group-hover:border-white">
            Read the article
          </span>
        </Link>

        {/* Remaining articles */}
        <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2">
          {rest.map((post) => (
            <article key={post.slug} className="border-t-2 border-teal-700 pt-5">
              <p className="text-sm text-slate-500">
                {post.category} &middot; {post.readingTime}
              </p>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-slate-900">
                <Link
                  href={`/updates/blog/${post.slug}`}
                  className="hover:text-teal-800 focus:outline-none focus-visible:underline"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p>
              <p className="mt-4 text-sm text-slate-500">{formatDate(post.date)}</p>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}