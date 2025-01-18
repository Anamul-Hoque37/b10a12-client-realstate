import React from 'react';
import User from '../../Shared/User';

const MyProfile = () => {
    const data = User()
    return (
        <div className='p-8 flex items-center justify-center'>
            <div className="card bg-white w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={data.image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{data.name}</h2>
                    <p className='font-bold'>{data.email}</p>
                    <p className='text-xl font-bold'>{data.role}</p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;