import { AlertTriangle, Headset, LayoutDashboard, LogOut, Settings, Users } from 'lucide-react';
import Admin from '../navbar/admin/Admin';
import MenuLink from '../navbar/menuLink/MenuLink';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/dark-mode-button';

const menuItems = [
    {
        title: 'Pages',
        list: [
            {
                title: 'Dashboard',
                path: '/dashboard',
                icon: <LayoutDashboard />,
            },
            {
                title: 'Users',
                path: '/dashboard/users',
                icon: <Users />,
            },
            {
                title: 'Support',
                path: '/dashboard/support',
                icon: <Headset />,
            },
        ],
    },
    {
        title: 'Analytics',
        list: [
            {
                title: 'Reports',
                path: '/dashboard/reports',
                icon: <AlertTriangle />,
            },
        ],
    },
    {
        title: 'User',
        list: [
            {
                title: 'Settings',
                path: '/dashboard/settings',
                icon: <Settings />,
            },
        ],
    },
];

const Sidebar = async () => {
    return (
        <div className='sticky top-10'>
            <div className='flex items-center gap-5 mb-5'>
                <Admin />
                <div className='flex flex-col'>
                    <span className='font-medium'>sharath-wq</span>
                    <span className='text-xs'>Administrator</span>
                </div>
                <div className='ml-auto'>
                    <ModeToggle />
                </div>
            </div>
            <ul>
                {menuItems.map((cat) => (
                    <li key={cat.title} className='py-2'>
                        <span className='font-bold text-sm mx-0 my-10'>{cat.title}</span>
                        {cat.list.map((item) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>

            <Button variant={'ghost'} className=''>
                <LogOut className='mr-2' />
                Logout
            </Button>
        </div>
    );
};

export default Sidebar;
