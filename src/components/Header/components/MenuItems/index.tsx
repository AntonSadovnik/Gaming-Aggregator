import Link from "next/link";

export default function index() {
  const menuItems = [
    { id: 1, name: "Upcoming", url: "/" },
    { id: 2, name: "Shows", url: "/" },
    { id: 3, name: "Fanart", url: "/" },
    { id: 4, name: "Plans", url: "/" },
    { id: 5, name: "Community", url: "/" },
    { id: 6, name: "Account", url: "/" },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row gap-3">
        {menuItems.map(({ id, name, url }) => (
          <Link
            className="text-mobile-6 hover:text-primary"
            key={id}
            href={url}
          >
            {name}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <input
          className="w-full border border-primary"
          type="text"
          placeholder="Search"
        />
      </div>
    </>
  );
}
