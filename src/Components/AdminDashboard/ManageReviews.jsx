import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageReviews = () => {
    const axiosSecure = useAxiosSecure();
    const { data: review = [], refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosSecure.get('/review');
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
    return (
        <div className='min-h-screen p-4'>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    review.map((property) => (
                        <div key={property._id} className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src={property.reviewImage}
                                    alt="Reviewer Image"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{property.reviewName}</h2>
                                <p>{property.reviewEmail}</p>
                                <p>{property.description}</p>
                                <div className="card-actions">
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

export default ManageReviews;