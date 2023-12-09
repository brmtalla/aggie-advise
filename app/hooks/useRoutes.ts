import { use, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { HiAcademicCap, HiCalculator, HiChat, HiUserGroup } from 'react-icons/hi';
import { HiArrowLeftOnRectangle, HiChartPie, HiUsers } from 'react-icons/hi2';
import {signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

import useConversation from './useConversation';

const useRoutes = () => {
    const pathname = usePathname();
    const { conversationId } = useConversation();

    const routes = useMemo(() => [
        {
            label: 'Chat',
            href: '/conversations',
            icon: HiChat,
            active: pathname === '/conversations' || !!conversationId
        },
        {
            label: 'users',
            href: '/users',
            icon: HiUsers,
            active: pathname === '/users',
        },
        {
            label: 'GPA Calculator',
            href: '/gpa',
            icon: HiCalculator,
            active: pathname === '/gpa',
        },
        {
            label: 'Class Calculator',
            href: '/classes',
            icon: HiAcademicCap,
            active: pathname === '/classes',
        },
        {
            label: 'Advisor View',
            href: '/advisor',
            icon: HiUserGroup,
            active: pathname === '/advisor',
        },
        {
            label: 'Logout',
            href: '#',
            icon: HiArrowLeftOnRectangle,
            onClick: () => signOut(),
        },
    ], [pathname, conversationId]);
    
    return routes;
}

export default useRoutes;