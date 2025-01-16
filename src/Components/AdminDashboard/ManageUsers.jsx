import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users =[], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = data =>{
        axiosSecure.patch(`/users/admin/${data._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleMakeAgent = data =>{
        axiosSecure.patch(`/users/agent/${data._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is an Agent Now!`,
                    showConfirmButton: false,
                    timer: 2000
                  });
            }
        })
    }
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className='w-11/12 min-h-screen mx-auto py-8'>
        <div className='flex justify-between'>
            <h1 className="text-2xl font-bold mb-4">All Users: {users.length}</h1>
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-200 shadow-md">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border w-1/4 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Name</th>
                        <th className="border w-1/3 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Email</th>
                        <th className="border w-1/6 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Make Admin</th>
                        <th className="border w-1/6 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Make Agent</th>
                        <th className="border w-1/12 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Delete</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {users.map((data) => (
                        <tr key={data._id}>
                            <td className="border border-gray-200 px-4">{data.name}</td>
                            <td className="border border-gray-200 px-4">{data.email}</td>
                            <td className="border border-gray-200 ">
                                { data.role === 'admin' ? <button className='btn btn-primary w-full bg-green-600 text-center h-full text-white'>Admin</button> : <button onClick={() => handleMakeAdmin(data)}  className="btn btn-primary w-full bg-fuchsia-700 hover:bg-fuchsia-900  text-white">Make Admin</button>}
                                </td>
                            <td className="border border-gray-200 ">
                                {data.role === 'agent' ? <button className='btn btn-primary w-full bg-lime-500 text-center h-full text-white'>Agent</button> : <button onClick={() => handleMakeAgent(data)} className="btn btn-primary w-full bg-fuchsia-700 hover:bg-fuchsia-900  text-white">Make Agent</button>}
                                </td>
                            <td className="border border-gray-200"><button onClick={() => handleDelete(data._id)} className="btn btn-primary w-full bg-fuchsia-700 hover:bg-fuchsia-900 text-white">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageUsers;