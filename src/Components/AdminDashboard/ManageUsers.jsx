import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users =[]} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    return (
        <div className='w-11/12 min-h-screen mx-auto py-8'>
        <div className='flex justify-between'>
            <h1 className="text-2xl font-bold mb-4">All Users: {users.length}</h1>
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200 shadow-md">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border w-1/6 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Name</th>
                        <th className="border w-1/12 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Email</th>
                        <th className="border w-1/12 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Make Admin</th>
                        <th className="border w-1/12 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Make Agent</th>
                        <th className="border w-1/12 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Delete</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {users.map((data) => (
                        <tr key={data._id}>
                            <td className="border border-gray-200 px-4 py-2">{data.name}</td>
                            <td className="border border-gray-200 px-4 py-2">{data.email}</td>
                            <td className="border border-gray-200 px-4 py-2"><Link to={`/update/${data._id}`}><button className="btn btn-primary  bg-gradient-to-l from-slate-700 via-fuchsia-700 to-slate-700 text-white">Make Admin</button></Link></td>
                            <td className="border border-gray-200 px-4 py-2"><Link to={`/update/${data._id}`}><button className="btn btn-primary  bg-gradient-to-l from-slate-700 via-fuchsia-700 to-slate-700 text-white">Make Agent</button></Link></td>
                            <td className="border border-gray-200 px-4 py-2"><button onClick={() => handleDelete(data._id)} className="btn btn-primary  bg-gradient-to-l from-slate-700 via-fuchsia-700 to-slate-700 text-white">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageUsers;