import { Link } from "@nextui-org/react";
import ClerkUserHeader from '@/components/clerkUserHeader'
import NavigationButton from "./navButton";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-16 bg-pitahaya-light-grey flex flex-row justify-around items-center py-5 z-20 top-0">
        {/* <Link legacyBehavior href="/" as={"/"}> */}
          <img className="cursor-pointer"  width={150} src="https://store.brth.uk/pitahaya/Pitahaya%20Labs%20-%20Logo%20png.png" alt="Pitahaya Labs Logo" />
            {/* <h2 className="logo cursor-pointer">Pitahaya</h2> */}
        {/* </Link> */}
        <div className="flex flex-row justify-center items-center gap-3">
          <ClerkUserHeader />
          <NavigationButton />
        </div>
    </nav>
  );
};

export default Navbar;