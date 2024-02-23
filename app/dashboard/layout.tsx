import Navbar from '@/components/dashboard/navbar/Navbar';
import Sidebar from '@/components/dashboard/sidebar/Sidebar';
import React from 'react';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className='flex flex-[1]'>
            <div className='flex-[1] p-5 min-h-screen'>
                <Sidebar />
            </div>
            <div className='flex-[4] p-5'>
                <Navbar />
                {children}
            </div>
        </div>
    );
};

export default Layout;
