'use client';

import Navbar from '@/components/dashboard/navbar/Navbar';
import Sidebar from '@/components/dashboard/sidebar/Sidebar';
import { useUser } from '@/context/user.context';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const { currentUser } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!currentUser || !currentUser.isAdmin) {
            router.replace('/login');
        }
    }, [router, currentUser]);

    return currentUser ? (
        <div className='flex flex-[1]'>
            <div className='flex-[1] p-5 min-h-screen'>
                <Sidebar />
            </div>
            <div className='flex-[4] p-5'>
                <Navbar />
                {children}
            </div>
        </div>
    ) : (
        <div>Loading...</div>
    );
};

export default Layout;
