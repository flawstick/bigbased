'use client'

import React from 'react'

import { User } from 'lucide-react';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui';

const AccountButton: React.FC = () => {

    const pathname = usePathname();

    return (
        <Link href='/account'>
            <SidebarMenuItem>
                <SidebarMenuButton 
                    isActive={pathname?.includes('/account') ?? false}
                >
                    <h1 className="flex items-center gap-2 font-semibold">
                        <User className="h-4 w-4" />
                        Account
                    </h1>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </Link>
    )
}

export default AccountButton;