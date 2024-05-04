import Link from "next/link";

const NavigationScreen = ({ onSelectItem }: { onSelectItem: () => void }) => {
  return (
    <div className="fixed left-0 top-0 bg-pitahaya-light-grey w-full h-screen flex flex-col justify-center items-center gap-10 sm:gap-2 sm:py-3 px-5 z-[98] lg:gap-10 lg:h- xl:px-48 xl:py-32">
        <Link legacyBehavior href="/dashboard">
          Dashboard
        </Link>

    </div>
  );
};

export default NavigationScreen;
