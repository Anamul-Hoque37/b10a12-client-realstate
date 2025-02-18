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
            <div className='w-full py-2 mx-auto gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                review.map((review)=>(<div className="card bg-base-100 shadow-xl">
                    <figure className="px-4 h-1/2">
                      <img
                        src={review.image}
                        alt="Shoes"
                        className="rounded-xl h-full w-full" />
                    </figure>
                    <div className="card-body bg-slate-100 items-center text-center">
                      <h2 className="card-title">{review.title}</h2>
                      <h2 className='text-black'>{review.name}</h2>
                      <p className='text-black'>{review.reviewName}</p>
                      <p className='text-black'>{review.description}</p>
                    </div>
                  </div>))
            }
        </div>
        </div>
        
    );
};

export default LatestUser;