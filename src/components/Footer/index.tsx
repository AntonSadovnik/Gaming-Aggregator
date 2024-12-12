import Logo from "@/components/Logo";
import Socials from "./components/Socials";
import MenuItems from "./components/MenuItems";

export default function index() {
  return (
    <footer className="bg-black">
      <div className="py-5">
        <div className="mb-12">
          <Logo />
        </div>
        <p className="text-mobile-6 mb-9">
          CineSphere is your go-to platform for a world of entertainment,
          offering a vast library of films, TV shows, and exclusive content.
        </p>
        <div className="flex gap-4 mb-16">
          <Socials />
        </div>
        <div>
          <MenuItems />
        </div>
      </div>
    </footer>
  );
}
