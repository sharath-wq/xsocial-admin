import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import React from 'react';

const PopularPosts = () => {
    return (
        <div className='bg-secondary p-5 rounded-xl'>
            <h2 className='mb-5 font-extralight'>Popular Posts</h2>
            <table className='w-full'>
                <thead>
                    <tr>
                        <td className='p-3'>Username</td>
                        <td className='p-3'>Status</td>
                        <td className='p-3'>Date</td>
                        <td className='p-3'>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='p-3'>
                            <div className='flex gap-3 items-center'>
                                <Image
                                    src='https://github.com/shadcn.png'
                                    alt=''
                                    width={40}
                                    height={40}
                                    className='object-cover rounded-full'
                                />
                                John Doe
                            </div>
                        </td>
                        <td className='p-3'>
                            <Badge variant={'outline'}>Pending</Badge>
                        </td>
                        <td className='p-3'>14.02.2024</td>
                        <td className='p-3'>$3.200</td>
                    </tr>
                    <tr>
                        <td className='p-3'>
                            <div className='flex gap-3 items-center'>
                                <Image
                                    src='https://github.com/shadcn.png'
                                    alt=''
                                    width={40}
                                    height={40}
                                    className='object-cover rounded-full'
                                />
                                John Doe
                            </div>
                        </td>
                        <td className='p-3'>
                            <Badge variant={'default'}>Done</Badge>
                        </td>
                        <td className='p-3'>14.02.2024</td>
                        <td className='p-3'>$3.200</td>
                    </tr>
                    <tr>
                        <td className='p-3'>
                            <div className='flex gap-3 items-center'>
                                <Image
                                    src='https://github.com/shadcn.png'
                                    alt=''
                                    width={40}
                                    height={40}
                                    className='object-cover rounded-full'
                                />
                                John Doe
                            </div>
                        </td>
                        <td className='p-3'>
                            <Badge variant={'destructive'}>Cancelled</Badge>
                        </td>
                        <td className='p-3'>14.02.2024</td>
                        <td className='p-3'>$3.200</td>
                    </tr>
                    <tr>
                        <td className='p-3'>
                            <div className='flex gap-3 items-center'>
                                <Image
                                    src='https://github.com/shadcn.png'
                                    alt=''
                                    width={40}
                                    height={40}
                                    className='object-cover rounded-full'
                                />
                                John Doe
                            </div>
                        </td>
                        <td className='p-3'>
                            <Badge variant={'outline'}>Pending</Badge>
                        </td>
                        <td className='p-3'>14.02.2024</td>
                        <td className='p-3'>$3.200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PopularPosts;
