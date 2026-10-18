import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleSections from "@/components/updates/ArticleSections";
import ContactCta from "@/components/updates/ContactCta";
import { formatDate, slugify } from "@/components/updates/utils";
import { blogPosts } from "@/data/blogs";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Eminence Global Compliance Group`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 0) - (b.category === post.category ? -1 : 0))
    .slice(0, 2);

  return (
    <>
      <header className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-10 md:pt-14">
          <Link href="/updates/blog" className="text-sm text-slate-500 hover:text-slate-900">
            &larr; All articles
          </Link>
          <p className="mt-8 text-sm text-teal-800">{post.category}</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-sm text-slate-600">
            {post.author.name}, {post.author.role} &middot; {formatDate(post.date)} &middot;{" "}
            {post.readingTime}
          </p>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-12 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <article className="max-w-3xl">
          <p className="mb-12 text-xl leading-9 text-slate-800">{post.excerpt}</p>
          <ArticleSections sections={post.sections} />
          <div className="mt-16">
            <ContactCta
              title={`Need help with ${post.relatedService}?`}
              text="Tell us about your product and we will confirm which approvals apply and what the process looks like."
            />
          </div>
        </article>

        <aside className="hidden lg:block">
          <nav aria-label="On this page" className="sticky top-28 border-l border-slate-200 pl-5">
            <p className="text-sm font-semibold text-slate-900">In this article</p>
            <ul className="mt-4 space-y-3 text-sm">
              {post.sections.map((s) => (
                <li key={s.heading}>
                  <a href={`#${slugify(s.heading)}`} className="text-slate-600 hover:text-teal-800">
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-8 block text-sm font-medium text-teal-800 hover:underline"
            >
              Our {post.relatedService} service
            </Link>
          </nav>
        </aside>
      </main>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-xl font-semibold text-slate-900">Keep reading</h2>
          <div className="mt-6 grid gap-10 md:grid-cols-2">
            {more.map((p) => (
              <Link key={p.slug} href={`/updates/blog/${p.slug}`} className="group block border-t-2 border-teal-700 pt-4">
                <p className="text-sm text-slate-500">{p.category}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-teal-800">
                  {p.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}