import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaBoxOpen, FaDollarSign, FaUser } from 'react-icons/fa';
import { PiChefHatBold } from 'react-icons/pi';
import Loading from '../Shared/Loading';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red'];

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    // Fetching admin stats
    const { data: stats, isLoading: statsLoading, isError: statsError, error: statsErrorObj } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        },
    });

    // Fetching order stats for chart
    const { data: ChartData = [], isLoading: chartLoading, isError: chartError, error: chartErrorObj } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        },
    });

    // Custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // Custom function for PieChart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const piChartData = ChartData.map((data) => {
        return { name: data.catagory, value: data.revenue };
    });

    // Handle loading and error states for stats and chart
    if (statsLoading || chartLoading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    if (statsError || chartError) {
        return <div>Error: {statsErrorObj?.message || chartErrorObj?.message}</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center p-8 w-full">
            <h2 className="md:text-3xl text-xl text-black font-bold mb-5">
                Hi Welcome <span>{user?.displayName ? user.displayName : 'Back.'}</span>
            </h2>

{/* Stats Section */}
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 shadow-lg p-6">
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-5 rounded-lg shadow-md">
        <div className="text-white text-3xl">
            <FaDollarSign />
        </div>
        <div className="text-white font-semibold">Revenue</div>
        <div className="text-white text-xl">${stats?.Revenue}</div>
    </div>

    <div className="bg-gradient-to-r from-green-400 to-teal-400 p-5 rounded-lg shadow-md">
        <div className="text-white text-3xl">
            <FaUser />
        </div>
        <div className="text-white font-semibold">Users</div>
        <div className="text-white text-xl">{stats?.user}</div>
    </div>

    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-5 rounded-lg shadow-md">
        <div className="text-white text-3xl">
            <PiChefHatBold />
        </div>
        <div className="text-white font-semibold">Total Menu</div>
        <div className="text-white text-xl">{stats?.menuItem}</div>
    </div>

    <div className="bg-gradient-to-r from-red-500 to-yellow-500 p-5 rounded-lg shadow-md">
        <div className="text-white text-3xl">
            <FaBoxOpen />
        </div>
        <div className="text-white font-semibold">Orders</div>
        <div className="text-white text-xl">{stats?.order}</div>
    </div>
</div>




            {/* Graph Section */}
            <div className="flex flex-wrap  justify-center items-center gap-5 mt-10">
                {/* Bar Chart */}
                <div className="w-full lg:w-1/2">
    {ChartData && ChartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={ChartData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {ChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    ) : (
        <div>No data available for chart.</div>
    )}
</div>

                {/* Pie Chart */}
                <div className="w-full lg:w-1/2">
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={piChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {piChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
