'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios, { AxiosError } from 'axios';
import { Post } from '@/types/post';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CardDescription, CardTitle } from '@/components/ui/card';

const SinglePost = () => {
    const { id }: { id: string } = useParams();
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        const getPostById = async (id: string) => {
            try {
                const { data } = await axios.get(`/api/posts/${id}`);
                setPost(data);
            } catch (error) {
                const axiosError = error as AxiosError;
                console.error('Error fetching post:', axiosError.message);
                setPost(null);
            }
        };

        getPostById(id);
    }, [id]);

    return (
        <div className='w-full h-screen flex flex-col gap-10 mt-10'>
            {post && (
                <div className='w-full h-full flex gap-2'>
                    <div className='w-1/2 overflow-hidden'>
                        <Carousel className='w-full h-full'>
                            <CarouselContent>
                                {post.imageUrls.map((img, index) => (
                                    <CarouselItem key={index}>
                                        <div className='h-full'>
                                            <Image
                                                width={1000}
                                                height={1000}
                                                className='object-cover'
                                                src={img}
                                                alt='Post'
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                    <div className='flex flex-col gap-5 w-1/2 bg-opacity-75 p-6'>
                        <div className='flex items-center'>
                            <Link href={`/dashboard/users/${post.author.userId}`} className='flex gap-4'>
                                <Avatar>
                                    <AvatarImage src={post.author.imageUrl} alt={post.author.username} />
                                    <AvatarFallback>{post.author.username[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle>{post.author.username}</CardTitle>
                                    <CardDescription>{post.createdAt.toString()}</CardDescription>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <div className='font-bold text-xl mb-2'>{post.caption}</div>

                            <div className='mt-2'>
                                {post.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className='inline-block rounded-full px-3 py-1 text-sm font-semibold  mr-2'
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SinglePost;
