'use client';

import Card from '@/components/dashboard/card/Card';
import Chart from '@/components/dashboard/chart/Chart';
import PopularPosts from '@/components/dashboard/popularPosts/PopularPosts';
import { CARDS } from '@/constants';
import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

export default function Dashboard() {
    const [chartData, setChartData] = useState([]);
    const [cardData, setCardData] = useState([]);
    const [postData, setPostData] = useState([]);

    const getDashboardData = async () => {
        try {
            const { data } = await axios.get('/api/admin/dashboard');
            setChartData(data.chartData);
            setCardData(data.cardData);
            setPostData(data.popularPosts);
        } catch (e) {
            setChartData([]);
            setCardData([]);
            setPostData([]);
            const error = e as AxiosError;
        }
    };

    useEffect(() => {
        getDashboardData();
    }, []);

    return (
        <div className='flex gap-5 mt-5 '>
            <div className='flex-[3] flex flex-col gap-5'>
                <div className='flex gap-5 justify-between'>
                    {cardData.map((card: any, _: number) => (
                        <Card {...card} {...CARDS[_]} />
                    ))}
                </div>
                <PopularPosts data={postData} />
                {chartData && <Chart data={chartData} />}
            </div>
        </div>
    );
}
