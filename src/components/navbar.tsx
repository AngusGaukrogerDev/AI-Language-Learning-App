import { Link } from "@nextui-org/react";
import ClerkUserHeader from '@/components/clerkUserHeader'
import NavigationButton from "./navButton";
import HomeIcon from "./homeIcon";

const Navbar: React.FC = () => {

  // console.log("User ID:", userId);
  // console.log("isLoaded:", isLoaded);
  return (
    <nav className="w-full h-20 bg-pitahaya-light-grey flex flex-row justify-around items-center py-5 z-[98] top-0">
        <HomeIcon />
        <div className="flex flex-row justify-center items-center gap-3">
          <ClerkUserHeader />
          <NavigationButton />
        </div>
    </nav>
  );
};

export default Navbar;