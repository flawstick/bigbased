'use client'

import React from 'react'

import { SidebarTrigger, useSidebar } from '@/components/ui';

const ClosedSidebarTrigger: React.FC = () => {

    const { isMobile, open } = useSidebar();
    
    if (isMobile || open) return null;

    return (
        <SidebarTrigger 
            className="absolute top-4 left-4 z-50"
        />
    )
}

export default ClosedSidebarTrigger;