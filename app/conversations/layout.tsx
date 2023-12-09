//import getCurrentUser from "../actions/getCurrentUser";
import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "../conversations/components/ConversationList";

export default async function ConversationsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const conversations = await getConversations();
    const users = await getUsers();

    return (
        <>
            <Sidebar>
                <div className="h-full">
                    <ConversationList
                        users={users}
                        initialItems={conversations}
                    />
                    {children}
                </div>
            </Sidebar>
        </>
    )
}  