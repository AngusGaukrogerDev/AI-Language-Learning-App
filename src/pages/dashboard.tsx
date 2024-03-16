import DashboardButtons from "@/components/dashboardButtons";
import Navbar from "@/components/navbar";

const Dashboard: React.FC = () => {
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