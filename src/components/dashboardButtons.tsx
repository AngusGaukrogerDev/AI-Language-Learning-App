import Link from "next/link";

const DashboardButtons: React.FC = () => {
  return (
    <div className="lg:w-1/4 grid grid-rows-2 grid-cols-2 gap-2 md:gap-5 justify-items-center items-center ">
        <Link legacyBehavior href="/lessons" to="/lessons">
            <div className="bg-pitahaya-yellow text-white h-28 w-28 md:h-44 md:w-44 text-center rounded-md flex flex-col justify-center items-center cursor-pointer transition duration-300 transform hover:scale-110">
                <h3>Lessons</h3>
            </div>
        </Link>
        <Link legacyBehavior href="/challenges" to="/challenges">
            <div className="bg-pitahaya-white text-pitahaya-black border-1 border-pitahaya-black h-28 w-28 md:h-44 md:w-44 text-center rounded-md flex flex-col justify-center items-center cursor-pointer transition duration-300 transform hover:scale-110">
                <h3>Challenges</h3>
            </div>
        </Link>
        <Link legacyBehavior href="/review" to="/review">
            <div className="bg-pitahaya-white text-pitahaya-black border-1 border-pitahaya-black h-28 w-28 md:h-44 md:w-44 text-center rounded-md flex flex-col justify-center items-center cursor-pointer transition duration-300 transform hover:scale-110">
                <h3>Review</h3>
            </div>
        </Link>
        <Link legacyBehavior href="/chat" to="/chat">
            <div className="bg-pitahaya-yellow text-white h-28 w-28 md:h-44 md:w-44 text-center rounded-md flex flex-col justify-center items-center cursor-pointer transition duration-300 transform hover:scale-110">
                <h3>Chat</h3>
            </div>
        </Link>
    </div>
  );
};

export default DashboardButtons;