'use client'

import React from 'react'

import { SidebarTrigger, useSidebar } from '@/components/ui';

const OpenSidebarTrigger: React.FC = () => {

    const { isMobile, open } = useSidebar();
    
    if (isMobile || !open) return null;

    return (
        <SidebarTrigger 
            className="hover:bg-neutral-200 dark:hover:bg-neutral-700 h-6 w-6"
        />
    )
}

export default OpenSidebarTrigger;