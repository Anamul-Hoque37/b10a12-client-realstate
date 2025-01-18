import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Advertisement = () => {
    const axiosSecure = useAxiosSecure();
    const adds = 'adds';
    const { data: properties = [] } = useQuery({
        queryKey: ['adds'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/property/view/${adds}`);
            return res.data;
        }
    })
    return (
        <div className='min-h-screen p-4'>
            <h1 className='text-3xl font-bold text-center pt-4 pb-8'>See Ours Projects</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    properties.map((property) => (
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
                                        <p>{property.location}</p>
                                        <p>{property?.priceMin} _ {property?.priceMax}</p>
                                    </div>
                                </div>
                                <div className="card-actions justify-end">
                                    <Link to={`/view-details/${property._id}`}>
                                    <button className="btn btn-primary bg-fuchsia-700 hover:bg-fuchsia-900">View Details</button>
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

export default Advertisement;