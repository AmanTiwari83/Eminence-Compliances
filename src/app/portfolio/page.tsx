import NavLandingPage from "@/components/common/NavLandingPage";

const portfolioLinks = [
  { label: "Case Studies", href: "/portfolio/case-studies" },
  { label: "Projects", href: "/portfolio/projects" },
  { label: "Clients", href: "/portfolio/clients" },
  { label: "Testimonials", href: "/portfolio/testimonials" },
];

export default function PortfolioPage() {
  return (
    <NavLandingPage
      category="Portfolio"
      title="Our Portfolio"
      description="Explore our client work, compliance projects, and the experiences of businesses we have supported."
      links={portfolioLinks}
    />
  );
}
