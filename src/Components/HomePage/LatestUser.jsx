import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const LatestUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: review = [], refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosSecure.get('/review/latest');
            return res.data;
        }
    })
    return (
        <div className='p-4'>
            <h1 className='text-3xl font-bold text-center pt-4 pb-8'>Latest User Review</h1>
            <div className='w-full mx-auto gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                review.map((review)=>(<div className="card bg-base-100 shadow-xl">
                    <figure className="px-10">
                      <img
                        src={review.image}
                        alt="Shoes"
                        className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{review.title}</h2>
                      <h2>{review.name}</h2>
                      <p>{review.reviewName}</p>
                      <p>{review.description}</p>
                    </div>
                  </div>))
            }
        </div>
        </div>
        
    );
};

export default LatestUser;