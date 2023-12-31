'use client';

import clsx from 'clsx';
import Link from 'next/link';

interface DesktopItemProps {
    href: string;
    label: string;
    icon: any;
    active?: boolean | undefined;
    onClick?: () => void;
  };
  
const DesktopItem: React.FC<DesktopItemProps> = ( {href, label, icon: Icon, active, onClick }) => {
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    }
    return (
        <li onClick={handleClick}>
            <Link 
                href={href}
                className={clsx('group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-grau-500 hover:text-yellow-900 hover:bg-yellow-300', active && 'bg-yellow-100 text-yellow-900')}
            >
                <Icon className = "h-6 w-6 shrink-0" />
                <span className="sr-only">
                    {label}
                </span>
            </Link>
        </li>
    )
}

export default DesktopItem