import { notFound } from "next/navigation";
import NavLandingPage from "@/components/common/NavLandingPage";

const portfolioPages = {
  "case-studies": {
    title: "Case Studies",
    description:
      "See how we help businesses navigate certification requirements and achieve their compliance goals.",
  },
  projects: {
    title: "Projects",
    description:
      "Learn about the compliance and certification projects supported by our regulatory experts.",
  },
  clients: {
    title: "Clients",
    description:
      "We partner with manufacturers and businesses across industries to support their regulatory needs.",
  },
  testimonials: {
    title: "Testimonials",
    description:
      "Read about the experiences of clients who have worked with our compliance and certification team.",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = Object.entries(portfolioPages).find(
    ([pageSlug]) => pageSlug === slug,
  )?.[1];

  if (!page) notFound();

  return (
    <NavLandingPage
      category="Portfolio"
      title={page.title}
      description={page.description}
    />
  );
}

export function generateStaticParams() {
  return Object.keys(portfolioPages).map((slug) => ({ slug }));
}
