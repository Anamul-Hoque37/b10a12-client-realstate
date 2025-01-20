import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import User from '../../Shared/User';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const currentUser = User();
    const axiosSecure = useAxiosSecure();
    const email = currentUser.email;
    const { data: wishlist = [] } = useQuery({
        queryKey: ['email', email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/wishlist/${email}`);
            return res.data;
        }
    })
    return (
        <div className='min-h-screen p-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    wishlist.map((property) => (
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
                                        <p>{property?.priceMin} _ {property?.priceMax}</p>
                                    </div>
                                    <div className='w-16 h-16 border'>
                                        <img className='h-full w-full' src={currentUser.image} alt={currentUser.name} />
                                    </div>
                                </div>
                                <div className="card-actions justify-end">
                                    <Link to={`/make-offer/${property._id}`}>
                                        <button className="btn btn-primary bg-fuchsia-700 hover:bg-fuchsia-900">Make an offer</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Wishlist;