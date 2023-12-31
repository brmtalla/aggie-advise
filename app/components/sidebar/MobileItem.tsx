import React from 'react'

import Link from "next/link";
import clsx from 'clsx';

interface MobileItemProps {
    href: string;
    icon: any;
    active?: boolean | undefined;
    onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({href, icon: Icon, active, onClick}) => {
    const handleClick = () => {
        if (onClick) {
            return onClick();
        }
    }
    
    return (
        <Link 
            onClick={onClick}
            href={href}
            className={clsx("group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-yellow-700 hover:text-black hover:bg-yellow-300", active && 'bg-yellow-200 text-black')}
            >
            <Icon className="h-6 w-6" />
        </Link>
    )
}

export default MobileItem