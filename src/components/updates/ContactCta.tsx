import Link from "next/link";

type Props = {
  title: string;
  text: string;
  label?: string;
  href?: string;
};

export default function ContactCta({
  title,
  text,
  label = "Talk to our team",
  href = "/contact",
}: Props) {
  return (
    <div className="rounded-xl bg-slate-900 p-8 text-white">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 max-w-xl leading-7 text-slate-300">{text}</p>
      <Link
        href={href}
        className="mt-6 inline-block rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-teal-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
      >
        {label}
      </Link>
    </div>
  );
}