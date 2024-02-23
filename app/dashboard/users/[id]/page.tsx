'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Actions } from '@/components/dashboard/users/[id]/actions/Actions';

const page = () => {
    const [isBlocked, setIsBlocked] = useState(false);

    const handleSwitchChange = () => {
        setIsBlocked((prevIsBlocked) => !prevIsBlocked);
    };
    return (
        <div className='p-5 rounded-xl mt-5 flex justify-center'>
            <Card className='w-2/3 '>
                <CardHeader>
                    <div className='flex gap-3'>
                        <Avatar>
                            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle>Sharath Chandran P</CardTitle>
                            <CardDescription>@username</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className='flex flex-wrap md:flex-nowrap gap-4'>
                        <div className='text-center mb-2 md:mb-0'>
                            <span className='block font-bold text-lg'>222</span>
                            <span className=''>Posts</span>
                        </div>
                        <div className='text-center mb-2 md:mb-0'>
                            <span className='block font-bold text-lg'>444</span>
                            <span className=''>Followers</span>
                        </div>
                        <div className='text-center'>
                            <span className='block font-bold text-lg'>555</span>
                            <span className=''>Following</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className='flex justify-between'>
                    <Actions />
                </CardFooter>
            </Card>
        </div>
    );
};

export default page;
