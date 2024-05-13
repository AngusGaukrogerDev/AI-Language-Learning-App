import DashboardButtons from "@/components/dashboardButtons";
import Navbar from "@/components/navbar";
import { useAuth } from '@clerk/nextjs';

const Dashboard: React.FC = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  console.log(userId)
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex flex-col justify-center items-center bg-pitahaya-light-grey z-0">
        <DashboardButtons />
      </div>
    </>
  );
};

export default Dashboard;