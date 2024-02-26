'use client';

import { Badge } from '@/components/ui/badge';
import { UserData } from '@/types/user';
import axios, { AxiosError } from 'axios';
import Image from 'next/image';
import React, { useEffect } from 'react';

const PopularPosts = () => {
    const [users, setUsers] = React.useState<UserData[]>();

    const getUsers = async () => {
        try {
            const { data } = await axios.get(`/api/users/`);
            setUsers(data);
        } catch (e) {
            const error = e as AxiosError;
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className='bg-secondary p-5 rounded-xl'>
            <h2 className='mb-5 font-extralight'>Popular Posts</h2>
            <table className='w-full'>
                <thead>
                    <tr>
                        <td className='p-3'>Username</td>
                        <td className='p-3'>Status</td>
                        <td className='p-3'>Date</td>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        users.map((user) => (
                            <tr>
                                <td className='p-3'>
                                    <div className='flex gap-3 items-center'>
                                        <Image
                                            src={user.imageUrl}
                                            alt=''
                                            width={40}
                                            height={40}
                                            className='object-cover rounded-full'
                                        />
                                        {user.username}
                                    </div>
                                </td>
                                <td className='p-3'>
                                    <Badge variant={`${user.isBlocked ? 'destructive' : 'default'}`}>
                                        {user.isBlocked ? 'Blocked' : 'Active'}
                                    </Badge>
                                </td>
                                <td className='p-3'>{user.createdAt}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default PopularPosts;
