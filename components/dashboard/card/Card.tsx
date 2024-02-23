import { CircleUser } from 'lucide-react';
import React from 'react';

const Card = () => {
    const change = 0;

    return (
        <div className='p-5 rounded-xl flex gap-5 cursor-pointer w-full bg-secondary'>
            <CircleUser />
            <div className='flex flex-col gap-5 '>
                <span className='text-2xl font-medium'>Users</span>
                <span className='text-2xl font-medium'>100</span>
            </div>
        </div>
    );
};

export default Card;
