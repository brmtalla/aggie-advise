//import getCurrentUser from "../actions/getCurrentUser";
import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/conversationList";

export default async function ConversationsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const conversations = await getConversations();
    const users = await getUsers();

    return (
        <Sidebar>
            <div className="h-full">
                <ConversationList
                    users={users}
                    initialItems={conversations}
                />
                {children}          
            </div>   
        </Sidebar>
    )
}  