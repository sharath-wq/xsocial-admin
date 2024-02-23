import Card from '@/components/dashboard/card/Card';
import Chart from '@/components/dashboard/chart/Chart';
import PopularPosts from '@/components/dashboard/popularPosts/PopularPosts';

export default function Dashboard() {
    return (
        <div className='flex gap-5 mt-5 '>
            <div className='flex-[3] flex flex-col gap-5'>
                <div className='flex gap-5 justify-between'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <PopularPosts />
                <Chart />
            </div>
        </div>
    );
}
