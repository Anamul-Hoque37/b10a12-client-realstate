import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AdvertiseProperty = () => {
    const axiosSecure = useAxiosSecure();
    const verifyStatus = 'verify';
    const { data: properties = [], refetch} = useQuery({
        queryKey: ['verifyStatus', verifyStatus],
        queryFn: async() => {
            const res = await axiosSecure.get(`/property/adds?verifyStatus=${verifyStatus}`);
            return res.data;
        }
    })
    const handleView = data => {
        axiosSecure.patch(`/property/adds/${data._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.name} is a Add Advertisement Section!`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }
    const handleHide = data => {
        axiosSecure.patch(`/property/hide/${data._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.name} is a Add Advertisement Section!`,
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
                            <th className="border w-1/6 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Property Image</th>
                            <th className="border w-1/3 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Property Title</th>
                            <th className="border w-1/6 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Agent Name</th>
                            <th className="border w-1/12 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Price Min</th>
                            <th className="border w-1/12 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Price Max</th>
                            <th className="border w-1/6 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {properties.map((data) => (
                            <tr key={data._id}>
                                <td className="border border-gray-200"><img className='w-44 h-14' src={data.image} alt="" /></td>
                                <td className="border border-gray-200 px-4">{data.title}</td>
                                <td className="border border-gray-200 px-4">{data.name}</td>
                                <td className="border border-gray-200 px-4">{data.priceMin}</td>
                                <td className="border border-gray-200 px-4">{data.priceMax}</td>
                                <td className="border border-gray-200 ">
                                    {data.adds === 'adds' ? <button onClick={() => handleHide(data)} className='btn btn-primary w-full bg-lime-500 text-center h-full text-white'>Advertise</button> : <button onClick={() => handleView(data)} className="btn btn-primary w-full bg-fuchsia-700 hover:bg-fuchsia-900  text-white">Not Advertise</button>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdvertiseProperty;