import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import User from '../../Shared/User';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const MyReviews = () => {
    const currentUser = User();
    console.log(currentUser)
    const axiosSecure = useAxiosSecure();
    const email = currentUser.email;
    const { data: review = [], refetch } = useQuery({
        queryKey: ['email', email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/review/${email}`);
            return res.data;
        }
    })
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
                axiosSecure.delete(`/review/${id}`)
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
    console.log(review)
    return (
        <div className='min-h-screen p-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    review.map((property) => (
                        <div key={property._id} className="card bg-base-100 shadow-xl">
                            <figure className='w-full h-1/2'>
                                <img
                                    className='h-full w-full'
                                    src={property.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body bg-white h-1/2">
                                <h2 className="card-title">
                                    Verification!
                                    <div className="badge badge-secondary bg-purple-500 p-3">
                                        {property?.verifyStatus === 'verify' ? "verified" : property?.verifyStatus === 'reject' ? "rejected" : "pending"}
                                    </div>
                                </h2>
                                <div className='flex justify-between items-start'>
                                    <div className='flex flex-col gap-0'>
                                        <p>{property.title}</p>
                                        <p>{property.location}</p>
                                        <p>{property.name}</p>
                                        <p>{property.createdAt}</p>
                                        <p>{property?.priceMin} _ {property?.priceMax}</p>
                                    </div>
                                    <div className='w-16 h-16 border'>
                                        <img className='h-full w-full' src={currentUser.image} alt={currentUser.name} />
                                    </div>
                                </div>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleDelete(property._id)} className="btn btn-primary bg-fuchsia-700 hover:bg-fuchsia-900">Deleted</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyReviews;