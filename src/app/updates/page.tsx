import NavLandingPage from "@/components/common/NavLandingPage";

const updateLinks = [
  { label: "Blog", href: "/updates/blog" },
  { label: "Careers", href: "/updates/careers" },
  { label: "News", href: "/updates/news" },
];

export default function UpdatesPage() {
  return (
    <NavLandingPage
      category="Updates"
      title="Updates"
      description="Read the latest news, insights, and career opportunities from Eminence Global Compliance Group."
      links={updateLinks}
    />
  );
}
