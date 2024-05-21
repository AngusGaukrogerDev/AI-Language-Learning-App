import Navbar from "@/components/navbar";
import ChatBox from "@/components/chatBox";
const Chat: React.FC = () => {
  return (
    <>
        <Navbar />
        <div className="w-full h-screen flex flex-col justify-center items-center bg-pitahaya-light-grey">
            <h2>Chat</h2>
            <ChatBox />
        </div>
    </>
  );
};

export default Chat;