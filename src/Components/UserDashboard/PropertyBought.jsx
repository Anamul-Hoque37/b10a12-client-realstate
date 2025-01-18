import React from 'react';
import User from '../../Shared/User';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PropertyBought = () => {
    const data = User();
    const axiosSecure = useAxiosSecure();
    const email = data.email;
    const { data: bought = [] } = useQuery({
        queryKey: ['email', email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bought/${email}`);
            return res.data;
        }
    })
    return (
        <div className='min-h-screen p-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    bought.map((property) => (
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
                                        {property?.Status === 'accept' ? "Accepted" : "pending"}
                                    </div>
                                </h2>
                                <div className='flex justify-between items-start'>
                                    <div className='flex flex-col gap-0'>
                                        <p>{property.title}</p>
                                        <p>{property.location}</p>
                                        <p>{property.name}</p>
                                        <p>{property?.offerPrice}</p>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    {property?.Status === 'accept' ? <button className="btn btn-primary bg-fuchsia-700 hover:bg-fuchsia-900">Pay</button> : ""}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PropertyBought;