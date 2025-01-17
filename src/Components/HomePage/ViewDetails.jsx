import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const { name, title, image, priceMin, priceMax, location, email, _id } = useLoaderData();
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">
                            {location}
                        </p>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;