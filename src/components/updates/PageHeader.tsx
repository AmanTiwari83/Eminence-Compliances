import Link from "next/link";

type Props = {
  crumb: string;
  title: string;
  description: string;
};

export default function PageHeader({ crumb, title, description }: Props) {
  return (
    <header className="border-b border-slate-200 bg-slate-50">
      {/* pt is large because the navbar is fixed; reduce if yours is not */}
      <div className="mx-auto max-w-6xl px-6 pb-14 pt-10 md:pt-14">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
          <Link href="/updates" className="hover:text-slate-900">
            Updates
          </Link>
          <span aria-hidden className="mx-2">/</span>
          <span className="text-slate-900">{crumb}</span>
        </nav>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </header>
  );
}