import Navbar from "@/components/navbar";

const Chat: React.FC = () => {
  return (
    <>
        <Navbar />
        <div className="w-full h-screen flex flex-col justify-center items-center bg-pitahaya-light-grey">
            <h2>Chat</h2>
        </div>
    </>
  );
};

export default Chat;