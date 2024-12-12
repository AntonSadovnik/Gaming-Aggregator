import Link from "next/link";

export default function index() {
  const menuItems = [
    {
      title: "Company",
      links: [
        { name: "About Us", link: "/" },
        { name: "Careers", link: "/" },
        { name: "Press", link: "/" },
        { name: "Investors", link: "/" },
      ],
    },
    {
      title: "Help & Support",
      links: [
        { name: "Help Center", link: "/" },
        { name: "FAQs", link: "/" },
        { name: "Support", link: "/" },
        { name: "Account & Billing", link: "/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", link: "/" },
        { name: "Privacy Policy", link: "/" },
        { name: "Cookie Preferences", link: "/" },
        { name: "Accessibility", link: "/" },
      ],
    },
  ];
  return (
    <>
      {menuItems.map(({ title, links }) => (
        <div key={title}>
          <h4 className="text-mobile-4 mb-6">{title}</h4>
          <div className="mb-12">
            {links.map(({ name, link }) => (
              <div key={name} className="mb-6 last:mb-0">
                <Link className="text-mobile-6 hover:text-primary" href={link}>
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
