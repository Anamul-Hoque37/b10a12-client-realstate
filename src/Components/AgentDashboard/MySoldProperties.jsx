import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import User from '../../Shared/User';

const MySoldProperties = () => {
    const currentUser = User();
    const axiosSecure = useAxiosSecure();
    // const [totalPrice, setTotalPrice] = useState(0);
    const soldStatus = 'sold'
    const { data: soldItem = [] } = useQuery({
        queryKey: ['soldStatus'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bought/agent/${soldStatus}`);
            return res.data;
        }
    });

    const sold = soldItem.filter((user) => user.email === currentUser.email);
    const total = sold.reduce((acc, property) => acc + property.offerPrice, 0);
    console.log(total)

    return (
        <div className='w-11/12 min-h-screen mx-auto py-8'>
            <div className='flex justify-between'>
                <h1 className="text-2xl font-bold mb-4">All Sold Properties: {sold.length}</h1>
                <p className="text-2xl font-bold mb-4">Total Amount: $ {total}</p>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border-2 border-slate-700 shadow-md">
                    <thead className='border-slate-700 border-2'>
                        <tr className="bg-green-500">
                            <th className="border w-1/4 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Title</th>
                            <th className="border w-1/3 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Location</th>
                            <th className="border w-1/6 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Buyer Email</th>
                            <th className="border w-1/6 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Buyer Name</th>
                            <th className="border w-1/12 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Sold Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {sold.map((data) => (
                            <tr key={data._id}>
                                <td className="border border-gray-200 px-4">{data.title}</td>
                                <td className="border border-gray-200 px-4">{data.location}</td>
                                <td className="border border-gray-200 px-4">{data.buyerName}</td>
                                <td className="border border-gray-200 px-4">{data.buyerEmail}</td>
                                <td className="border border-gray-200 px-4">{data.offerPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySoldProperties;