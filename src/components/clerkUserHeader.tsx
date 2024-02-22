import { UserButton } from "@clerk/nextjs";

const ClerkUserHeader = () => {
    return(
        <header className="w-full flex flex-col items-end pt-2 pr-2">
            <UserButton afterSignOutUrl="/" />
        </header>
    );
}
export default ClerkUserHeader;