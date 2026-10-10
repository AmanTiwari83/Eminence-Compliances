import { notFound } from "next/navigation";
import NavLandingPage from "@/components/common/NavLandingPage";

const updatePages = {
  blog: {
    title: "Blog",
    description:
      "Practical guidance and insights on BIS certification, product approvals, and regulatory compliance.",
  },
  careers: {
    title: "Careers",
    description:
      "Explore opportunities to work with our team and help businesses navigate regulatory compliance.",
  },
  news: {
    title: "News",
    description:
      "Stay informed about regulatory notifications, certification changes, and important industry developments.",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function UpdateDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = Object.entries(updatePages).find(
    ([pageSlug]) => pageSlug === slug,
  )?.[1];

  if (!page) notFound();

  return (
    <NavLandingPage
      category="Updates"
      title={page.title}
      description={page.description}
    />
  );
}

export function generateStaticParams() {
  return Object.keys(updatePages).map((slug) => ({ slug }));
}
