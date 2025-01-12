import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import moment from 'moment';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        },
    });

    return (
        <div>
            <h1 className="text-3xl text-black font-bold mb-5">
                Total Payment: {payments.length}
            </h1>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='text-xl font-bold text-black'>
                            <th>#</th>
                            <th>Total Price</th>
                            <th>Transaction ID</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((item, index) => (
                            <tr key={item._id} className="text-black font-semibold">
                                <th>{index + 1}</th>
                                <td>${item.price}</td>
                                <td>{item.transactionId}</td>
                                <td>{moment(item.date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                <td className='text-red-500'>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
