import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageProperties = () => {
    const axiosSecure = useAxiosSecure();
    const { data: properties = [], refetch } = useQuery({
        queryKey: ['property'],
        queryFn: async () => {
            const res = await axiosSecure.get('/property');
            return res.data;
        }
    })
    const handleVerify = data => {
        axiosSecure.patch(`/property/verify/${data._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.name} is a Verified!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    const handleReject = data => {
        axiosSecure.patch(`/property/reject/${data._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.name} is a Reject Item!`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }
    return (
        <div className='w-11/12 min-h-screen mx-auto py-8'>
            <div className='flex justify-between'>
                <h1 className="text-2xl font-bold mb-4">All Properties: {properties.length} </h1>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 shadow-md">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border w-1/4 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Property Title</th>
                            <th className="border w-1/4 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Property Location</th>
                            <th className="border w-1/4 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Agent Name</th>
                            <th className="border w-1/3 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Agent Email</th>
                            <th className="border w-1/3 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Price Max</th>
                            <th className="border w-1/3 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Price Max</th>
                            <th className="border w-1/6 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Make Admin</th>
                            <th className="border w-1/6 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Make Agent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {properties.map((data) => (
                            <tr key={data._id}>
                                <td className="border border-gray-200 px-4">{data.title}</td>
                                <td className="border border-gray-200 px-4">{data.location}</td>
                                <td className="border border-gray-200 px-4">{data.name}</td>
                                <td className="border border-gray-200 px-4">{data.email}</td>
                                <td className="border border-gray-200 px-4">{data.priceMin}</td>
                                <td className="border border-gray-200 px-4">{data.priceMax}</td>
                                <td className="border border-gray-200 ">
                                    {data.verifyStatus === 'verify' ? <button className='btn btn-primary w-full bg-green-600 text-center h-full text-white'>Verified</button> : <button onClick={() => handleVerify(data)} className="btn btn-primary w-full bg-fuchsia-700 hover:bg-fuchsia-900  text-white">Make Verify</button>}
                                </td>
                                <td className="border border-gray-200 ">
                                    {data.verifyStatus === 'reject' ? <button className='btn btn-primary w-full bg-lime-500 text-center h-full text-white'>Rejected</button> : <button onClick={() => handleReject(data)} className="btn btn-primary w-full bg-fuchsia-700 hover:bg-fuchsia-900  text-white">Make Reject</button>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProperties;