import { UserButton } from "@clerk/nextjs";

const ClerkUserHeader = () => {
    return(
        <header className="w-full flex flex-col items-center  bg-pitahaya-light-grey">
            <UserButton afterSignOutUrl="/" />
        </header>
    );
}
export default ClerkUserHeader;