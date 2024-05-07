import { Link } from "@nextui-org/react";
import ClerkUserHeader from '@/components/clerkUserHeader'
import NavigationButton from "./navButton";
import HomeIcon from "./homeIcon";
import { Icon } from '@iconify/react';

const Navbar: React.FC = () => {

  // console.log("User ID:", userId);
  // console.log("isLoaded:", isLoaded);
  return (
    <nav className="w-full h-20 bg-pitahaya-light-grey flex flex-row justify-around items-center py-5 z-[98] top-0">
        <HomeIcon />
        <div className="flex flex-row justify-center items-center gap-3">
          <Link href="/dashboard">
            <Icon className="cursor-pointer" color="#2C2C2D" icon="lucide:home" width="50" height="50" />
          </Link>
          {/* <Link href="/">
            <Icon className="cursor-pointer" color="#2C2C2D" icon="lucide:arrow-up-left" width="50" height="50" />
          </Link> */}
          <ClerkUserHeader />
          {/* <NavigationButton /> */}
        </div>
    </nav>
  );
};

export default Navbar;