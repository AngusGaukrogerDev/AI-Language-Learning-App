import { useAuth } from "@clerk/nextjs";

const HomeIcon: React.FC = () => {
    const { isLoaded, userId, sessionId, getToken } = useAuth();
   
    return (
        <>
            {isLoaded ? 
                <a href="/dashboard">
                    <img className="cursor-pointer"  width={150} src="https://store.brth.uk/pitahaya/Pitahaya%20Labs%20-%20Logo%20png.png" alt="Pitahaya Labs Logo" />
                </a>
                :
                <a href="/">
                    <img className="cursor-pointer"  width={150} src="https://store.brth.uk/pitahaya/Pitahaya%20Labs%20-%20Logo%20png.png" alt="Pitahaya Labs Logo" />
                </a>
            }
        </>
    );
};

export default HomeIcon;